import React from "react";
import styles from "./testimonials.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Image } from "react-bootstrap";

const TestimonialsSection = () => {
  const colors = ["#4b8497", "#ff8d27", "#ff3b47", "#c9a427", "#69943c"];

  const testimonials = [
    {
      id: "advsd",
      img: "/assets/user_male.png",
      text: "Yaja's drinks are a game-changer! The flavor combinations are so refreshing, and I love the basil seeds. It's like drinking something fun and healthy at the same time.",
      name: "Rahul T",
    },
    {
      id: "padspsd",
      img: "/assets/user_female.png",
      color: "#ff3b47",
      text: "I’ve tried a lot of drinks, but nothing like Yaja. The coconut jelly adds such a unique texture, and it’s so satisfying. I feel good about what I’m drinking!",
      name: "Neha P",
    },
    {
      id: "jdvnsd",
      img: "/assets/user_male.png",

      color: "#ff3b47",
      text: "The best part about Yaja’s beverages is knowing they’re all-natural. I can enjoy them guilt-free, and the taste is just so refreshing. Definitely my go-to drink now.",
      name: "Suman D",
    },
    {
      id: "davkosdo",
      img: "/assets/user_female.png",
      color: "#ff3b47",
      text: "I’m always looking for healthier drink options, and Yaja has hit the mark! It’s light, flavorful, and packed with nutrients. My kids love it too!",
      name: "Priya L",
    },
    {
      id: "sdlvlsdmv",
      img: "/assets/user_female.png",

      color: "#ff3b47",
      text: "I love the texture of the fermented coconut jelly in Yaja’s drinks! It’s something different from anything I’ve had before, and the flavors are so fresh. Highly recommend!",
      name: "Arjun S",
    },
  ];

  return (
    <section className={styles.TestimonialsSection}>
      <CustomContainer>
        <div className={styles.top}>
          <h1>
            REAL REVIEWS, REAL
            <br />
            EXPERIENCES
          </h1>
          <p>
            At Yaja, everything we create is inspired by real stories and real
            people
          </p>
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
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((i, idx) => {
            return (
              <SwiperSlide key={i.id}>
                <div
                  className={styles.testimonial}
                  style={{
                    backgroundColor: colors[idx % colors.length],
                  }}
                >
                  <div className={styles.bg}>
                    <Image src="/assets/zebra_bg.jpg" alt="bg" fluid />
                  </div>
                  <div className={styles.img}>
                    <Image src={i.img} height={85} width={85} alt="user" />
                  </div>
                  <div className={styles.text}>
                    <p>&quot;</p>
                    {i.text}
                    {i.text}
                  </div>
                  <div className={styles.name}>{i.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </section>
  );
};

export default TestimonialsSection;
