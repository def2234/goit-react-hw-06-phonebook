import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  contacts: contactsSlice.reducer,
});

export const persistedContacts = persistReducer(persistConfig, rootReducer);
