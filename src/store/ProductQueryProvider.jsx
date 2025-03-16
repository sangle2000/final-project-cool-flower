import { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import {PRODUCT_QUERY} from "../utils/graphql/queries.js";
import PropTypes from "prop-types";

const ProductQueryContext = createContext(null);

export const ProductQueryProvider = ({ children }) => {
    const { loading, error, data } = useQuery(PRODUCT_QUERY);

    return (
        <ProductQueryContext.Provider value={{loading, error, data}}>
            {children}
        </ProductQueryContext.Provider>
    )
}

export const useProductQuery = () => useContext(ProductQueryContext);

// Define PropTypes
ProductQueryProvider.propTypes = {
    children: PropTypes.node.isRequired, // `node` can be React component, text, or JSX
}
