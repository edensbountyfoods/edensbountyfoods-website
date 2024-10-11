import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./about.module.scss";
import { Image } from "react-bootstrap";
import { SpecsBottle } from "../home/sections/specs/specs";

const Section = ({ children, head }) => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>{head}</h2>
        {children}
      </div>
      <div className={styles.right}>
        <Image src="/assets/bottle.avif" alt="logo_main" height={500} />
      </div>
    </section>
  );
};

const AboutScreen = () => {
  return (
    <div className={styles.AboutScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          <h1>ABOUT US</h1>
          <br />
          <br />
          <Section head="YAJA : A Brand Story">
            <p>
              In the bustling aisles of a local supermarket, Ajay, a young and
              passionate food technologist, witnessed a scene that would forever
              change his path. He observed a middle-class family standing in
              front of a shelf of beverages, longing for a healthy drink but
              hesitant due to the high price. This moment struck a deep chord
              with Ajay, who understood that access to nutritious options should
              not be a luxury. Determined to bridge this gap, he envisioned
              creating a product that would combine quality ingredients, health
              benefits, and affordability, making it accessible to everyone.
              Thus, the concept of Yaja was born—a brand committed to providing
              beverages that nourish the body without burdening the wallet.
            </p>
            <br />
            <p>
              Backed by <span>Edens Bounty Foods LLP</span>, Yaja quickly evolved
              into more than just a drink; it became a mission. Ajay, drawing on
              his expertise in food technology, developed a range of beverages
              crafted from natural ingredients like fruit pulp, basil seeds, and
              fermented coconut jelly, all without artificial colors or flavors.
              The brand&apos;s dedication to sustainability is reflected in its
              innovative packaging, which reduces plastic usage by 75% through
              stand-up pouches. Yaja is more than a product—it’s a promise to
              make wholesome, affordable beverages available to everyone,
              proving that healthy living can be both accessible and enjoyable.
            </p>
          </Section>
          <Section head="Our Vision:">
            <p>
              Yaja is not just a beverage; it’s an experience. Carefully crafted
              with the perfect blend of water, sugar, fruit pulp, basil seeds,
              and fermented coconut jelly (nata de coco), Yaja delivers a unique
              &quot;feel and drink&quot; sensation that appeals to all age
              groups. Each sip is designed to be both refreshing and satisfying,
              offering a delightful combination of flavors and textures that
              make it stand out from ordinary drinks.
            </p>
            <br />
            <p>
              We believe in providing more than just hydration; Yaja offers a
              fun and enjoyable drinking experience that also supports your
              well-being. By using only natural ingredients and avoiding
              artificial additives, Yaja ensures that every bottle is as
              wholesome as it is enjoyable, making it the perfect choice for
              those seeking both taste and health in their daily routine.
            </p>
          </Section>
          <Section head="Health and Wellness:">
            <p>
              At Yaja, we harness the natural benefits of basil seeds and
              fermented coconut jelly (nata de coco) to create beverages that
              not only taste great but also promote well-being. Rich in
              essential nutrients, basil seeds are known for their ability to
              aid digestion and enhance hydration, while fermented coconut jelly
              adds a refreshing texture and contributes to gut health. These
              ingredients work in harmony to make Yaja more than just a
              drink—each bottle is a step towards better health.
            </p>
            <br />
            <p>
              Behind every sip of Yaja is the expertise of our dedicated team of
              food technologists, who meticulously combine the wisdom of nature
              with modern nutrition science. Our mission is to make healthy
              living easy and enjoyable, offering beverages that contribute to
              improved digestion, hydration, and overall wellness. Yaja is
              designed for those who seek a healthier lifestyle without
              compromising on taste or convenience.
            </p>
          </Section>
          <Section head="Commitment to Quality and Simplicity:">
            <p>
              Our production process is straightforward yet meticulous, designed
              to preserve the essential nutrients in every pouch of Yaja. We
              carefully select natural ingredients and ensure that their
              goodness is maintained throughout production. By avoiding
              artificial colors and flavors, we embrace the purity of nature,
              delivering beverages that are as wholesome as they are delicious.
              Each step in our process reflects our dedication to providing you
              with a drink that supports your well-being.
            </p>
            <br />
            <p>
              Yaja is crafted with the utmost love and care, a testament to our
              unwavering commitment to your health and satisfaction. From the
              selection of ingredients to the final product, every detail is
              thoughtfully considered to ensure that you experience the best in
              taste, nutrition, and quality. With Yaja, you can enjoy a
              refreshing beverage that nourishes your body and delights your
              senses.
            </p>
          </Section>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutScreen;
