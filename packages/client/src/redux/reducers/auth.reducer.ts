/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/auth.api';

const authSlice = createSlice({
  name: 'auth',
  initialState: { id: '', username: '' } as User,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
