import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import ser1 from "../../../assets/ser1.jpeg";
import ser2 from "../../../assets/ser2.jpeg";
import ser3 from "../../../assets/ser3.jpeg";
import ser4 from "../../../assets/ser4.jpeg";

const images = [ser1, ser2, ser3, ser4, ser1, ser2, ser3];

// import "./ServicesSlider.css";

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <h1 className="title">Services</h1>
      <div className="services-section">
        <div className="slider-wrapper">
          <button ref={prevRef} className="nav-button left">
            &#10094;
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              // Timeout allows refs to attach before swiper init
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy(); // Re-initialize navigation
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   601: {
            //     slidesPerView: 2,
            //   },
            //   900: {
            //     slidesPerView: 3,
            //   },
            //   1200: {
            //     slidesPerView: 4,
            //   },
            // }}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Service ${index}`}
                  className="slider-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button ref={nextRef} className="nav-button right">
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
