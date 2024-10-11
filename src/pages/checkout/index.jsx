import CheckoutScreen from "@/components/screens/checkout/checkout";
import React from "react";

const CheckoutPage = ({ cartItems, setCartItems }) => {
  return <CheckoutScreen cartItems={cartItems} setCartItems={setCartItems} />;
};

export default CheckoutPage;
