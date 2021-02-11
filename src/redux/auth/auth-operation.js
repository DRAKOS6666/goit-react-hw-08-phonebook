import * as authApi from 'services/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {};

export const signupUser = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const newUser = await authApi.signupUser(userData);
      return newUser;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);
export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authApi.loginUser(userData);
      return response;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);
export const logoutUser = createAsyncThunk(
  'user/logout',
  async (token, { rejectWithValue }) => {
    try {
      const response = await authApi.logoutUser(token);
      return response;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);
export const getCurrentUser = createAsyncThunk(
  'user/getCurentUser',
  async (token, { rejectWithValue }) => {
    try {
      const response = await authApi.getCurrentUser(token);
      return response;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);
