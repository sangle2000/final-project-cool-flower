import axios from "axios";
import {api} from "../../utils/constant.js";

const getUserProfileAPI = async ({ token }) => {
    try {
        const response = await axios.post(
            api,
            {
                query: `
                    query {
                        protectedData {
                          status
                          message
                          data {
                            id
                            email
                            name
                            phone
                            address
                            role
                            createdAt
                            wallet
                            itemInCart
                          }
                        }
                      }
                `
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        )

        return response;
    } catch (err) {
        throw new Error(`Error ${err}`)
    }
}

export default getUserProfileAPI