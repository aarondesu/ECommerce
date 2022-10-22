import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth.reducer';
import { authApi } from './api/auth.api';

const reducers = combineReducers({
  authReducer, [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
