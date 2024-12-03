import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useState } from "react";
import styles from "./main_shop.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import { StarFill } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Product = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Col key={product.id} xs={12} md={4} lg={4}>
      <Link href={`/shop/${product.id}`}>
        <div className={styles.product} data-aos='zoom-in'>
          <div
            className={styles.img}
            style={{
              backgroundColor: product.color,
            }}
          >
            <Image src={product.imageUrl} alt={product.name} height={300} />
          </div>
          <div className={styles.bot}>
            <h2
              style={{
                color: product.color,
              }}
            >
              {product.name}
            </h2>

            <div className={styles.price}>
              <div className={styles.text}>
                <strike>Rs.{product.oldPrice}</strike>
                <h3>Rs.{product.price}</h3>
              </div>
              <div className={styles.stars}>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
              </div>
            </div>
            <div className={styles.desc}>
              <p>{product.description}</p>
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                addToCart(product);
                setIsAdded(true);
              }}
              className={styles.add}
            >
              {isAdded ? "Added to cart" : "Add to cart"}
            </div>
          </div>
        </div>
      </Link>

      {/* <div className={styles.product}>
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

          <p>
            <span>Rs.30</span>
          </p>
          <p>
            Rs.
            {product.price}
          </p>
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
      </div> */}
    </Col>
  );
};

const MainShop = ({ products, addToCart }) => {
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

export default MainShop;
