/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

function ShoppingItemCard({
  code,
  image,
  name,
  type,
  isSale,
  oldPrice,
  currentPrice,
}) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
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
  };

  return (
    <div className="item-card-container">
      <img src={image} alt="Item Image" className="item-card-image" onClick={() => {navigate(`/product/${code}`)}}/>
      <div className="item-card-detail">
        <span className="item-card-detail-type">{type}</span>
        <span className="item-card-detail-name">{name}</span>
        <div className="item-card-detail-star">
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </div>
        <div className="item-card-detail-price">
          {isSale ? (
            <span className="item-card-detail-price-old">
              {oldPrice.toLocaleString("de-DE")} VNĐ
            </span>
          ) : ""}
          <span className="item-card-detail-price-current">
            {currentPrice.toLocaleString("de-DE")} VNĐ
          </span>
        </div>

        <button className="item-card-button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>

      {isSale ? <span className="item-card-sale">Sale!</span> : ""}
    </div>
  );
}

export default ShoppingItemCard;
