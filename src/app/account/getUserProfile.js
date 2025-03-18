import {createAsyncThunk} from "@reduxjs/toolkit";
import getUserProfileAPI from "./getUserProfileAPI.js";

const getUserProfile = createAsyncThunk(
    "account/profile",
    async ({ token }, {rejectWithValue}) => {
        try {
            const response = await getUserProfileAPI({ token })

            const responseData = response.data

            if (responseData.errors) {
                return rejectWithValue(responseData.errors[0].message);
            }

            // const data = responseData.data.protectedData.data
            //
            // console.log(data)

            return responseData.data.protectedData.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export default getUserProfile;