import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./cards.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const CardsSection = () => {
  const orangeCardSpecs = [
    {
      id: "Sdva",
      icon: "brain.svg",
      text: "Mental clarity",
    },
    {
      id: "ymfyj",
      icon: "brain.svg",
      text: "Mental clarity",
    },
    {
      id: "srbms",
      icon: "brain.svg",
      text: "Mental clarity",
    },
  ];

  return (
    <section className={styles.CardsSection}>
      <CustomContainer>
        <CustomSection>
          <div className={styles.head}>
            <h1>{"Elevate your snack with YAJA's Creations".toUpperCase()}</h1>
            <p>
              Yaja brings you a unique blend of healthy, flavorful beverages and
              authentic snacks. From refreshing drinks crafted with real fruit
              pulp and basil seeds and soon-to-be-launched delicious tapioca
              chips, banana chips and theater-style popcorn, Yaja offers the
              perfect balance of taste and nutrition
            </p>
          </div>

          <br />
          <div className={styles.cards}>
            <Row>
              <Col xs={12} md={6}>
                <div className={`${styles.card} ${styles.card1}`}>
                  <div>
                    <h2>TRY OUR PASSIONS BUNDLE</h2>
                    <p>
                      ₹150 per pack <small>(Pack of 6)</small>
                    </p>
                  </div>

                  {/* <Image src="/images/bottles.avif" fluid alt="bottles.avif" /> */}
                  <div className={styles.img_wrap}>
                    <Image
                      src="/images/products/papa_passion.png"
                      // fluid
                      alt="bottles.avif"
                      height={300}
                    />
                    <Image
                      src="/images/products/papa_passion.png"
                      // fluid
                      alt="bottles.avif"
                      height={350}
                    />
                    <Image
                      src="/images/products/papa_passion.png"
                      // fluid
                      alt="bottles.avif"
                      height={300}
                    />
                  </div>
                  <br />
                  <div>
                    <CustomButton variant={2}>SHOP NOW</CustomButton>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className={`${styles.card} ${styles.card2}`}>
                  <div>
                    <h2>
                      TRY OUR LYCHEE
                      <br /> BUNDLE
                    </h2>
                    <p>
                      ₹150 per pack <small>(Pack of 6)</small>
                    </p>
                  </div>

                  <div className={styles.img_wrap}>
                    <Image
                      src="/images/products/lala_lychee.png"
                      // fluid
                      alt="bottles.avif"
                      height={300}
                    />
                    <Image
                      src="/images/products/lala_lychee.png"
                      // fluid
                      alt="bottles.avif"
                      height={350}
                    />
                    <Image
                      src="/images/products/lala_lychee.png"
                      // fluid
                      alt="bottles.avif"
                      height={300}
                    />
                  </div>
                  <br />
                  <div>
                    <CustomButton variant={2}>SHOP NOW</CustomButton>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.card} ${styles.card3}`}>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className={styles.left}>
                        <div className={styles.top}>
                          <h2>NEW FLAVOUR ALERT!</h2>
                          <h2>INTRODUCING ORANGE BLAST</h2>
                          <CustomButton variant={2}>SHOP NOW</CustomButton>
                        </div>

                        <div className={styles.specs}>
                          {orangeCardSpecs.map((spec) => {
                            return (
                              <div key={spec.id} className={styles.spec}>
                                <Image
                                  src={`/assets/icons/svg/${spec.icon}`}
                                  alt="spec"
                                  width={30}
                                  height={30}
                                />
                                {spec.text}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div>
                        <Image src="/images/orange.avif" fluid alt="orange" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default CardsSection;
