function CartItem({ image, name, price, quantity }) {
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

                <button className="close-btn">
                    <i className="bi bi-x-lg"></i>
                </button>

            </div>
        </>
    )
}

export default CartItem;