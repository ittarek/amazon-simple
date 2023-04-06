import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product,handleDeleteCart }) => {
  const { name, id,price, img, quantity } = product;

  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-info">
        <div className="review-summary">
          <p className="review-name">{name}</p>
          <p className="review-price">
            price :<span className="span">${price}</span>{" "}
          </p>
          <p className="review-quantity">
            Order Quantity :<span className="span">{quantity}</span>
          </p>
        </div>
      
          <button onClick={()=> handleDeleteCart(id)} className="delete-btn">
          <FontAwesomeIcon className="icon-delete" icon={faTrashCan} /></button>
       
      </div>
    </div>
  );
};

export default ReviewItem;
