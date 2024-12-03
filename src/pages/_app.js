import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import Aos from "aos";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: "passion",
      name: "Papa Passion",
      color: "#dfa909",
      imageUrl: "/images/products/papa_passion.png",
      price: 25,
      isDrink: true,
      oldPrice: 30,
      ingredients:
        "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
    },
    {
      id: "basil_lychee",
      name: "Basil Lychee",
      color: "#e8110b",
      imageUrl: "/images/products/lala_lychee.png",
      price: 25,
      isDrink: true,
      oldPrice: 30,
      ingredients:
        "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
    },
    {
      id: "lychee",
      name: "Lala Lychee",
      color: "#fa5e93",
      imageUrl: "/images/products/lala_lychee.png",
      price: 25,
      isDrink: true,
      oldPrice: 30,
      ingredients:
        "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
    },
    {
      id: "tapioca_chips",
      name: "Keralthu Kappa(Tapioca) Chips",
      color: "#fa5e93",
      imageUrl: "/images/products/nendharam_chips.png",

      price: 25,
      oldPrice: 30,
      ingredients:
        "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
    },
    {
      id: "nendharam_chips",
      name: "Nagarkoivil Nendharam Chips",
      color: "#fa5e93",
      imageUrl: "/images/products/nendharam_chips.png",
      price: 25,
      oldPrice: 30,
      ingredients:
        "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
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

  useEffect(() => {
    Aos.init({
      duration: 750,
      once: false,
    });
  }, []);

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
