import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useState } from "react";
import styles from "./main_shop.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const Product = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Col key={product.id} xs={6} md={4}>
      <div className={styles.product}>
        <div
          className={styles.bg}
          style={{
            backgroundColor: product.color,
          }}
        />
        <Link href={`/shop/${product.id}`}>
          <h2
            style={{
              color: product.color,
            }}
          >
            {product.name}
          </h2>
          <p>Rs.{product.price}</p>
          <Image src={product.imageUrl} fluid alt={product.name} />
        </Link>
        <div
          onClick={() => {
            addToCart(product);
            setIsAdded(true);
          }}
          className={styles.add}
        >
          {isAdded ? "Added to cart" : "Add to cart"}
        </div>
      </div>
    </Col>
  );
};

const ManiShop = ({ products, addToCart }) => {
  return (
    <div className={styles.MainShop}>
      <div className={styles.bg} />
      <CustomContainer>
        <div className={styles.wrap}>
          <h1>YAJA SHOP</h1>
          <br />

          <div>
            <Row>
              {products.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                );
              })}
            </Row>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ManiShop;
