import {useParams} from "react-router-dom";
import {productions} from "../utils/constant.js";
import {useState} from "react";

function ProductDetail() {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const { name, type, image, originPrice, currentPrice, sale, description } = productions.find((data) => {
        return data.code === id;
    })

    return (
        <>
            <div className="product-detail-wrapper">
                <div className="product-detail-container">
                    <div className="product-detail-information">
                        <section className="product-detail-information-image">
                            <img src={image} alt={name}/>
                        </section>

                        <section className="product-detail-information-content">
                            <p className="product-detail-information-content-type">
                                {type}
                            </p>

                            <p className="product-detail-information-content-name">
                                {name}
                            </p>

                            <div className="product-detail-information-content-price">
                                {
                                    sale ? <span
                                        className="origin-price">{(originPrice * quantity).toLocaleString("de-DE")} VNĐ</span> : ""
                                }
                                <span
                                    className="current-price">{(currentPrice * quantity).toLocaleString("de-DE")} VNĐ</span>
                            </div>

                            <p className="product-detail-information-content-description">
                                {description}
                            </p>

                            <div className="product-detail-information-content-actions">
                                <input type="number" value={quantity}
                                       onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}/>

                                <span>
                                    Add to cart
                                </span>
                            </div>

                            <div className="product-detail-information-content-category">
                                <span>Category: </span>
                                <span>{type}</span>
                            </div>
                        </section>
                    </div>

                    <div className="product-detail-description">
                        <section className="product-detail-option-group">
                        <span className="product-detail-option-description">
                            Description
                        </span>
                            <span className="product-detail-option-review">
                            Reviews
                        </span>
                        </section>
                        <section className="product-detail-content-group">

                        </section>
                    </div>

                    <div className="related-products-list">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;