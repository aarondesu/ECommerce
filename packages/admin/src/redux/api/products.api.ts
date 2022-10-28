import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: string;
  name: string;
  isAvailable: boolean;
  img: string;
  price: number;
}

export interface CreateProduct {
  name: string;
  desc: string;
  img: string;
  price: number;
}

export interface ProductsRequest {
  page: number;
  keyword: string;
  sort: string;
  order: string;
}

export interface ProductsResponse {
  products: Product[];
  pages: number;
}

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/products',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    filter: builder.query<ProductsResponse, ProductsRequest>({
      query: (req) => ({
        url: `/p/${req.page}?key=${req.keyword}&sort=${req.sort}&order=${req.order}`,
        method: 'GET',
      }),
      providesTags: ['Products'],
    }),
    update: builder.mutation<Product, Product>({
      query: (req) => ({
        url: '/update/',
        method: 'POST',
        body: req,
      }),
      invalidatesTags: ['Products'],
    }),
    delete: builder.mutation<Product, Product>({
      query: (req) => ({
        url: `/remove/${req.id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Products'],
    }),
    create: builder.mutation<Product, CreateProduct>({
      query: (req) => ({
        url: '/create',
        method: 'POST',
        body: req,
      }),
      invalidatesTags: ['Products'],
    }),
    test: builder.mutation<void, FormData>({
      query: (req) => ({
        url: '/file',
        method: 'POST',
        body: req,
      }),
    }),
  }),
});

export const {
  useFilterQuery, useUpdateMutation, useDeleteMutation, useCreateMutation, useTestMutation,
} = productsApi;
