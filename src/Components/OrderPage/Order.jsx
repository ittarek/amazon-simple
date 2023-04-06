import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const saveCard = useLoaderData();
  const [cart, setCart] = useState(saveCard);

  const handleDeleteCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    // console.log(remaining);
    setCart(remaining);
    removeFromDb(id);
  };

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
