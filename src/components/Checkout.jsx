import {useUserCart} from "../store/UserCartProvider.jsx";
import {useEffect, useState} from "react";
import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {useMutation} from "@apollo/client";
import {CHECKOUT_MUTATION} from "../utils/graphql/mutations.js";

function Checkout() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const { name, address, phone } = useSelector((state) => state.account);

    const [ payment, { data, loading, error } ] = useMutation(CHECKOUT_MUTATION)

    const { userCart } = useUserCart()

    useEffect(() => {
        console.log(userCart)
    }, [userCart])

    const getCurrentTimeFormatted = () => {
        const now = new Date();
        const YYYY = String(now.getFullYear()); // Get last 2 digits of the year
        const MM = String(now.getMonth() + 1).padStart(2, '0'); // Month (0-based)
        const DD = String(now.getDate()).padStart(2, '0'); // Day
        const HH = String(now.getHours()).padStart(2, '0'); // Hours
        const mm = String(now.getMinutes()).padStart(2, '0'); // Minutes
        const SS = String(now.getSeconds()).padStart(2, '0'); // Seconds

        return `${YYYY}${MM}${DD}${HH}${mm}${SS}`;
    }

    const handleCheckout = async () => {
        const total = userCart.reduce((acc, current) => {
            return acc + (current.price - (current.price * current.salePercent)) * current.quantity;
        }, 0)

        try {
            await payment({
                variables: {
                    orderType: "Thanh toán hóa đơn",
                    orderId: getCurrentTimeFormatted(),
                    amount: total,
                    orderDesc: "Thanh toán hóa đơn mua hàng",
                    bankCode: "",
                    language: "vn"
                }
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    useEffect(() => {
        if (!data) return;
        
        window.location.href = data.payment.redirectUrl;

    }, [data])
    
    return (
        <>
            <div className="wrapper">
                <div className="checkout-modal">
                    <div className="modal-product">
                        <div className="product">
                            {
                                userCart.map((product, index) => {
                                    return index === currentSlide ? (
                                        <div key={index} className="flex flex-col justify-center items-center gap-[0.5rem]">
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                style={{
                                                    width: "12rem",
                                                    height: "auto"
                                            }}
                                            />
                                            <h4>
                                                {
                                                    product.name
                                                }
                                            </h4>

                                            <div className="flex gap-[0.5rem]">
                                                <span>
                                                    {
                                                        (product.price - (product.price * product.salePercent)).toLocaleString("de-DE")
                                                    } VNĐ
                                                </span>

                                                <span>
                                                    x
                                                </span>

                                                <span>
                                                    {
                                                        product.quantity
                                                    }
                                                </span>
                                            </div>

                                            <h3 className="mt-[2rem]">
                                                {
                                                    ((product.price - (product.price * product.salePercent)) * product.quantity).toLocaleString("de-DE")
                                                } VNĐ
                                            </h3>

                                            <div
                                                className="text-[2rem] absolute w-full h-[4rem] flex justify-between items-center"
                                                style={{
                                                    padding: "0 1rem"
                                                }}
                                            >
                                                <span
                                                    className="cursor-pointer"
                                                    onClick={() => setCurrentSlide(prev => prev - 1 < 0 ? userCart.length - 1 : prev - 1)}
                                                >
                                                    <i className="bi bi-caret-left-fill"></i>
                                                </span>

                                                <span
                                                    className="cursor-pointer"
                                                    onClick={() => setCurrentSlide(prev => prev + 1 >= userCart.length ? 0 : prev + 1)}
                                                >
                                                    <i className="bi bi-caret-right-fill"></i>
                                                </span>
                                            </div>

                                        </div>
                                    ) : ""
                                })
                            }
                        </div>

                        <div className="round-shape"></div>

                    </div>

                    <div className="modal-info">
                        <div className="info">
                            <h2>
                                User Information
                            </h2>

                            <form>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                                    <Form.Control
                                        value={name}
                                        placeholder={name}
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                                    <Form.Control
                                        value={phone}
                                        placeholder={phone}
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                                    <Form.Control
                                        value={address}
                                        placeholder={address}
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Note</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Example: Turn right in the traffic light,..."
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Delivery Type</InputGroup.Text>
                                    <Form.Control
                                        value="Express"
                                        placeholder="Example: Express"
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Payment Type</InputGroup.Text>
                                    <Form.Control
                                        value="VNPAY"
                                        placeholder="Example: VNPAY"
                                        aria-label="name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <Button onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;