import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

const OrderInformationContext = createContext(null);

export const OrderInformationProvider = ({ children }) => {
    const [orderInformation, setOrderInformation] = useState(null);

    useEffect(() => {
        console.log(orderInformation);
    }, [orderInformation]);

    return (
        <OrderInformationContext.Provider value={{ orderInformation, setOrderInformation }}>
            {children}
        </OrderInformationContext.Provider>
    )
}

export const useOrderInformation = () => useContext(OrderInformationContext);

// Define PropTypes
OrderInformationProvider.propTypes = {
    children: PropTypes.node.isRequired, // `node` can be React component, text, or JSX
}
