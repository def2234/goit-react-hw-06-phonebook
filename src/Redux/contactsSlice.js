import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContacts(state, action) {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
