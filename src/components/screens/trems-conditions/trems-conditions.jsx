import React from "react";
import styles from "./trems-conditions.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const TermScreen = () => {
  return (
    <div className={styles.TermScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1>Terms & Conditions</h1>
          <br />
          <br />

          <div className={styles.cont}>
            <p>
              Welcome to Edens Bounty Foods. These terms and conditions outline
              the rules and regulations for the use of our website and services.
              By accessing this website and purchasing our products, you agree
              to comply with and be bound by the following terms and conditions.
              If you disagree with any part of these terms, you may not access
              our services.
            </p>
            <h3 class="wp-block-heading">
              <strong>1. Definitions</strong>
            </h3>
            <ul class="wp-block-list">
              <li>
                <strong>“We,” “Us,” “Our”</strong> refers to Edens Bounty Foods.
              </li>

              <li>
                <strong>“You,” “User,” “Customer”</strong> refers to the
                individual or organization using our website or purchasing our
                products.
              </li>
            </ul>
            <h3 class="wp-block-heading">
              <strong>2. Use of Website</strong>
            </h3>
            <p>By accessing our website, you warrant that:</p>
            <ul class="wp-block-list">
              <li>
                You are at least 18 years old, or accessing the site under the
                supervision of a parent or guardian.
              </li>

              <li>
                You will use the website in compliance with all applicable
                local, state, national, and international laws and regulations.
              </li>

              <li>
                You will not use our website to engage in fraudulent, abusive,
                or illegal activities.
              </li>
            </ul>
            <p>
              We reserve the right to refuse service, terminate accounts, or
              cancel orders at our sole discretion if we believe a user is
              engaging in activities that violate these terms.
            </p>
            <h3 class="wp-block-heading">
              <strong>3. Products and Services</strong>
            </h3>
            <p>
              Edens Bounty Foods provides packaged drinking water that adheres
              to industry standards. We strive to maintain high product quality,
              but due to the natural variations in water sources, taste may vary
              slightly.
            </p>
            <ul class="wp-block-list">
              <li>
                <strong>Product Availability</strong>: All products are subject
                to availability. We reserve the right to discontinue any product
                at any time without notice.
              </li>

              <li>
                <strong>Order Acceptance</strong>: We reserve the right to
                refuse or cancel any order placed for our products. If your
                order is canceled, we will notify you by email or phone, and a
                full refund will be issued.
              </li>
            </ul>
            <h3 class="wp-block-heading">
              <strong>4. Pricing and Payment</strong>
            </h3>
            <ul class="wp-block-list">
              <li>
                <strong>Pricing</strong>: All prices displayed on our website
                are in [Currency] and are inclusive of applicable taxes unless
                otherwise stated. We reserve the right to change prices at any
                time without prior notice.
              </li>

              <li>
                <strong>Payment</strong>: Payment must be made at the time of
                placing an order using one of the accepted payment methods. We
                use secure payment gateways to process payments. Edens Bounty
                Foods does not store your payment information.
              </li>
            </ul>
            <h3 class="wp-block-heading">
              <strong>5. Shipping and Delivery</strong>
            </h3>
            <ul class="wp-block-list">
              <li>
                We strive to deliver your order within the estimated delivery
                times provided at checkout. However, delivery times may vary
                depending on your location, product availability, and other
                external factors.
              </li>

              <li>
                We are not responsible for delays in delivery caused by
                third-party courier services or unforeseen circumstances.
              </li>
            </ul>
            <h3 class="wp-block-heading">
              <strong>6. Return and Refund Policy</strong>
            </h3>
            <p>
              Please refer to our <strong>Refund and Return Policy</strong> for
              detailed information on returns, exchanges, and refunds.
            </p>
            <h3 class="wp-block-heading">
              <strong>7. Intellectual Property</strong>
            </h3>
            <p>
              All content, trademarks, logos, designs, and images displayed on
              our website are the intellectual property of Edens Bounty Foods or
              third parties who have granted us permission to use them. You may
              not copy, reproduce, distribute, or create derivative works from
              any content on our website without our express written permission.
            </p>
            <h3 class="wp-block-heading">
              <strong>8. Limitation of Liability</strong>
            </h3>
            <p>
              Edens Bounty Foods will not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use of our products or website. Our maximum liability in any case
              shall be limited to the purchase price of the product you
              purchased.
            </p>
            <h3 class="wp-block-heading">
              <strong>9. Disclaimer of Warranties</strong>
            </h3>
            <p>
              Our products and services are provided “as is” without any
              warranties, express or implied. While we make every effort to
              ensure the quality and safety of our drinking water, we do not
              warrant that our products will meet your specific requirements or
              expectations.
            </p>
            <h3 class="wp-block-heading">
              <strong>10. Privacy Policy</strong>
            </h3>
            <p>
              Your privacy is important to us. Please refer to our{" "}
              <strong>Privacy Policy</strong> for information on how we collect,
              use, and protect your personal data.
            </p>
            <h3 class="wp-block-heading">
              <strong>11. Changes to Terms and Conditions</strong>
            </h3>
            <p>
              We reserve the right to update or change these terms and
              conditions at any time. Any changes will be posted on this page,
              and it is your responsibility to review them periodically.
              Continued use of the website following any changes signifies your
              acceptance of the updated terms.
            </p>
            <h3 class="wp-block-heading">
              <strong>12. Governing Law</strong>
            </h3>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of India. Any disputes arising out of or
              related to these terms shall be subject to the exclusive
              jurisdiction of the courts in india.
            </p>
            <h3 class="wp-block-heading">
              <strong>13. Contact Information</strong>
            </h3>
            <p>
              If you have any questions or concerns regarding these Terms and
              Conditions, you can contact us at:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@edensbountyfoods.com">
                info@edensbountyfoods.com
              </a>{" "}
              Phone:{" "}
              <a href="tel:" data-type="tel" data-id="tel:">
                +91 99409 28610
              </a>
            </p>
            <p></p>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default TermScreen;
