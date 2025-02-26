import axios from "axios";
import {api} from "../../../utils/constant.js";

const postUserLoginAPI = async ({ email, password }) => {
    try {
        const response = await axios.post(
            api, {
                query: `
                    mutation {
                      login(email: "${email}", password: "${password}") {
                        user {
                          id
                          name
                          email
                          token
                          wallet
                        }
                      }
                    }
                `
            })

        console.log("Login API response: ", response)

        return response;
    } catch {
        throw new Error("Something have been error when login");
    }
}

export default postUserLoginAPI;
