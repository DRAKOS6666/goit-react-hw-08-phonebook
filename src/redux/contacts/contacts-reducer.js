import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contacts-actions';

import { contactsOperations } from 'redux/contacts';

const isLoading = createReducer(false, {
  [contactsOperations.getContacts.pending]: () => true,
  [contactsOperations.getContacts.fulfilled]: () => false,
  [contactsOperations.getContacts.rejected]: () => false,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [contactsOperations.getContacts.rejected]: (_, { payload }) => payload,
  [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.getContacts.pending]: () => null,
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.deleteContact.pending]: () => null,
});

const items = createReducer([], {
  [contactsOperations.getContacts.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.findContact]: (_, { payload }) => payload,
  [contactsOperations.getContacts.pending]: () => '',
});
export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
