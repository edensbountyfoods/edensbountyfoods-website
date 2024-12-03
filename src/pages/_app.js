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
      id: "pulpy_grape",
      name: "Pulpy Grape",
      color: "#e8110b",
      imageUrl: "/images/products/lala_lychee.png",
      price: 25,
      isDrink: true,
      oldPrice: 30,
      ingredients:
        "Water, Sugar, Lychee Flavor, Nata de Coco, Preservatives, Xanthan Gum, Citric Acid",
      description:
        "Taste the pure essence of fresh grapes in every sip. Free from chemicals, this beverage offers a wholesome, natural drink experience with a short but worthwhile 5-day shelf life (10 days refrigerated), ensuring ultimate freshness.",
      size: "300 ml",
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

    // {
    //   id: "tapioca_chips",
    //   name: "Keralthu Kappa(Tapioca) Chips",
    //   color: "#fa5e93",
    //   imageUrl: "/images/products/nendharam_chips.png",

    //   price: 25,
    //   oldPrice: 30,
    //   ingredients:
    //     "Tapioca, Cheese Powder, Jalapeno Seasoning, Edible Oil, Salt, Spices",
    //   description:
    //     "Indulge in the bold and zesty combination of rich cheese and spicy jalapeno. These tapioca chips are crafted for a flavor-packed crunch, perfect for those who love a fiery snack adventure. No preservatives or artificial ingredients ensure a guilt-free indulgence.",
    // },
    // {
    //   id: "nendharam_chips",
    //   name: "Nagarkoivil Nendharam Chips",
    //   color: "#fa5e93",
    //   imageUrl: "/images/products/nendharam_chips.png",
    //   price: 25,
    //   oldPrice: 30,
    //   ingredients:
    //     "Water, lychee pulp, sugar, Nata de Coco, fermented coconut water jelly, natural flavors",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam quo aliquam consequuntur porro doloribus dolore tempore molestiae repudiandae nostrum. Distinctio nemo fugit esse aliquid voluptatum culpa aperiam, laboriosam earum.",
    // },

    {
      id: "tapioca_chips",
      name: "Plain Tapioca Chips",
      color: "#fa5e93",
      imageUrl: "/images/products/tapioca_chips.png",
      price: 25,
      size: "500g",
      oldPrice: 30,
      ingredients: "Tapioca, Edible Oil, Salt, Chilly Powder",
      description:
        "For the purists at heart, our plain salted tapioca chips deliver simplicity at its finest. Lightly salted to enhance the natural tapioca flavor, this classic snack is perfect for those who appreciate wholesome, preservative-free goodness.",
    },
    {
      id: "tapioca_authentic_pepper_masala",
      name: "Tapioca Authentic Pepper Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/tapioca_authentic_pepper_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients: "Tapioca, Ground Pepper, Masala Blend, Edible Oil, Salt",
      description:
        "Relish the classic taste of freshly ground pepper blended with traditional spices. These tapioca chips are a burst of authentic masala flavor in every bite, offering a savory experience free of preservatives or artificial flavors.",
    },
    {
      id: "tapioca_adada_pudina_masala",
      name: "Tapioca Adada Pudina Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/tapioca_adada_pudina_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients: "Tapioca, Mint Powder, Spices, Edible Oil, Salt",
      description:
        "Crisp tapioca chips infused with the refreshing essence of mint and a hint of spice make for a light yet flavorful treat. Perfect for satisfying your snack cravings while enjoying a natural, preservative-free snack.",
    },
    {
      id: "tapioca_cheesy_jalapeno_masala.png",
      name: "Tapioca Cheesy Jalapeno Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/tapioca_cheesy_jalapeno_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients:
        "Tapioca, Cheese Powder, Jalapeno Seasoning, Edible Oil, Salt, Spices",
      description:
        "Indulge in the bold and zesty combination of rich cheese and spicy jalapeno. These tapioca chips are crafted for a flavor-packed crunch, perfect for those who love a fiery snack adventure. No preservatives or artificial ingredients ensure a guilt-free indulgence.",
    },

    {
      id: "nedran_chips",
      name: "Plain Nendran Chips",
      color: "#fa5e93",
      imageUrl: "/images/products/nedran_chips.png",
      price: 25,
      size: "500g",
      oldPrice: 30,
      ingredients: "Banana, Edible Oil, Salt, Chilly Powder",
      description:
        "For the purists at heart, our plain salted banana chips deliver simplicity at its finest. Lightly salted to enhance the natural banana flavor, this classic snack is perfect for those who appreciate wholesome, preservative-free goodness.",
    },
    {
      id: "nendran_authentic_pepper_masala",
      name: "Nendran Authentic Pepper Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/nendran_authentic_pepper_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients: "Banana, Ground Pepper, Masala Blend, Edible Oil, Salt",
      description:
        "Our banana chips are coated with a rich and spicy masala blend, highlighting the robust flavor of freshly ground pepper. A classic yet bold choice for snack lovers, made without artificial additives.",
    },
    {
      id: "nendran_adada_pudina_masala",
      name: "Nendran Adada Pudina Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/nendran_adada_pudina_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients: "Banana, Mint Powder, Spices, Edible Oil, Salt",
      description:
        "Experience the refreshing aroma of mint paired with the natural sweetness of bananas. These preservative-free chips offer a perfect blend of lightness and flavor, making them an irresistible choice for any occasion.",
    },
    {
      id: "nendran_cheesy_jalapeno_masala",
      name: "Nendran Cheesy Jalapeno Masala",
      color: "#fa5e93",
      imageUrl: "/images/products/nendran_cheesy_jalapeno_masala.png",
      price: 25,
      size: "100g",
      oldPrice: 30,
      ingredients:
        "Banana, Cheese Powder, Jalapeno Seasoning, Edible Oil, Salt, Spices",
      description:
        "Enjoy the unexpected fusion of creamy cheese and spicy jalapeno with our banana chips. Each bite combines sweet and savory in a unique way, offering a crunchy snack that’s preservative-free and full of flavor.",
    },
  ];

  // tapioca_authentic_peper_masala

  // nendran_authentic_peper_masala

  // nendran_adada_pudina_masala

  // nendran_cheesy_jalapeno_masala

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
