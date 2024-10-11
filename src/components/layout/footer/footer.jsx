import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./footer.module.scss";
import { Image } from "react-bootstrap";
import SocialLinks from "@/components/ui/social_links/social_links";
import Link from "next/link";
import { ChevronRight, Link45deg } from "react-bootstrap-icons";

const Footer = ({ products }) => {
  return (
    <footer className={styles.Footer}>
      <CustomContainer>
        <div className={styles.top}>
          <div className={styles.left}>
            <Image src="/logo/logo_main.png" width={100} alt="logo" />
            <p>Energize your life, the Tigris way</p>
            <SocialLinks />
          </div>

          <div className={styles.right}>
            <div className={styles.box}>
              <h1>Quick Links</h1>
              <Link href="/"> Home</Link>
              <Link href="/shop">Shop Now</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.box}>
              <h1>Flavours</h1>
              {products.map((product) => {
                return (
                  <Link key={product.id} href={`/shop/${product.id}`}>
                    {product.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className={styles.bottom}>
          <p>&copy; 2024</p>
          <div className={styles.links}>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
