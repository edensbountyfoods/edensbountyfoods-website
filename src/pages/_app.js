import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: "mango",
      name: "Mango",
      color: "#dfa909",
      imageUrl: "/images/products/mango.png",
      price: 124,
    },
    {
      id: "strawberry",
      name: "Strawberry",
      color: "#e8110b",
      imageUrl: "/images/products/strawberry.png",
      price: 110,
    },
    {
      id: "lychee",
      name: "Lychee",
      color: "#fa5e93",
      imageUrl: "/images/products/lychee.png",
      price: 99,
    },
  ];

  const addToCart = (product) => {
    const prodIdx = cartItems.findIndex((p) => p.id == product.id);

    if (prodIdx === -1) {
      setCartItems((prev) => [{ ...product, count: 1 }, ...prev]);
    } else {
      setCartItems((prev) => {
        const items = [...prev];
        items[prodIdx].count = items[prodIdx].count + 1;
        return items;
      });
    }
  };

  return (
    <>
      <main className={`${fonts.font1} ${styles.body}`}>
        <Layout
          cartItems={cartItems}
          setCartItems={setCartItems}
          products={products}
        >
          <Component
            {...pageProps}
            cartItems={cartItems}
            setCartItems={setCartItems}
            products={products}
            addToCart={addToCart}
          />
        </Layout>
      </main>
    </>
  );
}
