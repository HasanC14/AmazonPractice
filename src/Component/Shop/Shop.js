import React, { useEffect, useState } from "react";
import { addToDb, GetCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const AddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((item) => item.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const LocalCart = GetCart();
    const SavedCart = [];
    for (const id in LocalCart) {
      const AddedProduct = products.find((product) => product.id === id);
      if (AddedProduct) {
        const quantity = LocalCart[id];
        AddedProduct.quantity = quantity;
        SavedCart.push(AddedProduct);
        setCart(SavedCart);
      }
    }
  }, [products]);

  return (
    <div className="main-container">
      <div className="ProductContainer">
        {products.map((product) => (
          <Product
            key={product.id}
            prod={product}
            AddToCart={AddToCart}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
