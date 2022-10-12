import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export interface User {
  id: string;
  username: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface AuthorizationRequest {
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).authReducer;

      if (token !== '') {
        headers.set('authorization', token);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<UserResponse, RegisterRequest>({
      query: (formData) => ({ url: 'register', method: 'post', body: formData }),
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    authorize: builder.query<string, void>({
      query: () => ({
        url: 'authorized',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useAuthorizeQuery } = authApi;
