import {createContext, useContext, useEffect, useState} from "react";
import { useQuery } from "@apollo/client";
import {PRODUCT_QUERY} from "../utils/graphql/queries.js";
import PropTypes from "prop-types";
import Loading from "../sections/Loading.jsx";

const ProductQueryContext = createContext(null);

export const ProductQueryProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const { loading, error, data } = useQuery(PRODUCT_QUERY);

    useEffect(() => {
        if (!data) return;

        setProducts(data?.productData.data);
    }, [data])

    return (
        <ProductQueryContext.Provider value={{products}}>
            {
                loading ? <Loading /> : children
            }
        </ProductQueryContext.Provider>
    )
}

export const useProductQuery = () => useContext(ProductQueryContext);

// Define PropTypes
ProductQueryProvider.propTypes = {
    children: PropTypes.node.isRequired, // `node` can be React component, text, or JSX
}
