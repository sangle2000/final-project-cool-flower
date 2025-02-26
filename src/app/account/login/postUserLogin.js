import {createAsyncThunk} from "@reduxjs/toolkit";
import postUserLoginAPI from "./postUserLoginAPI.js";

const postUserLogin = createAsyncThunk(
    "account/login",
    async ({ email, password }) => {
        try {
            const response = await postUserLoginAPI({ email, password });

            const data = response.data.data.login.user

            localStorage.setItem("authToken", data.token);
            localStorage.setItem("authUser", JSON.stringify(data));

            console.log("Data: ", data)

            return data;
        } catch {
            throw new Error("Something have been error when login");
        }
    }
)

export default postUserLogin;
