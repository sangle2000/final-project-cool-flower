import {createAsyncThunk} from "@reduxjs/toolkit";
import updateUserCartAPI from "./updateUserCartAPI.js";

const updateUserCart = createAsyncThunk(
    "userCart/cartItem",
    async ({ token, payload }, { rejectWithValue }) => {
        try {
            const response = await updateUserCartAPI({ token, payload: payload });

            console.log(response);

            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
})

export default updateUserCart;
