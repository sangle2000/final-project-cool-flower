import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {useProductQuery} from "../store/ProductQueryProvider.jsx";
import {addItem} from "../app/cart/cartSlice.js";

function ProductDetail() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const [selectOption, setSelectOptions] = useState(0)

    const [productInformation, setProductInformation] = useState({});

    const { products } = useProductQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const product_detail = products.find((product) => {
            return product.id === Number(id)
        })

        setProductInformation(product_detail)
    }, [products, id]);

    const handleAddItemToCart = async (product_id, name) => {
        toast.success(`Add ${name} successfully!!!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        dispatch(addItem({ product_id: id, user_action: "add", quantity: quantity }))
    }

    return (
        <>
            { productInformation &&
                <div className="product-detail-wrapper">
                    <div className="product-detail-container">
                        <div className="product-detail-information">
                            <section className="product-detail-information-image">
                                <img src={productInformation.imageUrl} alt={productInformation.name}/>
                            </section>

                            <section className="product-detail-information-content">
                                <p className="product-detail-information-content-type">
                                    {productInformation.productType}
                                </p>

                                <p className="product-detail-information-content-name">
                                    {productInformation.name}
                                </p>

                                <div className="product-detail-information-content-price">
                                    {
                                        productInformation.salePercent ? <span
                                            className="origin-price">{(productInformation.price * quantity).toLocaleString("de-DE")} VNĐ</span> : ""
                                    }
                                    <span
                                        className="current-price">{((productInformation.price - (productInformation.price * productInformation.salePercent)) * quantity).toLocaleString("de-DE")} VNĐ</span>
                                </div>

                                <p className="product-detail-information-content-description">
                                    {productInformation.description}
                                </p>

                                <div className="product-detail-information-content-actions">
                                    <input type="number" value={quantity.toString()}
                                           onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}/>

                                    <span onClick={() => handleAddItemToCart(productInformation.id, productInformation.name)}>
                                        Add to cart
                                    </span>
                                </div>

                                <div className="product-detail-information-content-category">
                                    <span>Category: </span>
                                    <span>{productInformation.productType}</span>
                                </div>
                            </section>
                        </div>

                        <div className="product-detail-description">
                            <section className="product-detail-option-group">
                                <div
                                    className="indicator"
                                    style={{left: `${selectOption * 50}%`}}
                                />
                                <span
                                    className="product-detail-option-description"
                                    onClick={() => setSelectOptions(0)}
                                >
                                    Description
                                </span>
                                <span
                                    className="product-detail-option-review"
                                    onClick={() => setSelectOptions(1)}
                                >
                                    Reviews (0)
                                </span>
                            </section>
                            <section className="product-detail-content-group">
                                {
                                    selectOption === 0 ?
                                        <div
                                            className="product-detail-content-description"
                                        >
                                            {productInformation.description}
                                        </div> :
                                        <div
                                            className="product-detail-content-review"
                                        >
                                            <div
                                                className="product-detail-content-review-list"
                                            >
                                                There are no reviews yet.
                                            </div>

                                            <form
                                                className="product-detail-content-review-form"
                                            >
                                                <div>
                                                    <h4>
                                                        Be the first to review {`"${productInformation.name}"`}
                                                    </h4>

                                                    <span>
                                                        Required fields are marked *
                                                    </span>
                                                </div>

                                                <div className="rating">
                                                    <span>Your rating *</span>
                                                    <div className="radio">
                                                        <input id="rating-5" type="radio" name="rating" value="5"/>
                                                        <label htmlFor="rating-5" title="5 stars">
                                                            <svg viewBox="0 0 576 512" height="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                                ></path>
                                                            </svg>
                                                        </label>

                                                        <input id="rating-4" type="radio" name="rating" value="4"/>
                                                        <label htmlFor="rating-4" title="4 stars">
                                                            <svg viewBox="0 0 576 512" height="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                                ></path>
                                                            </svg>
                                                        </label>

                                                        <input id="rating-3" type="radio" name="rating" value="3"/>
                                                        <label htmlFor="rating-3" title="3 stars">
                                                            <svg viewBox="0 0 576 512" height="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                                ></path>
                                                            </svg>
                                                        </label>

                                                        <input id="rating-2" type="radio" name="rating" value="2"/>
                                                        <label htmlFor="rating-2" title="2 stars">
                                                            <svg viewBox="0 0 576 512" height="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                                ></path>
                                                            </svg>
                                                        </label>

                                                        <input id="rating-1" type="radio" name="rating" value="1"/>
                                                        <label htmlFor="rating-1" title="1 star">
                                                            <svg viewBox="0 0 576 512" height="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                                ></path>
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="review-container">
                                                    <label htmlFor="review">Your review *</label>
                                                    <textarea id="review" className="review-message"
                                                              required></textarea>
                                                </div>

                                                <Button variant="primary">Submit</Button>
                                            </form>
                                        </div>
                                }
                            </section>
                        </div>

                        <div className="related-products-list">

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetail;