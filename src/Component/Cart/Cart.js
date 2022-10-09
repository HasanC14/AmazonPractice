import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = product.quantity + quantity;
    total = product.price * product.quantity + total;
    shipping = product.shipping + shipping;
  }
  const tax = parseFloat((total * 0.15).toFixed(2));
  const GrandTotal = total + tax + shipping;
  return (
    <div className="CartContainer">
      <div className="cart">
        <h1>Order Summary</h1>
        <p>Total Added Items: {quantity}</p>
        <p>Total Price: {total}৳</p>
        <p>Total Shipping: {shipping}৳</p>
        <p>Tax: {tax}৳</p>
        <h3>Grand Total: {GrandTotal.toFixed(2)}৳</h3>
      </div>
    </div>
  );
};

export default Cart;
