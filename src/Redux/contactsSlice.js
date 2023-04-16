import { createSlice } from  "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'




const persistConfig = {
    key: 'contacts',
    storage,
  }

 export const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact (state, action) {
           return [...state, action.payload]},
        deleteContacts (state, action) {state.filter(contact => contact.id !== action.payload)}
    }
})

export const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer)

export const {addContact, deleteContacts} = contactsSlice.actions

