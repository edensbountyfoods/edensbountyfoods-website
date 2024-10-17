import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./status.module.scss";
import axios from "axios";
import sha256 from "sha256";

const PaymentStatusScreen = () => {
  const router = useRouter();
  const { merchantTransactionId } = router.query;
  const [status, setStatus] = useState("Please Wait..");

  const PHONE_PE_HOST_URL = process.env.NEXT_PUBLIC_PHONE_PE_HOST_URL;
  const STATUS_ENDPOINT = process.env.NEXT_PUBLIC_STATUS_ENDPOINT;

  const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
  const SALT_INDEX = process.env.NEXT_PUBLIC_SALT_INDEX;
  const SALT_KEY = process.env.NEXT_PUBLIC_SALT_KEY;

  const checkPaymentStatus = async () => {
    // SHA256(“/pg/v1/status/{merchantId}/{merchantTransactionId}” + saltKey) + “###” + saltIndex
    const xVerify =
      sha256(
        `${STATUS_ENDPOINT}${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY
      ) +
      "###" +
      SALT_INDEX;

    const options = {
      method: "get",
      url: `${PHONE_PE_HOST_URL}${STATUS_ENDPOINT}${MERCHANT_ID}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
        "X-MERCHANT-ID": MERCHANT_ID,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        setStatus(response.data.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    // console.log();

    if (merchantTransactionId) {
      checkPaymentStatus();
    }
  }, [merchantTransactionId]);

  return (
    <div className={styles.PaymentStatusScreen}>
      <p>{status}</p>
    </div>
  );
};

export default PaymentStatusScreen;
