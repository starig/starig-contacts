import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Contact} from "./types";


export const contactsAdapter = createEntityAdapter<Contact>();
export const contactsSelectors = contactsAdapter.getSelectors<RootState>((state) => state.contact)

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsAdapter.getInitialState(),
    reducers: {
        addContact: contactsAdapter.addOne,
        removeContact: (state, action) => {
            contactsAdapter.removeOne(state, action.payload)
        },
        updateContact: contactsAdapter.updateOne,
    }
});
export const {addContact, removeContact, updateContact} = contactsSlice.actions;

export default contactsSlice.reducer;