import { api } from "./api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

interface Book {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: string;
  published: string;
  title: string;
}

export const booksApi = api.injectEndpoints({
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    getBooks: build.query<Book[], { [key: string]: any }>({
      query: (params: string) => ({
        url: "/books",
        params,
      }),
      providesTags: ["Books"],
    }),

    // createBook: build.mutation<Book, Partial<Book>>({
    //   query: (body) => ({
    //     url: "/books",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Books"],
    // }),
    // updateBook: build.mutation<Book, { body: Partial<Book>; id: string }>({
    //   query: ({ body, id }) => ({
    //     url: `/books/${id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Books"],
    // }),
    deleteBook: build.mutation<{ id: string }, string>({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
