import {createAsyncThunk} from "@reduxjs/toolkit";
import getUserCartAPI from "./getUserCartAPI.js";

const getUserCart = createAsyncThunk(
    'userCart/getUserCart',
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await getUserCartAPI({ token })

            console.log(response);

            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export default getUserCart;