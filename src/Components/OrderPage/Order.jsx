import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import Product from "../product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const saveCard = useLoaderData();
  const [cart, setCart] = useState(saveCard);

  const handleDeleteCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    // console.log(remaining);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart
  }

  //   console.log(cart);
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleDeleteCart={handleDeleteCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/chackout" ><button className="checkout-btn">Proceed Checkout <FontAwesomeIcon className="icon" icon={faCreditCard} /></button> </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
