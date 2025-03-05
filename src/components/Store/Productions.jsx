import {useEffect, useState} from "react";
import ShoppingItemCard from "../Home/ShoppingItemCard.jsx";
import {productions} from "../../utils/constant.js";

function Productions() {

    const [productionsData, setProductionsData] = useState([]);

    useEffect(() => {
        const sortedProductions = [...productions].sort((a, b) => a.name.localeCompare(b.name));
        setProductionsData(sortedProductions)
    }, []);

    return (
        <>
            <div className="product-container">
                <h1 className="product-title">
                    Our Productions
                </h1>

                <div className="product-content">
                    {
                        productionsData.map((product) => {
                            return (
                                <ShoppingItemCard
                                    code={product.code}
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    type={product.type}
                                    isSale={product.sale}
                                    oldPrice={product.originPrice}
                                    currentPrice={product.currentPrice}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Productions;