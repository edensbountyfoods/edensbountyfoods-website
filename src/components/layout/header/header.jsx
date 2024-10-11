import React, { useState } from "react";

import styles from "./header.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
// import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "react-bootstrap-icons";
import CartButton from "./cart_button/cart_button";
import { Image } from "react-bootstrap";

const Menu = ({ setShowMenu }) => {
  return (
    <div
      className={styles.menu}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Link href="/">HOME</Link>
      <Link href="/shop">SHOP NOW</Link>
      <Link href="/about">ABOUT US</Link>
      <Link href="/contact">CONTACT</Link>
    </div>
  );
};

const Header = ({ cartItems, setCartItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.Header}>
      <CustomContainer ofHid={false}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo/logo_main1.png"
                alt="main_logo"
                width={'auto'}
                height={80}
              />
            </Link>
          </div>

          <div className={styles.right}>
            <CartButton cartItems={cartItems} setCartItems={setCartItems} />
            <div className={styles.menuIcon}>
              {showMenu && <Menu setShowMenu={setShowMenu} />}
              <Plus
                className={`${styles.ico} ${
                  showMenu ? styles.open : styles.close
                }`}
                onClick={() => {
                  setShowMenu((p) => !p);
                }}
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
