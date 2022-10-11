import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth.reducer';
import { authApi } from './api/auth.api';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
