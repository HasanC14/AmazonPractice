import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const product = props.prod;
  const { AddToCart } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="Product_image" />
      <div className="product_info">
        <p className="p_name">{name}</p>
        <h3 className="m">Price: {price}৳</h3>
        <p className="m">
          <small>Seller: {seller}</small>
        </p>
        <p className="m">
          <small>Rating: {ratings} Stars</small>
        </p>
      </div>
      <button className="add_cart" onClick={() => AddToCart(product)}>
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
