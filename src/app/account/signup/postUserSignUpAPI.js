import axios from "axios";
import {api} from "../../../utils/constant.js";

const postUserSignUpAPI = async ({ email, password }) => {
    try {
        const response = await axios.post(
            api, {
                query: `
                    mutation {
                      signUp(email: "${email}", password: "${password}") {
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
            }
        )

        console.log("Sign Up API response: ", response)

        return response;
    } catch {
        throw new Error("Something went wrong when sign up");
    }
}

export default postUserSignUpAPI;