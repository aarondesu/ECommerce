import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: string;
  name: string;
  isAvailable: boolean;
  img: string;
  price: number;
}

export interface ProductsRequest {
  page:number;
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
  endpoints: (builder) => ({
    paginate: builder.query<ProductsResponse, ProductsRequest>({
      query: (req) => ({
        url: `/p/${req.page}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePaginateQuery } = productsApi;
