import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { usersApi } from './api/users.api';

const reducers = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
