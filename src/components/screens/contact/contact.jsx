import React from "react";
import styles from "./contact.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ContactScreen = () => {
  return (
    <div className={styles.ContactScreen}>
      <div className={styles.formContainer}>
        <form>
          <h1>CONTACT US</h1>
          <Row>
            <Col xs={12} md={6}>
              <div className={styles.field}>
                <label>First Name*</label>
                <input placeholder="First Name" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.field}>
                <label>Last Name*</label>
                <input placeholder="Last name" />
              </div>
            </Col>
          </Row>

          <div className={styles.field}>
            <label>Email</label>
            <input placeholder="Email" type="email" />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea placeholder="Email" rows={4} />
          </div>
          <div className={styles.btn}>
            <CustomButton>Send Message</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
