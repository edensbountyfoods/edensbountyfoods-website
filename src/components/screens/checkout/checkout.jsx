import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CartItemsList } from "@/components/layout/header/cart_button/cart_button";
import { useRouter } from "next/router";
import { addData } from "@/libs/firebase/firebase";
import axios from "axios";
import { v4 } from "uuid";

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

  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    phone: "",
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });
  const router = useRouter();

  if (cartItems?.[0]) {
    cartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.count;
    });
  }

  const placeOrder = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const id = v4();

      const response = await axios.post("/api/payment/pay", {
        amount: totalPrice,
      });

      await addData(
        "orders",
        {
          id,
          customer: {
            ...values,
          },
          cartItems: cartItems.map(({ count, id, name, price }) => {
            return {
              count,
              id,
              name,
              price,
            };
          }),
          totalPrice,
          status: response?.data?.code,
          merchantTransactionId: response?.data?.data?.merchantTransactionId,
        },
        id
      );

      router.replace(
        response?.data?.data?.instrumentResponse?.redirectInfo?.url
      );
    } catch (err) {
      console.log(err.message);
      alert("Something Went Wrong.");
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.CheckoutScreen}>
      <div className={styles.top}>
        <h1>CHECKOUT</h1>
      </div>
      <hr />
      <CustomContainer>
        <div className={styles.formContainer}>
          <form onSubmit={placeOrder}>
            <Row>
              <Col xs={12} md={7}>
                <div className={styles.left}>
                  <Box head="Customer Info" required>
                    <input
                      required
                      placeholder="Email"
                      type="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    />
                    <input
                      required
                      placeholder="Phone Number"
                      min={10}
                      max={10}
                      minLength={10}
                      maxLength={10}
                      value={values.phone}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }));
                      }}
                    />
                  </Box>
                  <Box head="Billing Address" required>
                    <input
                      required
                      placeholder="Full Name"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }));
                      }}
                    />
                    <input
                      required
                      placeholder="Address line 1"
                      value={values.addressLine1}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          addressLine1: e.target.value,
                        }));
                      }}
                    />
                    <input
                      required
                      placeholder="Address line 1"
                      value={values.addressLine2}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          addressLine2: e.target.value,
                        }));
                      }}
                    />
                    <input
                      required
                      placeholder="City"
                      value={values.city}
                      onChange={(e) => {
                        setValues((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }));
                      }}
                    />

                    <Row>
                      <Col xs={6}>
                        <input
                          required
                          placeholder="State"
                          value={values.state}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              state: e.target.value,
                            }));
                          }}
                        />
                      </Col>
                      <Col xs={6}>
                        <input
                          required
                          placeholder="Zip"
                          value={values.zip}
                          onChange={(e) => {
                            setValues((prev) => ({
                              ...prev,
                              zip: e.target.value,
                            }));
                          }}
                        />
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
                  <CustomButton
                    btnType="submit"
                    disabled={totalPrice < 1 || isLoading}
                  >
                    {isLoading ? "Please Wait..." : "Place Order"}
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
