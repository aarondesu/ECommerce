import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VITE_API_SERVER } from '../../config';
import { User } from './users.api';

export interface LoginResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_API_SERVER as string}/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (req) => ({
        url: 'login',
        method: 'POST',
        body: req,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
