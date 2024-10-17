import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CartItemsList } from "@/components/layout/header/cart_button/cart_button";
import axios from "axios";
import { v4 } from "uuid";
import sha256 from "sha256";
import { useRouter } from "next/router";

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
  const [merchantTransactionId, setMerchantTrasactionId] = useState("");

  useEffect(() => {
    setMerchantTrasactionId(v4());
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const url =; // Get full URL including domain
  //     // setFullUrl(url);
  //     console.log(url);
  //   }
  // }, []);

  const router = useRouter();
  // console.log(router);

  if (cartItems?.[0]) {
    cartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.count;
    });
  }

  const PHONE_PE_HOST_URL = process.env.NEXT_PUBLIC_PHONE_PE_HOST_URL;
  const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
  const SALT_INDEX = process.env.NEXT_PUBLIC_SALT_INDEX;
  const SALT_KEY = process.env.NEXT_PUBLIC_SALT_KEY;
  //
  const payEndPoint = process.env.NEXT_PUBLIC_PAY_ENDPOINT;
  const merchantUserId = process.env.NEXT_PUBLIC_MERCHANT_USER_ID;

  const placeOrder = async () => {
    setIsLoading(true);

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId,
      amount: totalPrice * 100,
      // amount: 100000,
      redirectUrl: `${window.location.href}/${merchantTransactionId}`,
      redirectMode: "REDIRECT",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
      shippingAddress: {
        name: "John Doe",
        addressLine1: "123 Street Name",
        addressLine2: "Area Name",
        city: "City",
        state: "State",
        postalCode: "123456",
        country: "IN",
        phone: "9876543210",
      },
    };

    // SHA256(base64 encoded payload + “/pg/v1/pay” + salt key) + ### + salt index
    const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
    const base64EncodedPayload = bufferObj.toString("base64");
    const xVerify =
      sha256(base64EncodedPayload + payEndPoint + SALT_KEY) +
      "###" +
      SALT_INDEX;

    const options = {
      method: "post",
      url: `${PHONE_PE_HOST_URL}${payEndPoint}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
      },
      data: {
        request: base64EncodedPayload,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        // console.log(
        //   response?.data?.data?.instrumentResponse?.redirectInfo?.url
        // );
        router.replace(
          response?.data?.data?.instrumentResponse?.redirectInfo?.url
        );
      })
      .catch(function (error) {
        alert("Something went wrong");
        console.error(error);
      });

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
                </Box>
              </Col>
            </Row>
          </form>

          <CustomButton
            btnType="submit"
            // disabled={totalPrice < 1 || isLoading}
            clickHandler={placeOrder}
          >
            {isLoading ? "Please Wait..." : "Place Order"}
          </CustomButton>
        </div>
      </CustomContainer>
    </div>
  );
};

export default CheckoutScreen;
