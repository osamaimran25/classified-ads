import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper/core";

// install Swiper's Thumbs component
SwiperCore.use([Thumbs]);

const ProductSlider = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper thumbs={{ swiper: thumbsSwiper }}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      {/* It is also required to set watchSlidesVisibility and watchSlidesProgress props */}
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <div style={{ backgroundColor: "red" }}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <div style={{ backgroundColor: "red" }}>Slide 1</div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};
export default ProductSlider;
