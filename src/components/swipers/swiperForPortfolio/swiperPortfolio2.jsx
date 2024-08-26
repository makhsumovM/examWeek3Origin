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
import ps4 from "../../../assets/ps4.png"
import ps5 from "../../../assets/ps5.png"
import ps6 from "../../../assets/ps6.png"




const SwiperPorfolio2 = () => {
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
                    <div><img src={ps4} alt=""  className='rounded-3xl'/></div>
                    <div className='px-4'>
                        <h1 className='text-start font-bold text-[#274C5B] py-2'>Green & Tasty
                        Lemon</h1>
                        <p className='text-start'>Fruits</p>
                    </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>
                 <div>
                    <div><img src={ps5} alt=""  className='rounded-3xl'/></div>
                    <div className='px-4'>
                        <h1 className='text-start font-bold text-[#274C5B] py-2'>Organic Carrot</h1>
                        <p className='text-start'>Fruits</p>
                    </div>
                </div>
          </SwiperSlide>

          <SwiperSlide>
          <div>
                    <div><img src={ps5} alt=""  className='rounded-3xl'/></div>
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

export default SwiperPorfolio2