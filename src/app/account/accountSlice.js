import {createSlice} from "@reduxjs/toolkit";
import postUserLogin from "./login/postUserLogin.js";
import postUserSignUp from "./signup/postUserSignUp.js";

const getUser = localStorage.getItem("authUser") ? JSON.parse(localStorage.getItem("authUser")) : {}

console.log(getUser);

const initialState = {
    "status": "idle",
    "name": getUser.name ? getUser.name : "",
    "email": getUser.email ? getUser.email : "",
    "token": localStorage.getItem("authToken") || null,
    "wallet": getUser.wallet ? getUser.wallet : 0,
    "isLogin": !!getUser,
    "error": ""
}

console.log(initialState)

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        logout: (state) => {
            state.status = "idle";
            state.name = "";
            state.email = "";
            state.token = "";
            state.wallet = 0;
            state.isLogin = false;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(postUserLogin.pending, (state) => {
                state.status = "loading"
            })

            .addCase(postUserLogin.fulfilled, (state, action) => {
                state.status = "success"
                state.name = action.payload.name
                state.email = action.payload.email
                state.token = action.payload.token
                state.wallet = action.payload.wallet
                state.isLogin = true;
            })

            .addCase(postUserLogin.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })

            .addCase(postUserSignUp.pending, (state) => {
                state.status = "loading"
            })

            .addCase(postUserSignUp.fulfilled, (state, action) => {
                state.status = "success"
                state.name = action.payload.name
                state.email = action.payload.email
                state.token = action.payload.token
                state.wallet = action.payload.wallet
                state.isLogin = true;
            })

            .addCase(postUserSignUp.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})

export const { logout } = accountSlice.actions;
export default accountSlice.reducer;
