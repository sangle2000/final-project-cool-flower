import {useDispatch} from "react-redux";
import {deleteItem} from "../app/cart/cartSlice.js";

function CartItem({ id, image, name, price, quantity }) {
    const dispatch = useDispatch();

    const handleDeleteItemInCart = async () => {
        dispatch(deleteItem({ product_id: id, user_action: "delete" }));
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