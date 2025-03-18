import {createSlice} from "@reduxjs/toolkit";
import getUserProfile from "./getUserProfile.js";

const initialState = {
    "status": "idle",
    "id": null,
    "name": null,
    "email": null,
    "address": null,
    "role": null,
    "createAt": null,
    "wallet": 0,
    "phone": null,
    "item_in_cart": null,
    "isLogin": false,
    "error": null
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        loginAccount: (state) => {
            state.isLogin = true;
        },
        logoutAccount: (state) => {
            state.status = "idle";
            state.id = null
            state.name = null;
            state.email = null;
            state.address = null;
            state.phone = null;
            state.role = null;
            state.createAt = null;
            state.wallet = 0;
            state.isLogin = false;
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserProfile.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.status = "success";
                state.id = action.payload.id;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.address = action.payload.address;
                state.phone = action.payload.phone;
                state.role = action.payload.role;
                state.createAt = action.payload.createAt;
                state.wallet = action.payload.wallet;
                state.item_in_cart = action.payload.itemInCart;
            })
            .addCase(getUserProfile.rejected, (state) => {
                state.status = "error"
            })
    }
})

export const { logoutAccount, loginAccount } = accountSlice.actions;
export default accountSlice.reducer;
