import React from "react";
import styles from "./new_shop.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";
import { StarFill, StarHalf } from "react-bootstrap-icons";

const NewShop = ({ product, allProducts, addToCart }) => {
  return (
    <div className={styles.NewShop}>
      <Row>
        <Col xs={12} lg={6}>
          <Row>
            <Col xs={12}>
              <div
                className={styles.box}
                style={{
                  backgroundColor: product.color,
                }}
              >
                <div className={styles.bgb} />
                <Image src={product.imageUrl} alt="product" height={500} />
              </div>
            </Col>
            <Col xs={6}>
              {" "}
              <div
                className={styles.box}
                style={{
                  backgroundColor: product.color,
                }}
              >
                <Image
                  src={`/images/flavours/${product.id}.png`}
                  alt={product.name}
                  height={150}
                  // height='auto'
                />
              </div>
            </Col>
            <Col xs={6}>
              {" "}
              <div
                className={styles.box}
                style={{
                  backgroundColor: product.color,
                }}
              >
                <Image
                  src={`/images/FSSAI.png`}
                  alt={product.name}
                  height={150}
                  // height='auto'
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <div className={styles.right}>
            <div className={styles.name}>
              <h2>New</h2>
              <h1>{product.name}</h1>
              <div className={styles.stars}>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarHalf />
              </div>
            </div>
            <br/>
            <div className={styles.desc}>
              <p>{product.description}</p>
            </div>
            <br />
            <div className={styles.text}>
              <p>Ingredients</p>
              <div className={styles.ingredients}>
                {product.ingredients.split(",").map((i) => {
                  return (
                    <div key={i}>
                      <h3>{i}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
            <br />
            <div className={styles.text}>
              <p>Size - 500ml</p>
              <br />
            </div>
            <div className={styles.price}>
              <div className={styles.text}>
                <strike>Rs.{product.oldPrice}</strike>
                <h3>Rs.{product.price}</h3>
              </div>
              <CustomButton
                variant={3}
                clickHandler={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </CustomButton>
            </div>

            <div className={styles.otherProducts}>
              <div className={styles.top}>
                <p>Similar Products </p>
                <Link href="/shop">View All</Link>
              </div>
              <div className={styles.wrap}>
                {allProducts.map((prod) => {
                  return (
                    <Link href={`/shop/${prod.id}`} key={prod.id}>
                      <Image src={prod.imageUrl} alt={prod.name} height={100} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewShop;
