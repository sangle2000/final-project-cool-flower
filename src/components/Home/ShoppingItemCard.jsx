/* eslint-disable react/prop-types */

import { toast } from "react-toastify";

function ShoppingItemCard({
  image,
  name,
  type,
  isSale,
  oldPrice,
  currentPrice,
}) {
  const handleAddToCart = () => {
    toast.success(`Add ${name} successfully!!!`, {
      position: "top-right",
      autoClose: 5000,
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
      <img src={image} alt="Item Image" className="item-card-image" />
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
          {isSale && (
            <span className="item-card-detail-price-old">
              ${oldPrice.toFixed(2)}
            </span>
          )}
          <span className="item-card-detail-price-current">
            ${currentPrice.toFixed(2)}
          </span>
        </div>

        <button className="item-card-button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>

      {isSale && <span className="item-card-sale">Sale!</span>}
    </div>
  );
}

export default ShoppingItemCard;
