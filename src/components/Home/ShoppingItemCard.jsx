/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../../app/cart/cartSlice.js";

function ShoppingItemCard({
  id,
  image,
  name,
  type,
  isSale,
  oldPrice,
  currentPrice,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
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

    dispatch(addItem({ product_id: id, user_action: "add", quantity: 1 }))
  };

  return (
    <div className="item-card-container">
      <img src={image} alt="Item Image" className="item-card-image" onClick={() => {navigate(`/product/${id}`)}}/>
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
          <div className="item-card-detail-price-old">
            { isSale ?
              <span>
                {oldPrice.toLocaleString("de-DE")} VNĐ
              </span> : <span></span>
            }
          </div>
          <span className="item-card-detail-price-current">
            {currentPrice.toLocaleString("de-DE")} VNĐ
          </span>
        </div>

        <button className="item-card-button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>

      {isSale ? <div className="item-card-sale"><span>Sale</span></div> : ""}
    </div>
  );
}

export default ShoppingItemCard;
