import {Login, UserData, UserState} from "./types";
import {createAsyncThunk, createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UserState = {
    isAuthorized: false,
    username: '',
    password: '',
    isLoading: false,
    isGotData: false,
    isError: false,
    requestedUser: {
        username: null,
        password: null,
        id: null,
    },
}

export const fetchUserData = createAsyncThunk(
    'user/fetchByName',
    async (username: string) => {
        const {data} = await axios.get(`http://localhost:3000/users?username=${username}`);
        return data[0]
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            if (state.requestedUser.password === state.password) {
                state.isAuthorized = true;
                state.isError = false;
            } else if (state.requestedUser.password !== state.password) {
                console.error('invalid password');
                state.isError = true;
                state.isGotData = false;
            }
        },
        setUserInfo: (state, action: PayloadAction<Login>) => {
            state.username = String(action.payload.username);
            state.password = String(action.payload.password);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
            if (action.payload !== undefined) {
                state.requestedUser = action.payload;
            }
            state.isLoading = false;
            state.isGotData = true;
        });
        builder.addCase(fetchUserData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUserData.rejected, (state) => {
            state.isLoading = false;
            console.error('Error');
        });
    }
})

export const { login, setUserInfo } = userSlice.actions;

export default userSlice.reducer