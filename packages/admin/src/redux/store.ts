import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { usersApi } from './api/users.api';
import { productsApi } from './api/products.api';
import { authApi } from './api/auth.api';

import authReducer from './slice/authSlice';

const reducers = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    usersApi.middleware,
    productsApi.middleware,
    authApi.middleware,
  ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
