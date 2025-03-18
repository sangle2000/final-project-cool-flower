import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem.jsx";
import {useQuery} from "@apollo/client";
import {USER_CART_DATA_QUERY} from "../utils/graphql/queries.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function CartDrawer({ isShowCart, setIsShowCart }) {

    const [cartItems, setCartItems] = useState([]);

    const { data, loading, error, refetch } = useQuery(USER_CART_DATA_QUERY)

    const navigate = useNavigate()

    useEffect(() => {
        if (!data) return;

        setCartItems(data.userCartData.data);
    }, [data, isShowCart]);

    useEffect(() => {
        if (!isShowCart) return;

        refetch()
    }, [isShowCart])

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
                            cartItems.length === 0 ?
                                <div className="w-full h-full flex justify-center items-center">
                                    <span className="text-[#61656b]">You have no item in cart</span>
                                </div>
                                :
                                cartItems.map((cartItem) => {
                                return (
                                    <CartItem
                                        key={cartItem.id}
                                        id={cartItem.id}
                                        name={cartItem.name}
                                        image={cartItem.imageUrl}
                                        price={cartItem.price - (cartItem.price * cartItem.salePercent)}
                                        quantity={cartItem.quantity}
                                        refetch={refetch}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="flex justify-between pt-[1rem] pb-[1rem] border-t border-b border-[#ccc]">
                        <span className="font-[700]">
                            Subtotal:
                        </span>

                        <span className="font-[700] text-[#61656b]">
                            {
                                cartItems.reduce((acc, cartItem) => {
                                    return acc + (cartItem.price - (cartItem.price * cartItem.salePercent)) * cartItem.quantity;
                                }, 0).toLocaleString("de-DE")
                            } VNĐ
                        </span>

                    </div>

                </Offcanvas.Body>

                <div className="flex flex-col ml-[0.5rem] mb-[1rem] gap-[1rem]">
                    <Button variant="outline-dark" className="me-2" onClick={() => navigate("/cart")}>
                        View cart
                    </Button>

                    <Button variant="outline-dark" className="me-2">
                        Checkout
                    </Button>
                </div>
            </Offcanvas>
        </>
    )
}

export default CartDrawer;