import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart,handleClearCart,children }) => {
  // const  = props;
  // get total price and shipping of product
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;

  // console.log("card add ", cart);

  for (const Product of cart) {
    // Product.quantity = Product.quantity || 1;

    // console.log(Product.price);
    total = total + Product.price * Product.quantity;
    totalShipping += Product.shipping;
    quantity = quantity + Product.quantity;
  }
  //  tex total
  let tex = (total * 7) / 100;
  let grandTotal = total + tex + totalShipping;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>selected item:{quantity}</p>
      <p>total price:${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tex.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button onClick={handleClearCart} className="btn-clear" >Clear Cart <FontAwesomeIcon className="icon" icon={faTrashCan} /></button>
      <br />
      {/* <button className="btn-delete">Review Order</button> */}
      {children}
    </div>
  );
};

export default Cart;
