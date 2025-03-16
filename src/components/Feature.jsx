import ShoppingItemCard from "./Home/ShoppingItemCard";
import {useEffect, useState} from "react";
import {useProductQuery} from "../store/ProductQueryProvider.jsx";

function Feature() {
  const [saleProducts, setSaleProducts] = useState([]);

  const { loading, error, data } = useProductQuery();

  useEffect(() => {
    if (!data) return;

    const saleProductList = data?.productData.data.filter(product => {
      return product.salePercent > 0
    })

    setSaleProducts(saleProductList)
  }, [data])

  return (
    <>
      <div className="feature-container">
        <span className="feature-title">Sale Production</span>
        <span className="feature-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <div className="feature-item-card-container">
          {saleProducts.map((product, index) => {
            return (
              <ShoppingItemCard
                code={product.productCode}
                key={index}
                image={product.imageUrl}
                name={product.name}
                type={product.productType}
                isSale={product.salePercent}
                oldPrice={product.price}
                currentPrice={product.price - (product.price * product.salePercent)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feature;
