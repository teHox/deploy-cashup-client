import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "@/types/types.ts";

type AuthType = {
    token: Auth | null;
    isAuth: boolean;
};

const initialState: AuthType = {
    token: null,
    isAuth: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Auth>) => {
            state.token = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
