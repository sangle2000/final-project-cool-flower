import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useUserCart} from "../store/UserCartProvider.jsx";

function CartDrawer({ isShowCart, setIsShowCart }) {

    const { userCart } = useUserCart()

    const { isLogin } = useSelector((state) => state.account)

    const navigate = useNavigate()

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
                            !isLogin ?
                                <div className="h-full flex flex-col ml-[0.5rem] mb-[1rem] gap-[0.75rem] justify-center items-center">
                                    <span>Please login to continue</span>

                                    <Button variant="dark" className="me-2" onClick={() => navigate("/account/login")}>
                                        Login
                                    </Button>

                                    <span>or</span>

                                    <Button variant="outline-dark" className="me-2" onClick={() => navigate("/account/sign-up")}>
                                        Sign Up
                                    </Button>
                                </div> :
                                (userCart.length === 0 ?
                                    <div className="w-full h-full flex justify-center items-center">
                                        <span className="text-[#61656b]">You have no item in cart</span>
                                    </div>
                                    :
                                    userCart.map((cartItem) => {
                                        return (
                                        <CartItem
                                            key={cartItem.id}
                                            id={cartItem.id}
                                            name={cartItem.name}
                                            image={cartItem.imageUrl}
                                            price={cartItem.price - (cartItem.price * cartItem.salePercent)}
                                            quantity={cartItem.quantity}
                                        />
                                    )
                                }))
                        }
                    </div>

                    {
                        isLogin &&
                        <div className="flex justify-between pt-[1rem] pb-[1rem] border-t border-b border-[#ccc]">
                        <span className="font-[700]">
                            Subtotal:
                        </span>

                            <span className="font-[700] text-[#61656b]">
                            {
                                userCart.reduce((acc, cartItem) => {
                                    return acc + (cartItem.price - (cartItem.price * cartItem.salePercent)) * cartItem.quantity;
                                }, 0).toLocaleString("de-DE")
                            } VNĐ
                        </span>
                        </div>
                    }

                </Offcanvas.Body>

                {
                    isLogin &&
                    <div className="flex flex-col ml-[0.5rem] mb-[1rem] gap-[1rem]">
                        <Button variant="outline-dark" className="me-2" onClick={() => navigate("/cart")}>
                            View cart
                        </Button>

                        <Button variant="outline-dark" className="me-2" onClick={() => navigate("/checkout")}>
                            Checkout
                        </Button>
                    </div>
                }
            </Offcanvas>
        </>
    )
}

export default CartDrawer;