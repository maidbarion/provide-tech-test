import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cart from "./Cart";

function Checkout() {
  const { productsInCart } = useContext(AppContext);

  return (
    <Cart
      products={productsInCart}
      text="Click Confirm Order to place your order"
      mode="confirm"
    ></Cart>
  );
}

export default Checkout;
