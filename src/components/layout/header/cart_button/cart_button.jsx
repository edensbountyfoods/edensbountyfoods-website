import React, { useState } from "react";
import { Cart } from "react-bootstrap-icons";
import styles from "./cart_button.module.scss";
import { Image, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Item = ({ data, setCartItems, itemIndex }) => {
  const { count, id, imageUrl, name, price } = data;
  return (
    <div className={styles.CartTItem}>
      <Image src={imageUrl} height={120} alt="cartItem" />
      <div>
        <h1>{name}</h1>
        <p>Rs.{price}</p>
        <div className={styles.count}>
          <div
            className={styles.min}
            onClick={() => {
              if (data.count === 1) {
                setCartItems((prev) => prev.filter((i) => i.id !== id));
              } else {
                setCartItems((prev) => {
                  const allItems = [...prev];

                  allItems[itemIndex].count = count - 1;
                  return allItems;
                });
              }
            }}
          >
            -
          </div>
          <p>{count}</p>
          <div
            className={styles.plus}
            onClick={() => {
              setCartItems((prev) => {
                const allItems = [...prev];
                allItems[itemIndex].count = count + 1;
                return allItems;
              });
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartItemsList = ({ cartItems, setCartItems }) => {
  return (
    <div className={styles.items}>
      {cartItems.map((item, itemIndex) => {
        return (
          <Item
            key={item.id}
            data={item}
            setCartItems={setCartItems}
            itemIndex={itemIndex}
          />
        );
      })}
    </div>
  );
};

const CartButton = ({ cartItems, setCartItems }) => {
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  let total = 0;

  if (cartItems?.[0]) {
    cartItems.forEach((item) => {
      total = total + item.count * item.price;
    });
  }
  return (
    <>
      <Offcanvas
        show={showCartDrawer}
        onHide={() => {
          setShowCartDrawer(false);
        }}
        placement="end"
        className={styles.cartDrawer}
      >
        <Offcanvas.Header closeButton className={styles.head}>
          <Offcanvas.Title>
            <p>MY CART</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.body}>
          <div>
            <CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
            {!cartItems?.[0] && (
              <div className={styles.empty}>Your cart is currently empty</div>
            )}
            <div className={styles.checkout}>
              <div className={styles.top}>
                <p>Total</p>
                <p>Rs. {total}/-</p>
              </div>
              {total != 0 && (
                <Link
                  href="/checkout"
                  className={styles.btn}
                  onClick={() => {
                    setShowCartDrawer(false);
                  }}
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div
        className={styles.CartButton}
        onClick={() => {
          setShowCartDrawer(true);
        }}
      >
        {cartItems?.[0] && (
          <div className={styles.bubble}>
            <p>{cartItems?.length}</p>
          </div>
        )}
        <Image
          src="/assets/icons/cart.svg"
          width={45}
          alt="cart"
          className={styles.cartIcon}
        />
      </div>
    </>
  );
};

export default CartButton;
