/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/users.api';
import { LoginResponse } from '../api/auth.api';

export interface AuthState {
  user: User;
  token:string;
}

export const initialState:AuthState = {
  user: null,
  token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    reset: (state) => {
      state.user = null;
      state.token = '';
    },
  },
});

export const { setCredentials, reset } = authSlice.actions;
export default authSlice.reducer;
