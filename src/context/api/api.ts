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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Books" as const, id })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, number>({
      query: (postId) => ({
        url: `books/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    updateBook: builder.mutation<BookDataSchema, Partial<BookDataSchema>>({
      query: (updatedPost) => ({
        url: `books/${updatedPost.id}`,
        method: "PUT", // Yoki 'PATCH' ham bo'lishi mumkin
        body: updatedPost,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Books", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = apiSlice;
