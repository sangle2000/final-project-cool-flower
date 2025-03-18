import {useMutation} from "@apollo/client";
import {DELETE_ITEM_IN_CART} from "../utils/graphql/mutations.js";
import getUserProfile from "../app/account/getUserProfile.js";
import {useDispatch} from "react-redux";

function CartItem({ id, image, name, price, quantity, refetch }) {
    const dispatch = useDispatch();

    const [deleteItemInCart] = useMutation(DELETE_ITEM_IN_CART, {
        onCompleted: () => {
            const token = localStorage.getItem("authToken");

            if (token) {
                dispatch(getUserProfile({ token }))
            }

            refetch()
        }
    })

    const handleDeleteItemInCart = async () => {
        try {
            await deleteItemInCart({
                variables: {
                    productId: id
                }
            })
        } catch (e) {
            throw new Error(e)
        }
    }

    return (
        <>
            <div className="cart-item-container">
                <img
                    src={image}
                    alt={name}
                    className="cart-item-image"
                />

                <div className="cart-item-detail">
                    <span className="cart-item-name">
                        {name}
                    </span>

                    <span className="cart-item-price">
                        {quantity} x {`${price.toLocaleString("de-DE")} VNĐ`}
                    </span>
                </div>

                <button className="close-btn" onClick={handleDeleteItemInCart}>
                    <i className="bi bi-x-lg"></i>
                </button>

            </div>
        </>
    )
}

export default CartItem;