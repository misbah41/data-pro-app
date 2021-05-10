import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./CaseStudy.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function CaseStudy() {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'red'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'green'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'blue'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'black'}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'lightblue'}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'gray'}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'black'}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'tomato'}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:'300px', width:'300px', backgroundColor:'red'}}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
