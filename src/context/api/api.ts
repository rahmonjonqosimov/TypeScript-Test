import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserSchema {
  id: number;
  username: string;
  password: string;
}

export interface BookDataSchema {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: string;
  published: string;
  title: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66897a620ea28ca88b881a26.mockapi.io/api/test/",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    // users
    getUsers: builder.query<UserSchema[], void>({
      query: () => "users",
    }),
    registerUser: builder.mutation<UserSchema, Partial<UserSchema>>({
      query: (newPost: UserSchema) => ({
        url: "users",
        method: "POST",
        body: newPost,
      }),
    }),

    // books
    getBooks: builder.query<BookDataSchema[], void>({
      query: () => "books",
      providesTags: ["Books"],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, number>({
      query: (postId) => ({
        url: `books/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<BookDataSchema, Partial<BookDataSchema>>({
      query: (updatedPost) => ({
        url: `books/${updatedPost.id}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: ["Books"],
    }),
    createBook: builder.mutation<BookDataSchema, Partial<BookDataSchema>>({
      query: (newPost) => ({
        url: "books",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useCreateBookMutation,
} = apiSlice;
