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
      name: "VITAMIN C",
      img: "vitamin.avif",
    },
    {
      id: "skfvks",
      name: "VITAMIN C",
      img: "vitamin.avif",
    },
    {
      id: "spfkvsp",
      name: "VITAMIN C",
      img: "vitamin.avif",
    },
    {
      id: "wrofjwor",
      name: "VITAMIN C",
      img: "vitamin.avif",
    },
    {
      id: "dsvdfv",
      name: "VITAMIN C",
      img: "vitamin.avif",
    },
    {
      id: "sdvpsd",
      name: "VITAMIN C",
      img: "vitamin.avif",
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            porro perspiciatis maiores quasi reprehenderit architecto
            consectetur corporis ratione voluptatem dignissimos.
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
              spaceBetween: 50,
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
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut ipsa neque nemo reprehenderit commodi praesentium ut
                      accusantium repellat aliquid saepe.
                    </p> */}
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
