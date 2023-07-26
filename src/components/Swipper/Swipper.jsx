import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swip.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Swipper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="data:image/jpeg;base64,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" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.favpng.com/14/10/23/t-shirt-polo-shirt-clothing-ralph-lauren-corporation-png-favpng-RqRu1eLZAgTga43qW4DN3DLe6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKAMe_nwY2jyg1YPJDPAd5_SrEUDvrjLv3Q&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rw474Wp8--Csm8czQgrsfw8trv43xzTX1A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0LAFHGboTvyy4ourLZgC8pPUEwsn1EU3Aov0uoZAqqF-GlkJyvGUSiJyH5KSKmvzoGE&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rw474Wp8--Csm8czQgrsfw8trv43xzTX1A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0LAFHGboTvyy4ourLZgC8pPUEwsn1EU3Aov0uoZAqqF-GlkJyvGUSiJyH5KSKmvzoGE&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZ22NsSoykbYPBl4WF1wOBYTbwWkvantz4w&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rw474Wp8--Csm8czQgrsfw8trv43xzTX1A&usqp=CAU" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
