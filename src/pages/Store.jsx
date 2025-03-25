// import Header from "../components/Store/Header.jsx";
import RecommendProduct from "../components/Store/RecommendProduct.jsx";
import Helper from "../components/Helper.jsx";
import ShoppingItemCard from "../components/Home/ShoppingItemCard.jsx";
import {useProductQuery} from "../store/ProductQueryProvider.jsx";

function Store() {

    const { products } = useProductQuery();

    return (
        <>
            {/*<Header image="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/store-bg.jpg" />*/}

            <RecommendProduct />

            <div className="product-container">
                <h1 className="product-title">
                    Our Productions
                </h1>

                <div className="product-content">
                    {
                        products && products.length > 0 &&
                        products.map((product) => {
                            return (
                                <ShoppingItemCard
                                    id={product.id}
                                    code={product.productCode}
                                    key={product.id}
                                    image={product.imageUrl}
                                    name={product.name}
                                    type={product.productType}
                                    isSale={product.salePercent}
                                    oldPrice={product.price}
                                    currentPrice={product.price - (product.price * product.salePercent)}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <Helper />

            <div className="blank" style={{ width: "100vw", marginTop: "8rem" }}></div>
        </>
    )
}

export default Store;