import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./user/slice";
import contactsSlice from "./contacts/slice";
import searchSlice from "./search/slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        contact: contactsSlice,
        search: searchSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

