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
import aboutUser1 from "../../../assets/aboutuser1.jpg"
import aboutUser2 from "../../../assets/aboutuser2.jpg"
import aboutUser3 from "../../../assets/aboutuser3.jpg"
import fbIcon from "../../../assets/Fb.png"
import twitericon from "../../../assets/twitericon.png"
const SwiperAbout1 = () => {
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
                        <div>
                            <img src={aboutUser1} alt="" className='rounded-3xl' />
                        </div>
                        <div className='py-[10px]'>
                            <h1 className='text-start w-[80%] m-auto py-2 font-bold text-[#274C5B] text-[24px]'>Giovani Bacardo</h1>
                            <h2 className='flex items-center justify-between py-2 w-[80%] m-auto text-[#7EB693]'>Farmer 
                                <span className='flex gap-4'>
                                    <img src={fbIcon} alt="" />
                                    <img src={twitericon} alt="" />
                                </span>
                            
                            </h2>
                        </div>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                        <div>
                            <img src={aboutUser2} alt="" className='rounded-3xl' />
                        </div>
                        <div className='py-[10px]'>
                            <h1 className='text-start w-[80%] m-auto py-2 font-bold text-[#274C5B] text-[24px]'>Giovani Bacardo</h1>
                            <h2 className='flex items-center justify-between py-2 w-[80%] m-auto text-[#7EB693]'>Farmer 
                                <span className='flex gap-4'>
                                    <img src={fbIcon} alt="" />
                                    <img src={twitericon} alt="" />
                                </span>
                            
                            </h2>
                        </div>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                        <div>
                            <img src={aboutUser3} alt="" className='rounded-3xl' />
                        </div>
                        <div className='py-[10px]'>
                            <h1 className='text-start w-[80%] m-auto py-2 font-bold text-[#274C5B] text-[24px]'>Giovani Bacardo</h1>
                            <h2 className='flex items-center justify-between py-2 w-[80%] m-auto text-[#7EB693]'>Farmer 
                                <span className='flex gap-4'>
                                    <img src={fbIcon} alt="" />
                                    <img src={twitericon} alt="" />
                                </span>
                            
                            </h2>
                        </div>
                    </div>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default SwiperAbout1