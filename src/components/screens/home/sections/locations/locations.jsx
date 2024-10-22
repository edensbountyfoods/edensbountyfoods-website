import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./locations.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";

const LocationsSection = () => {
  const locations = [
    {
      id: "sfnvs",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
    },
    {
      id: "aelmglae",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
    },
    {
      id: "ergslmsef",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
    },
    {
      id: "aeofoaeo",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
    },
  ];

  return (
    <section className={styles.LocationsSection}>
      <CustomContainer>
        <CustomSection>
          <div className={styles.head}>
            <Image
              src="/assets/icons/pin.webp"
              alt="pin"
              width={65}
              height={65}
            />
            <h1>YAJA LOCATIONS</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium expedita beatae ad doloribus, cum distinctio ex
              delectus deleniti perspiciatis excepturi maxime exercitationem
            </p>
          </div>

          <br />

          <div className={styles.locations}>
            <Row>
              {locations.map((loc) => {
                return (
                  <Col key={loc.id} xs={6}>
                    <div
                      style={{
                        backgroundColor: loc.color,
                      }}
                      className={styles.loc}
                    >
                      <Image
                        src={`/images/${loc.logo}`}
                        alt="logo"
                        width={110}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className={styles.btn}>
            <CustomButton variant={2}>FIND A LOCATION</CustomButton>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default LocationsSection;
