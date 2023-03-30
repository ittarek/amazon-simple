import React, { Children, useEffect } from "react";
import "./Shop.css";
import { useState } from "react";
import Product from "./../product/Product";
import Cart from "../cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";






const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
 const storedCart = getShoppingCart();
 const saveCart = [];

// step 1 get id 
for (const id in storedCart) {

// step 2 get the product using by id 
let addProduct = products.find((product )=> product.id === id);

if(addProduct){
  // STEP 3 GET PRODUCT quantity
  let quantity = storedCart[id];
  addProduct.quantity = quantity;
  // step 4 save the added product to save cart 
  saveCart.push(addProduct);
}

}
// step 5 set the cart 
setCart(saveCart);

},[products]);

  const handleAddToCart = (product)=>{
    // console.log("cart add to cart");
    // const newCart = [...cart, product]
    let newCart = [];

    // if product dose`n existing is the cart the set quantity = 1
    // if exists update the quantity 
    const exists = cart.find((cartItem) => cartItem.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart,product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining,exists];
    }
    // console.log(newCart);
    setCart(newCart);
    addToDb(product.id)
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
      <Cart cart={cart}></Cart>
      
     </div>
    </div>
  );
};




export default Shop;
