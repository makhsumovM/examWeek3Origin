import React, { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
import { Link } from 'react-router-dom';
const SwiperTeam1 = () => {
    const api = "https://66a27283967c89168f2022db.mockapi.io/Api/v1/Users"
    const [data,setData]=useState([])
    async function get(){
        try {
            const {data} = await axios.get(api)
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        get()
    },[])
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
        {data.map((el)=>{
            return <SwiperSlide key={el.id}>
            <Link to={`/${el.id}`}>
            <div>
                <div>
                    <img src={aboutUser1} alt="" className='rounded-3xl' />
                </div>
                <div className='py-[10px]'>
                    <h1 className='text-start w-[80%] m-auto py-2 font-bold text-[#274C5B] text-[24px]'>{el.Name}</h1>
                    <h2 className='flex items-center justify-between py-2 w-[80%] m-auto text-[#7EB693]'>{el.JobCategory}
                        <span className='flex gap-4'>
                            <img src={fbIcon} alt="" />
                            <img src={twitericon} alt="" />
                        </span>
                    
                    </h2>
                </div>
            </div>
            </Link>
  </SwiperSlide>
        })}
          
        </Swiper>
      </>
  )
}

export default SwiperTeam1