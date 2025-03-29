import axios from "axios";
import {api} from "../../utils/constant.js";

const getUserCartAPI = async ({ token }) => {
    try {
        const response = await axios.post(
            api,
            {
                query:
                    `
                        query {
                          userCartData {
                            status
                            message
                            data {
                              id
                              productCode
                              name
                              price
                              salePercent
                              quantity
                              imageUrl
                            }
                          }
                        }
                    `
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )

        return response.data.data;
    } catch (err) {
        throw new Error(`Error getting user cart API: ${err}`);
    }
}

export default getUserCartAPI;