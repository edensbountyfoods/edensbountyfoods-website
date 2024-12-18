import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./locations.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { GeoAlt, GeoAltFill } from "react-bootstrap-icons";

const LocationsSection = () => {
  const locations = [
    {
      id: "sfnvs",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
      locName: "Chennai",
    },
    {
      id: "aelmglae",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
      locName: "Kanyakuamri",
    },
    {
      id: "ergslmsef",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
      locName: "Nagarkovil",
    },
    {
      id: "aeofoaeo",
      logo: "dalware_logo.svg",
      color: "#c4ffcc",
      locName: "Kanchipuram",
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
              As we grow, we aim to reach every part of India and beyond,
              ensuring that everyone can experience Yaja’s unique blend of
              taste, health, and sustainability. Join us on our journey as we
              bring nature’s best to your doorstep!
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
                      <GeoAltFill />
                      <h4>{loc.locName}</h4>

                      {/* <Image
                        src={`/images/${loc.logo}`}
                        alt="logo"
                        width={110}
                      /> */}
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
