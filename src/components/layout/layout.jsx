import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, cartItems, setCartItems, products }) => {
  return (
    <div>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      {children}
      <Footer products={products} />
    </div>
  );
};

export default Layout;
