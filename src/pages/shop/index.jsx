import MainShop from "@/components/screens/shop/main_shop/main_shop";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ShopPage = ({ products, addToCart }) => {
  return <MainShop products={products} addToCart={addToCart} />;
};

export default ShopPage;
