import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React, { useRef } from "react";
import styles from "./flavours.module.scss";

import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { Image } from "react-bootstrap";

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

  const snacks = [
    
  ]

  const ref = useRef();

  const isInView = useInView(ref, {
    margin: "-150px",
  });

  return (
    <section className={styles.FlavoursSection}>
      <CustomContainer>
        <CustomSection>
          <div className={styles.top}>
            <div>
              <h1 className={styles.head}>PRODUCTS</h1>
              <span className={styles.span}> AMAZING</span>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className={styles.wrap} ref={ref}>
            {flavours.map((flavour, idx) => {
              if (flavour.isGift) {
                return (
                  <motion.div
                    key={flavour.id}
                    className={styles.flavour}
                    initial={{
                      scale: 0,
                    }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx / 10,
                    }}
                  >
                    <Image
                      src={`/assets/svg/gift${(idx % 2) + 1}.svg`}
                      alt={flavour.name}
                      height={120}
                      width={120}
                    />
                    <p>{flavour.name}</p>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={flavour.id}
                  className={styles.flavour}
                  initial={{
                    scale: 0,
                  }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: idx / 10,
                  }}
                >
                  <Link href="/">
                    <Image
                      src={
                        flavour?.isGift
                          ? `/assets/svg/gift${(idx % 2) + 1}.svg`
                          : `/images/flavours/${flavour.id}.png`
                      }
                      alt={flavour.name}
                      height={120}
                      // height='auto'
                    />
                    <p>{flavour.name}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default FlavoursSection;
