import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./flavours.module.scss";
import Image from "next/image";
import Link from "next/link";

const FlavoursSection = ({ products }) => {
  const flavours = [
    ...products,

    {
      id: "5",
      name: "Coming Soon..!",
      // img: "mango.png",
      isGift: true,
    },
    {
      id: "6",
      name: "Coming Soon..!",
      // img: "mango.png",
      isGift: true,
    },
  ];

  return (
    <section className={styles.FlavoursSection}>
      <CustomContainer>
        <CustomSection>
          <div className={styles.top}>
            <div>
              <h1 className={styles.head}>FLAVOURS</h1>
              <span className={styles.span}> AMAZING</span>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className={styles.wrap}>
            {flavours.map((flavour, idx) => {
              if (flavour.isGift) {
                return (
                  <div key={flavour.id} className={styles.flavour}>
                    <Image
                      src={`/assets/svg/gift${(idx % 2) + 1}.svg`}
                      alt={flavour.name}
                      height={120}
                      width={120}
                    />
                    <p>{flavour.name}</p>
                  </div>
                );
              }
              return (
                <Link href="/" key={flavour.id} className={styles.flavour}>
                  <Image
                    src={
                      flavour?.isGift
                        ? `/assets/svg/gift${(idx % 2) + 1}.svg`
                        : `/images/flavours/${flavour.id}.png`
                    }
                    alt={flavour.name}
                    height={120}
                    width={120}
                  />
                  <p>{flavour.name}</p>
                </Link>
              );
            })}
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default FlavoursSection;
