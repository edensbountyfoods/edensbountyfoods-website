import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: "passion",
      name: "Papa Passion",
      color: "#dfa909",
      imageUrl: "/images/products/papa_passion.png",
      price: 25,
    },
    {
      id: "strawberry",
      name: "Strawberry",
      color: "#e8110b",
      imageUrl: "/images/products/strawberry.png",
      price: 25,
    },
    {
      id: "lychee",
      name: "Lala Lychee",
      color: "#fa5e93",
      imageUrl: "/images/products/lala_lychee.png",
      price: 25,
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
    <Head>
      <title>Yaja</title>
    </Head>
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
