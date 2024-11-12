import React from "react";
import styles from "./specs.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

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
        <h2>{blob.text.toUpperCase()}</h2>
      </div>
    </div>
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

  return (
    <div className={styles.left}>
      <div className={styles.img}>
        {blobs.map((blob) => {
          return <Blob key={`blob_${blob.id}`} blob={blob} />;
        })}
        <Image
          src="/assets/bottle.png"
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
                <h1>AN INDIAN DRINK SENSATION</h1>
                <p>
                  Yaja - India’s Unique Natural Beverage Brand: Discover Yaja,
                  an innovative drink crafted with natural ingredients like
                  basil seeds, fruit pulp, and fermented coconut jelly. Our
                  refreshing beverages are nutrient-rich, and free from
                  artificial colors and flavors, catering to all age groups.
                  Make Yaja your new favorite.
                </p>
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