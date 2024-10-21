import sha256 from "sha256";
import { v4 } from "uuid";

const handler = async (req, res) => {
  const PHONE_PE_HOST_URL = process.env.NEXT_PUBLIC_PHONE_PE_HOST_URL;
  const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
  const SALT_INDEX = process.env.NEXT_PUBLIC_SALT_INDEX;
  const SALT_KEY = process.env.NEXT_PUBLIC_SALT_KEY;
  const payEndPoint = process.env.NEXT_PUBLIC_PAY_ENDPOINT;

  try {
    const merchantTransactionId = v4();
    const { referer: clientUrl } = req.headers;

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      amount: req.body.amount * 100, // Amount in paise (100 rupees)
      redirectUrl: `${clientUrl}/${merchantTransactionId}`,
      redirectMode: "REDIRECT",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // Base64 encode the payload
    const bufferObj = Buffer.from(JSON.stringify(payload), "utf-8");
    const base64EncodedPayload = bufferObj.toString("base64");

    // Generate X-VERIFY value
    const xVerify =
      sha256(base64EncodedPayload + payEndPoint + SALT_KEY) +
      "###" +
      SALT_INDEX;

    const response = await fetch(`${PHONE_PE_HOST_URL}${payEndPoint}`, {
      method: "POST",
      body: JSON.stringify({
        request: base64EncodedPayload, // Stringify the request body
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const responseData = await response.json();
    return res.status(200).json(responseData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export default handler;
