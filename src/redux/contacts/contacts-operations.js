import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsApi } from 'redux/contacts';

export const getContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.getContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(`${err.message} ${err.name}`);
    }
  },
);

// export const getContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsApi.getContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };
export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await contactsApi.addContact(contact);
      return newContact;
    } catch (err) {
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);

// export const addContact = contact => async dispatch => {
//   dispatch(contactsActions.addContactRequest());
//   try {
//     const addedContact = await contactsApi.addContacts(contact);
//     dispatch(contactsActions.addContactSuccess(addedContact));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error));
//   }
// };

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch (err) {
      console.log('err', err.response);
      return rejectWithValue(
        `${err.response.statusText} ${err.response.status}`,
      );
    }
  },
);

// export const deleteContact = id => async dispatch => {
//   dispatch(contactsActions.deleteContactRequest());
//   try {
//     await contactsApi.deleteContacts(id);
//     dispatch(contactsActions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactError(error));
//   }
// };
