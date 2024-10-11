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
      img: "/assets/user.avif",

      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis, accusamus! ",
      name: "Andrew Power",
    },
    {
      id: "padspsd",
      img: "/assets/user.avif",
      color: "#ff3b47",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis, accusamus!",
      name: "Andrew Power",
    },
    {
      id: "jdvnsd",
      img: "/assets/user.avif",
      color: "#ff3b47",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis, accusamus!",
      name: "Andrew Power",
    },
    {
      id: "davkosdo",
      img: "/assets/user.avif",
      color: "#ff3b47",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis, accusamus!",
      name: "Andrew Power",
    },
    {
      id: "sdlvlsdmv",
      img: "/assets/user.avif",
      color: "#ff3b47",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis, accusamus!",
      name: "Andrew Power",
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
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            porro perspiciatis maiores quasi reprehenderit architecto
            consectetur corporis ratione voluptatem dignissimos.
          </p> */}
        </div>
      </CustomContainer>
      <br />
      <br />
      {/* <>
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
                    <Image src="/assets/zebra_bg.jpg" alt="bg" fluid/>
                  </div>
                  <div className={styles.img}>
                    <Image src={i.img} height={110} width={110} alt="user" />
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
      </> */}
    </section>
  );
};

export default TestimonialsSection;
