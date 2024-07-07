import { api } from "./api";

interface User {
  id: number;
  name: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  password: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], Record<string, any>>({
      query: ({ url, params }) => ({
        url: `${url}`,
        params,
      }),
      providesTags: ["User"],
    }),
    registerUser: build.mutation<User, RegisterRequest>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = userApi;
