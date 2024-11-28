import React, { useEffect, useRef, useState } from "react";
import styles from "./specs.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useScroll, motion, useTransform, useInView } from "framer-motion";

const Blob = ({ blob, isInView, index }) => {
  // console.log();

  return (
    <motion.div
      className={`${styles.blob} ${styles[`blob_${blob.id}`]}`}
      initial={{
        scale: 0,
      }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ duration: 0.2, delay: index / 10 + 0.2 }}
    >
      <div>
        <Image
          src={`/assets/blobs/blob${blob.id}.png`}
          alt="blob"
          width={180}
          height={180}
        />
        <h2>{blob.text.toUpperCase()}</h2>
      </div>
    </motion.div>
  );
};

export const SpecsBottle = () => {
  const blobs = [
    {
      id: "1",
      text: "no artificial flavor",
    },
    {
      id: "2",
      text: "RO Water",
    },
    {
      id: "3",
      text: "Hygienically packed",
    },
    {
      id: "4",
      text: "No artificial colour",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
  });

  return (
    <div className={styles.left}>
      <div className={styles.img}>
        {blobs.map((blob, index) => {
          return (
            <Blob
              key={`blob_${blob.id}`}
              blob={blob}
              isInView={isInView}
              index={index}
            />
          );
        })}
        <motion.div
          initial={{ rotate: -50, scale: 0 }}
          animate={
            isInView ? { rotate: 0, scale: 1 } : { rotate: -50, scale: 0 }
          }
          transition={{ duration: 0.2 }}
          ref={ref}
        >
          <Image
            src="/assets/bottle.png"
            height={600}
            width={200}
            alt="bottle"
            className={styles.btl}
          />
        </motion.div>
      </div>
    </div>
  );
};

const SpecsSection = () => {
  const specs1 = [
    {
      id: "1sc",
      text: "Nata de coco",
      icon: "energy.avif",
      color: "greenYellow",
    },
    {
      id: "dzvsd",
      text: "Drinkable snack",
      icon: "heart.avif",
      color: "red",
    },
  ];
  const specs2 = [
    {
      id: "srgrt",
      text: "Kids friendly",
      icon: "sugar.avif",
      color: "violet",
    },
    {
      id: "dgbdgb",
      text: "Nutrient rich",
      icon: "nutrient.avif",
      color: "skyblue",
    },
  ];

  const ref = useRef(null);

  const isInView = useInView(ref);

  const specsRef = useRef(null);
  const specsIsInView = useInView(specsRef, {
    margin: '-200px',
  });

  return (
    <section className={styles.SpecsSection}>
      <CustomContainer>
        <CustomSection>
          <Row>
            <Col xs={12} lg={6}>
              <SpecsBottle />
            </Col>
            <Col xs={12} lg={6}>
              <motion.div className={styles.right}>
                <motion.div
                  ref={ref}
                  initial={{
                    rotateY: 90,
                    scaleX: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          rotateY: 0,
                          rotateZ: 0,
                          opacity: 1,
                          scaleX: 1,
                        }
                      : {
                          rotateY: 90,
                          rotateZ: 10,
                          scaleX: 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <motion.h1>AN INDIAN DRINK SENSATION</motion.h1>
                  <p>
                    Yaja - India’s Unique Natural Beverage Brand: Discover Yaja,
                    an innovative drink crafted with natural ingredients like
                    basil seeds, fruit pulp, and fermented coconut jelly. Our
                    refreshing beverages are nutrient-rich, and free from
                    artificial colors and flavors, catering to all age groups.
                    Make Yaja your new favorite.
                  </p>
                </motion.div>
                <div className={styles.specs} ref={specsRef}>
                  <div>
                    {specs1.map((spec) => {
                      return (
                        <motion.div
                          className={styles.spec}
                          key={spec.id}
                          style={{
                            borderColor: spec.color,
                          }}
                          initial={{
                            rotateY: 90,
                          }}
                          animate={
                            specsIsInView
                              ? {
                                  rotateY: 0,
                                }
                              : {
                                  rotateY: 90,
                                }
                          }
                          transition={{
                            duration: 0.3,
                            delay: 0.1,
                          }}
                        >
                          <Image
                            src={`/assets/icons/${spec.icon}`}
                            alt={spec.icon}
                            width={30}
                            height={30}
                          />
                          <p>{spec.text}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.specs}>
                  <div>
                    {specs2.map((spec) => {
                      return (
                        <motion.div
                          className={styles.spec}
                          key={spec.id}
                          style={{
                            borderColor: spec.color,
                          }}
                          initial={{
                            rotateY: 90,
                          }}
                          animate={
                            specsIsInView
                              ? {
                                  rotateY: 0,
                                }
                              : {
                                  rotateY: 90,
                                }
                          }
                          transition={{
                            duration: 0.3,
                            delay: 0.3,
                          }}
                        >
                          <Image
                            src={`/assets/icons/${spec.icon}`}
                            alt={spec.icon}
                            width={30}
                            height={30}
                          />
                          <p>{spec.text}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default SpecsSection;
