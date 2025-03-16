import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from "react";
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem.jsx";

function CartDrawer({ isShowCart, setIsShowCart }) {

    const cartItemList = [
        {
            id: 0,
            name: "Resin night light (Origin - ALD)",
            image: "https://imgur.com/7v6usuI.jpg",
            price: 1200000,
            quantity: 1,
        },
        {
            id: 1,
            name: "Resin night light (Origin - ALH)",
            image: "https://imgur.com/NSEzToO.jpg",
            price: 1200000,
            quantity: 1,
        }
    ]

    return (
        <>
            <Offcanvas
                show={isShowCart}
                onHide={() => setIsShowCart(false)}
                placement='end'
                className="cart-container"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="flex flex-col">
                    <div className="flex-1 flex flex-col gap-2">
                        {
                            cartItemList.map((cartItem) => {
                                return (
                                    <CartItem
                                        key={cartItem.id}
                                        name={cartItem.name}
                                        image={cartItem.image}
                                        price={cartItem.price}
                                        quantity={cartItem.quantity}
                                    />
                                )
                            })
                        }
                    </div>

                    <div>
                        Subtotal: {
                        cartItemList.reduce((acc, cartItem) => {
                            return acc + cartItem.price * cartItem.quantity;
                        }, 0).toLocaleString("de-DE")
                    } VNĐ
                    </div>

                </Offcanvas.Body>

                <div>
                    <Button variant="primary" className="me-2">
                        View cart
                    </Button>

                    <Button variant="primary" className="me-2">
                        Checkout
                    </Button>
                </div>
            </Offcanvas>
        </>
    )
}

export default CartDrawer;