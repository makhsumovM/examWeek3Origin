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
import brokoli from "../../../assets/brokoli.png"
import star3 from "../../../assets/Star 3.png"
import banan from "../../../assets/banan.png"
import olicha from "../../../assets/olicha.png"
import pista from "../../../assets/pista.png"

const ShopSwiper1 = () => {
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
          <SwiperSlide>
            <div className=''>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Vegetable</Button></div>
                <div><img src={brokoli} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B]'>Calabrese Broccoli</h1>
                <hr className='py-4' />
                <p className='flex items-center justify-between'>
                <span className='flex gap-2'>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[50px] gap-2'>
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                    </span>
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=''>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Fresh</Button></div>
                <div><img src={pista} alt=""  className=''/></div>
                <h1 className='text-start font-bold text-[#274C5B]'>Calabrese Broccoli</h1>
                <hr className='py-4' />
                <p className='flex items-center justify-between'>
                <span className='flex gap-2'>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[50px] gap-2'>
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                    </span>
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=''>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Milltes</Button></div>
                <div><img src={brokoli} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B]'>Calabrese Broccoli</h1>
                <hr className='py-4' />
                <p className='flex items-center justify-between'>
                <span className='flex gap-2'>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[50px] gap-2'>
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                    </span>
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=''>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Vegetable</Button></div>
                <div><img src={olicha} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B]'>Calabrese Broccoli</h1>
                <hr className='py-4' />
                <p className='flex items-center justify-between'>
                <span className='flex gap-2'>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[50px] gap-2'>
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                        <img src={star3} alt="" />
                    </span>
                </p>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
  )
}

export default ShopSwiper1