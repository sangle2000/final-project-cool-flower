import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";
import {useQuery} from "@apollo/client";
import {USER_CART_DATA_QUERY} from "../utils/graphql/queries.js";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

function CartView() {
    const [cartItemList, setCartItemList] = useState([]);
    const [isUpdateCart, setIsUpdateCart] = useState(false);

    const { data, loading, error, refetch } = useQuery(USER_CART_DATA_QUERY)

    useEffect(() => {
        if (!data) return;

        setCartItemList(data.userCartData.data)
    }, [data])

    useEffect(() => {
        console.log(cartItemList)
    }, [cartItemList])

    return (
        <>
            <div className="cart-view-wrapper">
                <div className="cart-view-container">
                    <h3>
                        Cart
                    </h3>

                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <caption>
                                <Box className="flex justify-between">
                                    <div className="flex items-center gap-[1rem]">
                                        <input
                                            type="text"
                                            placeholder="Coupon code"
                                            style={{
                                                padding: "0.5rem 0.75rem",
                                                textTransform: "uppercase"
                                            }}
                                        />

                                        <Button
                                            variant="success"
                                            style={{
                                                padding: "0.75rem 1.5rem",
                                                textTransform: "uppercase",
                                                fontSize: "0.8rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            Apply coupon
                                        </Button>
                                    </div>


                                    <Button
                                        disabled={!isUpdateCart}
                                        style={{
                                            padding: "0.75rem 1.5rem",
                                            textTransform: "uppercase",
                                            fontSize: "0.8rem",
                                            fontWeight: "700"
                                        }}
                                        onClick={() => setIsUpdateCart(false)}
                                    >
                                        Update cart
                                    </Button>
                                </Box>
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">Product</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Total</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cartItemList.length > 0 ?
                                        cartItemList.map((cartItem, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row" align="center">
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img style={{maxWidth: "4rem"}} src={cartItem.imageUrl}
                                                             alt={cartItem.name}/>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {cartItem.name}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {cartItem.price.toLocaleString("de-DE")} VNĐ
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <input
                                                            style={{width: "4rem", padding: "0.5rem 0.5rem"}}
                                                            type="number"
                                                            value={cartItem.quantity}
                                                            onChange={(e) => {
                                                                const updateList = cartItemList.map((item) => {
                                                                    return item.id === cartItem.id ? {
                                                                        ...item,
                                                                        quantity: Math.max(0, Number(e.target.value))
                                                                    } : item;
                                                                })

                                                                setIsUpdateCart(true)

                                                                setCartItemList(updateList)
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {
                                                            ((cartItem.price - cartItem.price * cartItem.salePercent) * cartItem.quantity).toLocaleString("de-DE")
                                                        } VNĐ
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row"
                                                               style={{verticalAlign: "middle"}}>

                                                        <Box display="flex" justifyContent="center" alignItems="center">
                                                            <button className="button" type="button">
                                                                <span className="button__text">Delete</span>
                                                                <span className="button__icon">
                                                              <svg
                                                                  className="svg"
                                                                  height="512"
                                                                  viewBox="0 0 512 512"
                                                                  width="512"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                              >
                                                                <title>Delete</title>
                                                                <path
                                                                    d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                                                                    style={{
                                                                        fill: "none",
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                />
                                                                <line
                                                                    style={{
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeMiterlimit: 10,
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                    x1="80"
                                                                    x2="432"
                                                                    y1="112"
                                                                    y2="112"
                                                                />
                                                                <path
                                                                    d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                                                                    style={{
                                                                        fill: "none",
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                />
                                                                <line
                                                                    style={{
                                                                        fill: "none",
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                    x1="256"
                                                                    x2="256"
                                                                    y1="176"
                                                                    y2="400"
                                                                />
                                                                <line
                                                                    style={{
                                                                        fill: "none",
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                    x1="184"
                                                                    x2="192"
                                                                    y1="176"
                                                                    y2="400"
                                                                />
                                                                <line
                                                                    style={{
                                                                        fill: "none",
                                                                        stroke: "#fff",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "32px",
                                                                    }}
                                                                    x1="328"
                                                                    x2="320"
                                                                    y1="176"
                                                                    y2="400"
                                                                />
                                                              </svg>
                                                            </span>
                                                            </button>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }) :
                                        <TableRow>
                                            <TableCell>
                                                You dont have any item in cart
                                            </TableCell>
                                        </TableRow>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            marginTop: "1rem"
                        }}
                    >
                        <Table sx={{maxWidth: 480}} aria-label="simple table">
                            <caption>
                                <Box className="flex justify-end">
                                    <Button
                                        variant="outline-dark"
                                        style={{
                                            padding: "0.75rem 1.5rem",
                                            textTransform: "uppercase",
                                            fontWeight: "700",
                                            letterSpacing: "1px"
                                        }}
                                    >
                                        Proceed to checkout
                                    </Button>
                                </Box>
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <h4 style={{ fontWeight: "700" }}>
                                            Cart totals
                                        </h4>
                                    </TableCell>

                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ fontWeight: "700" }}>
                                        Subtotal:
                                    </TableCell>

                                    <TableCell align="right">
                                        {
                                            cartItemList.reduce((acc, cartItem) => {
                                                return acc + (cartItem.price - (cartItem.price * cartItem.salePercent)) * cartItem.quantity;
                                            }, 0).toLocaleString("de-DE")
                                        } VNĐ
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell style={{ fontWeight: "700" }}>
                                        Total:
                                    </TableCell>

                                    <TableCell align="right">
                                        {
                                            cartItemList.reduce((acc, cartItem) => {
                                                return acc + (cartItem.price - (cartItem.price * cartItem.salePercent)) * cartItem.quantity;
                                            }, 0).toLocaleString("de-DE")
                                        } VNĐ
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default CartView;