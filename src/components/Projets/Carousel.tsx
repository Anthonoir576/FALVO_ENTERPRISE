
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React             from "react";
import { Navigation, 
         Pagination,
         Scrollbar,
         A11y }          from "swiper";

import { Swiper,
         SwiperSlide }   from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------------- Carousel -------------------------
//* ########################################################
const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export default Carousel;
//~ --------------------------------------------------------
//~ ########################################################