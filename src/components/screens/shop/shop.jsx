import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useEffect, useState } from "react";
import styles from "./shop.module.scss";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";
import NewShop from "./new_shop/new_shop";

const ShopScreen = ({ products, addToCart }) => {
  const router = useRouter();

  const [currentProduct, setCurrentProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { query } = router;

  useEffect(() => {
    if (router?.query) {
      setIsAdded(false);
      setCurrentProduct(
        products.find((p) => {
          return p.id === query?.id;
        })
      );
    }
  }, [router]);

  if (currentProduct) {
    return (
      <div
        className={styles.ShopScreen}
        // style={{
        //   backgroundColor: currentProduct?.color,
        // }}
      >
        <div className={styles.wrap}>
          <div className={styles.bg} />
          <CustomContainer>
            <NewShop
              product={currentProduct}
              allProducts={products}
              addToCart={addToCart}
            />
            {/*          
              <div className={styles.cont}>
                <h1>{currentProduct.name}</h1>
                <Image
                  src={currentProduct.imageUrl}
                  className={styles.mainImg}
                  alt={currentProduct.name}
                />
                <div className={styles.bottom}>
                

                  <div className={styles.right}>
                    <h2>Rs.{currentProduct.price}/-</h2>
                    <br />
                    <CustomButton
                      disabled={isAdded}
                      clickHandler={() => {
                        addToCart(currentProduct);
                        setIsAdded(true);
                      }}
                    >
                      {isAdded ? "Added To Cart" : "Add To Cart"}
                    </CustomButton>
                  </div>
                </div>
              </div> */}
          </CustomContainer>
        </div>
      </div>
    );
  }

  return <div className={styles.blank} />;
};

export default ShopScreen;
