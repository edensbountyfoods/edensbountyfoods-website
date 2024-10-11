import React from "react";
import styles from "./specs.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const Blob = ({ blob }) => {
  return (
    <div className={`${styles.blob} ${styles[`blob_${blob.id}`]}`}>
      <div>
        <Image
          src={`/assets/blobs/blob${blob.id}.png`}
          alt="blob"
          width={180}
          height={180}
        />
        <p>{blob.text}</p>
      </div>
    </div>
  );
};

export const SpecsBottle = () => {
  const blobs = [
    {
      id: "1",
      text: "4G ENERGY",
    },
    {
      id: "2",
      text: "ZERO SUGAR",
    },
    {
      id: "3",
      text: "4G BCAA'S",
    },
    {
      id: "4",
      text: "ZERO GMO'S",
    },
  ];

  return (
    <div className={styles.left}>
      <div className={styles.img}>
        {blobs.map((blob) => {
          return <Blob key={`blob_${blob.id}`} blob={blob} />;
        })}
        <Image
          src="/assets/bottle.avif"
          height={600}
          width={200}
          alt="bottle"
          className={styles.btl}
        />
      </div>
    </div>
  );
};



const SpecsSection = () => {
  const specs1 = [
    {
      id: "1sc",
      text: "3-5 hours of energy",
      icon: "energy.avif",
      color: "greenYellow",
    },
    {
      id: "dzvsd",
      text: "No jitters ",
      icon: "heart.avif",
      color: "red",
    },
  ];
  const specs2 = [
    {
      id: "dgbdgb",
      text: "Nutrient rich",
      icon: "nutrient.avif",
      color: "skyblue",
    },
    {
      id: "srgrt",
      text: "Zero Sugar",
      icon: "sugar.avif",
      color: "violet",
    },
  ];

  return (
    <section className={styles.SpecsSection}>
      <CustomContainer>
        <CustomSection>
          <Row>
            <Col xs={12} lg={6}>
              <SpecsBottle />
            </Col>
            <Col xs={12} lg={6}>
              <div className={styles.right}>
                <h1>A BOOST OF HIGH QUALITY ENERGY</h1>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, quisquam voluptatem nihil non a eligendi dolore
                  deleniti recusandae error. Hic.
                </p> */}
                <div className={styles.specs}>
                  <div>
                    {specs1.map((spec) => {
                      return (
                        <div
                          className={styles.spec}
                          key={spec.id}
                          style={{
                            borderColor: spec.color,
                          }}
                        >
                          <Image
                            src={`/assets/icons/${spec.icon}`}
                            alt={spec.icon}
                            width={30}
                            height={30}
                          />
                          <p>{spec.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.specs}>
                  <div>
                    {specs2.map((spec) => {
                      return (
                        <div
                          className={styles.spec}
                          key={spec.id}
                          style={{
                            borderColor: spec.color,
                          }}
                        >
                          <Image
                            src={`/assets/icons/${spec.icon}`}
                            alt={spec.icon}
                            width={30}
                            height={30}
                          />
                          <p>{spec.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default SpecsSection;
