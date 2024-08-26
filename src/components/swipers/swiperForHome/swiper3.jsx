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
import juces7 from "../../../assets/juces7.jpg"
import pchin from "../../../assets/pchin.png"
import barg from "../../../assets/barg.jpg"
const Swiper3 = () => {
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
            <div className='relative'>
                <img src={juces7} alt="" />
                <Button variant='contained' sx={{backgroundColor:"white", color:"#274C5B", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", padding:"10px 20px", "&:hover":{backgroundColor:"orange", color:"white"}}}>Organic Juice</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
                <img src={pchin} alt="" />
                <Button variant='contained' sx={{backgroundColor:"white", color:"#274C5B", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", padding:"10px 20px", "&:hover":{backgroundColor:"orange", color:"white"}}}>Nuts Cookis</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
                <img src={barg} alt="" />
                <Button variant='contained' sx={{backgroundColor:"white", color:"#274C5B", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", padding:"10px 20px", "&:hover":{backgroundColor:"orange", color:"white"}}}>Organic Food</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default Swiper3