import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Layout = ({ children, cartItems, setCartItems, products }) => {
  return (
    <div>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      {children}
      <Footer products={products} />
      <div
        style={{
          color: "black",
        }}
      >
        <FloatingWhatsApp
          phoneNumber="+919952988610"
          accountName="Yajamigo"
          avatar="/logo/logo_main.png"
        />
      </div>
    </div>
  );
};

export default Layout;
