import axios from "axios";
import {api} from "../../utils/constant.js";

const updateUserCartAPI = async ({ token, payload }) => {
    try {

        const response = await axios.post(
            api,
            {
                query: `
                    mutation {
                        updateUserCartItem(payload: [
                            ${payload.map(el => `{
                                productId: ${el.productId}, 
                                userAction: "${el.userAction}", 
                                ${el.quantity ? `quantity: ${el.quantity}` : ""}
                            }`).join(", ")}
                        ]) {
                            status
                            errors
                        }
                    }
                `
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }
        )

        console.log(response)

        return response;
    } catch (err) {
        console.error(err);

        throw new Error(`Error ${err}`)
    }
}

export default updateUserCartAPI;