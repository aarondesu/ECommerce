import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VITE_API_SERVER } from '../../config';

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
  keyword: string;
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
    baseUrl: `${VITE_API_SERVER as string}/users`,
  }),
  endpoints: (builder) => ({
    paginate: builder.query<UsersResponse, UsersRequest>({
      query: (req) => ({
        url: `/p/${req.page}?key=${req.keyword}&sort=${req.sort}&order=${req.order}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePaginateQuery } = usersApi;
