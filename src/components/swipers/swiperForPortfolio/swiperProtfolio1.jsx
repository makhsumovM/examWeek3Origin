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
import ps1 from "../../../assets/ps1.png"
import ps2 from "../../../assets/ps2.png"
import ps3 from "../../../assets/ps3.png"




const SwiperPorfolio1 = () => {
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
                slidesPerView: 3, // Показывать четыре слайда
                spaceBetween: 30,
              },
          }}
        >
          <SwiperSlide>
                <div>
                    <div><img src={ps1} alt=""  className='rounded-3xl'/></div>
                    <div className='px-4'>
                        <h1 className='text-start font-bold text-[#274C5B] py-2'>Green & Tasty
                        Lemon</h1>
                        <p className='text-start'>Fruits</p>
                    </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>
                 <div>
                    <div><img src={ps2} alt=""  className='rounded-3xl'/></div>
                    <div className='px-4'>
                        <h1 className='text-start font-bold text-[#274C5B] py-2'>Organic Carrot</h1>
                        <p className='text-start'>Fruits</p>
                    </div>
                </div>
          </SwiperSlide>

          <SwiperSlide>
          <div>
                    <div><img src={ps3} alt=""  className='rounded-3xl'/></div>
                    <div className='px-4'>
                        <h1 className='text-start font-bold text-[#274C5B] py-2'>Organic Betel Leaf</h1>
                        <p className='text-start'>Fruits</p>
                    </div>
                </div>
          </SwiperSlide>

        </Swiper>
      </>
  )
}

export default SwiperPorfolio1