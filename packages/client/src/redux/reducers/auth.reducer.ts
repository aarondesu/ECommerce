/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, UserResponse } from '../api/auth.api';

interface State {
  user: User;
  token: string;
}

const initialState: State = {
  user: null,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = '';
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
