import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../../App.css"
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';
;
import chu from "../../../assets/chu.png"
import anor from "../../../assets/anor.png"
import priprava from "../../../assets/priprava.jpg"
import xas from "../../../assets/xas.png"
const SwiperAbout2 = () => {
    return (
        <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
           
            1000: {
                slidesPerView: 4, // Показывать четыре слайда
                spaceBetween: 30,
              },
          }}
        >
          <SwiperSlide className='bg-[#274C5B]'>
            <div className='bg-[#274C5B]'>
                <div>
                    <img src={anor} alt="" />
                </div>
                <h1 className='py-[20px] bg-[#274C5B] text-[white]'>Fruits</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-[#274C5B]'>
            <div className='bg-[#274C5B]'>
                <div>
                    <img src={anor} alt="" />
                </div>
                <h1 className='py-[20px] bg-[#274C5B] text-[white]'>Fruits</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-[#274C5B]'>
            <div className='bg-[#274C5B]'>
                <div>
                    <img src={chu} alt="" />
                </div>
                <h1 className='py-[20px] bg-[#274C5B] text-[white]'>Fruits</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-[#274C5B]'>
            <div className='bg-[#274C5B]'>
                <div>
                    <img src={priprava} alt="" />
                </div>
                <h1 className='py-[20px] bg-[#274C5B] text-[white]'>Fruits</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default SwiperAbout2