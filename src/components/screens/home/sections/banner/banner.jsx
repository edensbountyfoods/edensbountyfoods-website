import React from "react";
import styles from "./banner.module.scss";
import CustomSection from "@/components/ui/custom_section/custom_section";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import fonts from "@/styles/fonts/fonts";

const BannerSection = () => {
  return (
    <section className={styles.BannerSection}>
      <div className={styles.bgOverlay}></div>
      <div>
        <CustomContainer>
          <div className={styles.cont}>
            <h1 className={`${fonts.font1} ${styles.h1}`}>WELCOME TO THE</h1>

            <div className={styles.l2}>
              <div className={styles.btn1}>
                <CustomButton href="/shop">SHOP</CustomButton>
              </div>
              <h1 className={`${fonts.font1} ${styles.h2}`}>UNIVERSE OF YAJA</h1>
              <div className={styles.btn2}>
                <CustomButton href="/shop">SHOP</CustomButton>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default BannerSection;
