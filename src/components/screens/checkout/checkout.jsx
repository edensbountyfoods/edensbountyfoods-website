import React from "react";
import styles from "./checkout.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CartItemsList } from "@/components/layout/header/cart_button/cart_button";

const Box = ({ head, required, children }) => {
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <h2>{head}</h2>
        {required && <small>*Required</small>}
      </div>

      <div className={styles.cont}>{children}</div>
    </div>
  );
};

const CheckoutScreen = ({ cartItems, setCartItems }) => {
  let totalPrice = 0;

  if (cartItems?.[0]) {
    cartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.count;
    });
  }

  console.log(totalPrice);

  return (
    <div className={styles.CheckoutScreen}>
      <div className={styles.top}>
        <h1>CHECKOUT</h1>
      </div>
      <hr />
      <CustomContainer>
        <div className={styles.formContainer}>
          <form>
            <Row>
              <Col xs={12} md={7}>
                <div className={styles.left}>
                  <Box head="Customer Info" required>
                    <input required placeholder="Email" type="email" />
                    <input
                      required
                      placeholder="Phone Number"
                      min={10}
                      max={10}
                      minLength={10}
                      maxLength={10}
                    />
                  </Box>
                  <Box head="Billing Address" required>
                    <input required placeholder="Full Name" />
                    <input required placeholder="Address line 1" />
                    <input required placeholder="Address line 1" />
                    <input required placeholder="City" />

                    <Row>
                      <Col xs={6}>
                        <input required placeholder="State" />
                      </Col>
                      <Col xs={6}>
                        <input required placeholder="Zip" />
                      </Col>
                    </Row>
                  </Box>
                </div>
              </Col>

              <Col>
                <div className={styles.right}>
                  <Box head="Items in Order">
                    <CartItemsList
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  </Box>
                </div>
              </Col>

              <Col xs={12}>
                <Box head="Order Summary">
                  <div className={styles.pay}>
                    <div>
                      <p>Subtotal</p>
                      <p>Rs.{totalPrice}/-</p>
                    </div>
                  </div>
                  <CustomButton btnType="submit" disabled={totalPrice < 1}>
                    Place Order
                  </CustomButton>
                </Box>
              </Col>
            </Row>
          </form>
        </div>
      </CustomContainer>
    </div>
  );
};

export default CheckoutScreen;
