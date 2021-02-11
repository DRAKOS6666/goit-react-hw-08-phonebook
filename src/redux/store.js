import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
