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
