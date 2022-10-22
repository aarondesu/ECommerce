import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: string;
  username: string;
  role: string;
  email: string;
  img: string;
}

export interface UsersRequest {
  limit: number;
  page: number;
  word: string;
  order: string;
  sort: string;
}

export interface UsersResponse {
  users: User[];
  pages: number;
}

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/users',
  }),
  endpoints: (builder) => ({
    paginate: builder.query<UsersResponse, UsersRequest>({
      query: (req) => ({
        url: `/p/${req.page}?key=${req.word}&sort=${req.sort}&order=${req.order}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePaginateQuery } = usersApi;
