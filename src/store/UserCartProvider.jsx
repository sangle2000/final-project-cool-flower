import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../sections/Loading.jsx";
import getUserCart from "../app/cart/getUserCart.js";
import updateUserCart from "../app/cart/updateUserCart.js";

const UserCartContext = createContext(null);

export const UserCartProvider = ({ children }) => {
    const [userCart, setUserCart] = useState([]);

    const { cart, actionList, status } = useSelector((state) => state.userCart);

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            dispatch(getUserCart({ token }))
        }
    }, [dispatch])

    useEffect(() => {
        if (status === "updateSuccess") {
            const token = localStorage.getItem("authToken");

            if (token) {
                dispatch(getUserCart({ token }))
            }
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (!actionList.length) return;

        const token = localStorage.getItem("authToken");

        if (token) {
            dispatch(updateUserCart({ token, payload: actionList }))
        }

    }, [actionList])

    useEffect(() => {
        if (!cart.length) {
            setUserCart([])
            return
        }

        setUserCart(cart)
    }, [cart]);

    return (
        <UserCartContext.Provider value={{userCart}}>
            {children}
            {
                (status === "getLoading") && <Loading />
            }
        </UserCartContext.Provider>
    )
}

export const useUserCart = () => useContext(UserCartContext);

UserCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
