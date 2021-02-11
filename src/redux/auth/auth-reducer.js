import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import * as actions from './contacts-actions';

import { authOperations } from 'redux/auth';

const isLoading = createReducer(false, {
  [authOperations.getCurrentUser.pending]: () => true,
  [authOperations.getCurrentUser.fulfilled]: () => false,
  [authOperations.getCurrentUser.rejected]: () => false,

  [authOperations.signupUser.pending]: () => true,
  [authOperations.signupUser.fulfilled]: () => false,
  [authOperations.signupUser.rejected]: () => false,

  [authOperations.loginUser.pending]: () => true,
  [authOperations.loginUser.fulfilled]: () => false,
  [authOperations.loginUser.rejected]: () => false,

  [authOperations.logoutUser.pending]: () => true,
  [authOperations.logoutUser.fulfilled]: () => false,
  [authOperations.logoutUser.rejected]: () => false,
});

const error = createReducer(null, {
  [authOperations.getCurrentUser.rejected]: (_, { payload }) => payload,
  [authOperations.signupUser.rejected]: (_, { payload }) => payload,
  [authOperations.loginUser.rejected]: (_, { payload }) => payload,
  [authOperations.logoutUser.rejected]: (_, { payload }) => payload,

  [authOperations.getCurrentUser.pending]: () => null,
  [authOperations.signupUser.pending]: () => null,
  [authOperations.loginUser.pending]: () => null,
  [authOperations.logoutUser.pending]: () => null,
});

const user = createReducer([], {
  [authOperations.getCurrentUser.fulfilled]: (_, { payload }) => payload,
  [authOperations.signupUser.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [authOperations.logoutUser.fulfilled]: (state, { payload }) =>
    state.filter(user => user.id !== payload),
});

export default combineReducers({
  user,
  isLoading,
  error,
});
