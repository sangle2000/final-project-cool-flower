import {createContext, useContext, useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {USER_CART_DATA_QUERY} from "../utils/graphql/queries.js";
import PropTypes from "prop-types";

const UserCartContext = createContext(null);

export const UserCartProvider = ({ children }) => {
    const [userCart, setUserCart] = useState([]);

    const { data, loading, error, refetch } = useQuery(USER_CART_DATA_QUERY)

    useEffect(() => {
        if (!data) return;

        setUserCart(data.userCartData.data)
    }, [data]);

    return (
        <UserCartContext.Provider value={{loading, error, userCart, refetch}}>
            {children}
        </UserCartContext.Provider>
    )
}

export const useUserCart = () => useContext(UserCartContext);

UserCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
