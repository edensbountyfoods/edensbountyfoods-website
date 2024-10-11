import React from "react";
import styles from "../trems-conditions/trems-conditions.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const RefundPolicyScreen = () => {
  return (
    <div className={styles.TermScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1>Privacy Policy</h1>
          <br />
          <br />

          <div className={styles.cont}>
            <div class="entry-content single-content">
              <p>
                At Edens Bounty Foods, we strive to provide our customers with
                safe, pure, and hygienic drinking water. Our goal is to ensure
                complete satisfaction with every product we deliver. Please
                carefully read our refund and return policy outlined below:
              </p>
              <h3 class="wp-block-heading">
                <strong>1. Returns</strong>
              </h3>
              <p>
                Due to the nature of our product (packaged drinking water),
                returns are generally not accepted. However, we will consider
                returns under the following conditions:
              </p>
              <ul class="wp-block-list">
                <li>
                  <strong>Damaged or Defective Products</strong>: If you receive
                  a product that is damaged, defective, or contaminated, please
                  contact us immediately. We will arrange for a replacement or a
                  refund, depending on the situation.
                </li>

                <li>
                  <strong>Wrong Product</strong>: If the product delivered does
                  not match your order, please notify us within 48 hours of
                  delivery to initiate a return or exchange.
                </li>
              </ul>
              <h3 class="wp-block-heading">
                <strong>2. Conditions for Return</strong>
              </h3>
              <p>
                To be eligible for a return or refund, the following conditions
                must be met:
              </p>
              <ul class="wp-block-list">
                <li>
                  The product must be unused and in the same condition that you
                  received it.
                </li>

                <li>
                  The product must be in its original packaging and unopened.
                </li>

                <li>
                  A valid proof of purchase (receipt, invoice) must be provided.
                </li>
              </ul>
              <h3 class="wp-block-heading">
                <strong>3. Refunds</strong>
              </h3>
              <p>
                Refunds are only applicable under specific circumstances such
                as:
              </p>
              <ul class="wp-block-list">
                <li>
                  <strong>Damaged, Defective, or Contaminated Products</strong>:
                  After we have received your complaint, we will inspect the
                  product and notify you of the approval or rejection of your
                  refund. If approved, the refund will be processed, and a
                  credit will be applied to your original method of payment
                  within 7-10 business days.
                </li>

                <li>
                  <strong>Non-Availability of Products</strong>: In the event we
                  are unable to fulfill your order due to unavailability, we
                  will inform you and process a full refund.
                </li>
              </ul>
              <p>
                <strong>Please note:</strong> Shipping fees, if applicable, are
                non-refundable unless the return is due to an error on our part
                (e.g., wrong or damaged product).
              </p>
              <h3 class="wp-block-heading">
                <strong>4. Exchange Policy</strong>
              </h3>
              <p>
                We only replace products if they are defective, damaged, or
                contaminated. If you need to exchange it for the same item,
                please contact us at{" "}
                <strong>
                  <a href="mailto:info@edensbountyfoods.com">
                    info@edensbountyfoods.com
                  </a>
                </strong>{" "}
                /{" "}
                <strong>
                  <a href="tel:+91 9940928610">+91 9940928610</a>
                </strong>{" "}
                within 48 hours of delivery.
              </p>
              <h3 class="wp-block-heading">
                <strong>5. Non-Returnable Items</strong>
              </h3>
              <p>
                Certain products are not eligible for return or refund,
                including:
              </p>
              <ul class="wp-block-list">
                <li>Opened or partially consumed bottles</li>

                <li>
                  Products without original packaging or proof of purchase
                </li>

                <li>Products that have been tampered with after delivery</li>
              </ul>
              <h3 class="wp-block-heading">
                <strong>6. Cancellations</strong>
              </h3>
              <p>
                You may cancel your order before it is dispatched for delivery.
                Once the product has been shipped, cancellations will not be
                accepted. To cancel an order, please contact us as soon as
                possible at [insert contact details].
              </p>
              <h3 class="wp-block-heading">
                <strong>7. How to Initiate a Return or Refund</strong>
              </h3>
              <p>To initiate a return or refund, please follow these steps:</p>
              <ul class="wp-block-list">
                <li>
                  Contact our customer service team at{" "}
                  <strong>
                    <a href="mailto:info@edensbountyfoods.com">
                      info@edensbountyfoods.com
                    </a>
                  </strong>
                  &nbsp;/&nbsp;
                  <strong>
                    <a href="tel:+91 9940928610">+91 9940928610</a>
                  </strong>
                  &nbsp; within 48 hours of receiving your order.
                </li>

                <li>
                  Provide details of your purchase, including proof of purchase
                  and reason for return/refund.
                </li>

                <li>
                  Our team will review your request and provide further
                  instructions regarding the return or refund process.
                </li>
              </ul>
              <h3 class="wp-block-heading">
                <strong>8. Contact Us</strong>
              </h3>
              <p>
                If you have any questions or concerns about our refund and
                return policy, feel free to contact us at:
              </p>
              <p>
                <strong>Email</strong>:{" "}
                <strong>
                  <a href="mailto:info@edensbountyfoods.com">
                    info@edensbountyfoods.com
                  </a>
                </strong>
                <br />
                <strong>Phone</strong>:{" "}
                <strong>
                  <a href="tel:+91 9940928610">+91 9940928610</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default RefundPolicyScreen;
