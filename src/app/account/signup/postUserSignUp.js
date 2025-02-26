import {createAsyncThunk} from "@reduxjs/toolkit";
import postUserSignUpAPI from "./postUserSignUpAPI.js";

const postUserSignUp = createAsyncThunk(
    "account/signup",
    async ({ email, password }) => {
        try {
            const response = await postUserSignUpAPI({ email, password });

            const data = response.data.data.signUp.user

            localStorage.setItem("authToken", data.token);
            localStorage.setItem("authUser", JSON.stringify(data));

            console.log("Data: ", data)

            return data;
        } catch {
            throw new Error("Some thing went wrong when receive data")
        }
    }
)

export default postUserSignUp;