import ShopScreen from "@/components/screens/shop/shop";
import React from "react";

const ShopPage = ({ products, addToCart }) => {
  return <ShopScreen products={products} addToCart={addToCart} />;
};

export default ShopPage;
