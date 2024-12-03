import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./ingredients.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Image } from "react-bootstrap";

const IngredientsSection = () => {
  const ingredients = [
    {
      id: "advsd",
      name: "FINEST LYCHEES",
      img: "lychee.jpg",
      text: "At Yaja, we use only the finest lychees, handpicked for their sweet, juicy flavor, adding a refreshing and natural taste to every sip of our drinks.",
    },
    {
      id: "spfkvsp",
      name: "MALANAD'S PASSION FRUIT",
      img: "passion_fruit.jpg",
      text: "We select the finest passion fruits for Yaja, ensuring a bold, tangy flavor that’s full of nutrients, adding a refreshing tropical twist to every drink.",
    },
    {
      id: "sdvnsjd",
      name: "NATA DE COCO MADE FROM COCUONUT WATER",
      img: "nata-de-coco.jpg",
      text: "Made from fresh coconut water, the finest nata de coco adds a delightful chew and a burst of tropical flavor to every refreshing sip.",
    },
    {
      id: "wrofjwor",
      name: "ALMOND GUMS - A BODY COOLANT",
      img: "almond_resin.webp",
      text: "Almond gums, known for their cooling properties, provide a natural way to refresh and hydrate the body, making every sip a soothing and revitalizing experience.",
    },
    {
      id: "dsvdfv",
      name: "BASIL SEED",
      img: "basil seeds.jpeg",
      text: "Basil seeds offer benefits like improved digestion, hydration, weight management, rich antioxidants, anti-inflammatory properties, blood sugar regulation, and enhanced skin health, promoting overall wellness.",
    },
    {
      id: "sdvpsd",
      name: "NO ARTIFICIAL COLORS OR FLAVOURS",
      img: "no-artificial-flavors.png",
      text: "Our products contain no artificial colors or flavors, ensuring a natural taste and appearance, promoting health and wellness while prioritizing high-quality, wholesome ingredients.",
    },
  ];

  return (
    <section className={styles.IngredientsSection}>
      <CustomContainer>
        <div className={styles.top}>
          <h1>
            WE ARE SERIOUS ABOUT
            <br />
            OUR INGREDIENTS
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ducimus possimus, beatae corporis doloribus fuga at quas velit.
            Dolore, repellendus officia? Voluptates saepe alias maxime.
          </p> */}
        </div>
      </CustomContainer>
      <br />
      <br />
      <>
        <Swiper
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {ingredients.map((i, idx) => {
            return (
              <SwiperSlide key={i.id}>
                <div
                  className={`${styles.slide} ${
                    idx % 2 == 0 ? styles.even : ""
                  }`}
                >
                  <div className={styles.img}>
                    <Image
                      src={`/images/ingredients/${i.img}`}
                      alt="ingredient"
                      fluid
                    />
                  </div>
                  <div className={styles.txt}>
                    <h1>{i.name}</h1>
                    <p>{i.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </section>
  );
};

export default IngredientsSection;
