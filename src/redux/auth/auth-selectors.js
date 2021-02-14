import { createSelector } from '@reduxjs/toolkit';

export const getError = state => state.auth.error;
export const getIsAuthUser = state => state.auth.isLoggedIn;
export const getUser = state => state.auth.user;
