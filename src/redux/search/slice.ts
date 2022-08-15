import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchSlice {
    searchValue: string;
}

const initialState: SearchSlice = {
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})

export const {updateSearchValue} = searchSlice.actions;

export default searchSlice.reducer

