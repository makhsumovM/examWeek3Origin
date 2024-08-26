
import { Button } from "@mui/material"
import section1Bg from "../assets/bgSection1Home.png"
import section2img1 from "../assets/hmsection2.png"
import section2img2 from "../assets/hmsection3.png"
import section3img1 from "../assets/s3homePhoto.png"
import setion3icon from "../assets/iconhomS3.png"
import Swiper1 from "../components/swipers/swiperForHome/swiper1"
import Swiper2 from "../components/swipers/swiperForHome/swiper2"
import s5bg from ".././assets/homeS5Bg.png"
import avatarS5 from "../assets/avatar.jpg"
import starS5 from "../assets/Star 5.png"
import krug from "../assets/krug.png"
import brokoli from "../assets/brokoli.png"
import pioz from "../assets/Pioz.png"
import section7Img from "../assets/homePhotoSection7.png"
import Swiper3 from "../components/swipers/swiperForHome/swiper3"
import bargho from "../assets/bargho.png"
import PersonIcon from '@mui/icons-material/Person';
import pomidor from "../assets/Pomidor.png"
import ForEmail from "../components/forEamail/forEmail"
import { useTranslation } from "react-i18next"


const Home = () => {
  const{t} = useTranslation( )
  return (
  <div>
    <div className="h-[100vh] bg-cover bg-center flex items-center justify-center md:justify-start " style={{backgroundImage:`url(${section1Bg})`}}>
        <div className="text-center md:text-start md:w-[70%] md:m-auto">
          <p className=" text-[#68A47F] font-serif xl:text-[32px]">{t("HomePage.section1.p")}</p>
          <h1 className=" text-[#274C5B] text-[32px] py-4 md:w-[40%]  xl:text-[64px]">{t("HomePage.section1.h1")} </h1>
          <Button variant="contained" size="large" style={{backgroundColor:"#EFD372", color:"#274C5B"}}>Explore Now</Button>
        </div>
    </div>
      <div className="xl:flex xl:py-[200px] xl:justify-center xl:gap-20 m:grid m:grid-cols-[40%,40%] m:py-10 justify-center gap-5">
        <img src={section2img1} alt="section2img1" className=""/>
        <img src={section2img2} alt="section2img2" className=""/>
      </div>
      <div className="section3 py-10 grid lg:grid-cols-[45%,45%] items-center m:grid-cols-1">
        <div>
          <img src={section3img1} alt="" />
        </div>
        <div>
          <h2 className=" text-[#7EB693] font-bold sm:px-4  xl:text-[32px]">{t("HomePage.section3.h2")}</h2>
          <h1 className="text-[#274C5B] font-bold sm:px-4 xl:text-[64px]">{t("HomePage.section3.h1")}</h1>
          <p className="text-[#274C5B] m:text-center py-4 xl:text-[24px] xl:text-start">{t("HomePage.section3.p")}</p>
          <div className="flex items-center py-5">
            <div>
              <img src={setion3icon} alt="" />
            </div>
            <div>
              <h3 className="text-[#274C5B] font-bold">{t("HomePage.section3.h3")}</h3>
              <p className="text-[#274C5B]">{t("HomePage.section3.p2")}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src={setion3icon} alt="" />
            </div>
            <div>
              <h3 className="text-[#274C5B] font-bold">{t("HomePage.section3.h3")}</h3>
              <p className="text-[#274C5B]">{t("HomePage.section3.p2")}</p>
            </div>
          </div>
          <div className="m:p-8 m:text-center xl:text-start">
            <Button variant="contained" size="large" sx={{backgroundColor:"#274C5B"}}>Shop Now</Button>
          </div>
        </div>

      </div>
      <div className="section4 my-[100px]">
        <div className="py-8">          
          <h2 className="text-center text-[#7EB693] font-serif text-[32px] ">{t("HomePage.section4.h2")} </h2>
          <h1 className="text-center text-[#274C5B] font-bold text-[54px]">{t("HomePage.section4.h1")}</h1>
        </div>
        <div>
          <div className="my-[100px]">
            <Swiper1 />
          </div>
          <div className="my-[100px]">
            <Swiper2/>
          </div>
          <div className="text-center">
            <Button variant="contained" size="large">Load More</Button>
          </div>
        </div>
      </div>
      <div className="section5 h-[100vhs]" style={{backgroundImage:`url(${s5bg})`}}>
        <div className=" w-[60%] py-[5%] m-[auto]">
          <h2 className="text-center text-[#7EB693] text-[32px]">{t("HomePage.section5.h2")}</h2>
          <h1 className="text-center text-[#274C5B] xl:text-[54px] m:text-[24px]">{t("HomePage.section5.h1")}</h1>
          <div>
            <div className="avatar flex justify-center py-4">
              <img src={avatarS5} alt="" className="rounded-full" />
            </div>
            <div className="flex justify-center">
              <img src={starS5} alt="" />
              <img src={starS5} alt="" />
              <img src={starS5} alt="" />
              <img src={starS5} alt="" />
              <img src={starS5} alt="" />
            </div>
          </div>
          <p className="text-[grey] py-4 text-center xl:w-[60%] m-auto w-[100%]">{t("HomePage.section5.p")} </p>
          <h2 className="text-center text-[32px] text-[#274C5B]">Sara Taylor</h2>
          <p className="text-center">Consumer</p>
        </div>
        <hr className="w-[60%] m-auto" />
        <div className="grid grid-cols-[20%,20%,20%,20%] justify-evenly py-[50px] w-[70%] m-auto"  >
          <div>
            <img src={krug} alt="" />
          </div>
          <div>
            <img src={krug} alt="" />
          </div>
          <div>
            <img src={krug} alt="" />
          </div>
          <div>
            <img src={krug} alt="" />
          </div>
        </div>

      </div>
      <div className="section6 bg-[#274C5B] py-10">
        <p className="w-[70%] m-auto text-[32px] text-[#7EB693]">Offer</p>
        <h1 className="w-[70%] m-auto flex items-center justify-between text-[white] font-bold xl:text-[46px]">{t("HomePage.section6.h1")} <Button variant="contained" size="small" sx={{backgroundColor:"#EFD372"}}>View All Product</Button></h1>
        <div className="grid xl:grid-cols-[22%,22%,22%,22%] w-[70%] m-auto justify-between py-[100px] m:grid-cols-1 m:gap-4  lg:grid-cols-2">
        <div className='bg-white p-4'>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Milltes</Button></div>
                <div><img src={brokoli} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B] pb-4'>Calabrese Broccoli</h1>
                <hr  />
                <p className='flex  justify-start xl:gap-[30%] py-4 m:gap-[12%]'>
                <span className='flex gap-[5px] justify-start '>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[20px] '>
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                    </span>
                </p>
        </div>
        <div className='bg-white p-4'>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Milltes</Button></div>
                <div><img src={brokoli} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B] pb-4'>Calabrese Broccoli</h1>
                <hr  />
                <p className='flex  justify-start gap-[30%] py-4 m:gap-[12%]'>
                <span className='flex gap-[5px] justify-start '>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[20px] '>
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                    </span>
                </p>
       </div>
       <div className='bg-white p-4'>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Milltes</Button></div>
                <div><img src={brokoli} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B] pb-4'>Calabrese Broccoli</h1>
                <hr  />
                <p className='flex  justify-start gap-[30%] py-4 m:gap-[12%]'>
                <span className='flex gap-[5px] justify-start '>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[20px] '>
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                    </span>
                </p>
       </div>
       <div className='bg-white p-4'>
                <div className='text-start'><Button variant='contained' sx={{backgroundColor:"#274C5B"}}>Milltes</Button></div>
                <div><img src={pioz} alt="" /></div>
                <h1 className='text-start font-bold text-[#274C5B] pb-4'>Calabrese Broccoli</h1>
                <hr  />
                <p className='flex  justify-start gap-[30%] py-4 m:gap-[12%]'>
                <span className='flex gap-[5px] justify-start '>
                    <span className='text-[#B8B8B8]'>$20.00</span>
                    <span className='font-bold text-[#274C5B]'>$13.00</span>
                </span>
                    <span className='flex w-[20px] '>
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                        <img src={starS5} alt="" />
                    </span>
                </p>
       </div>
       
        </div>
      </div>
      <div className="section7 relative">
          <div className="lg:flex lg:items-center ">
            <div>
              <img src={section7Img} alt="" />
            </div>
            <div className="p-10 xl:rounded-[20px] bg-[white] lg:absolute lg:top-[20%] lg:left-[50%] xl:left-[48%]">
              <h2 className="text-[#7EB693] lg:text-[32px] font-thin">{t("HomePage.section7.h2")}</h2>
              <h1 className="text-[#274C5B] lg:text-[54px] xl:w-[60%]">{t("HomePage.section7.h1")}</h1>
              <div className="p-4">
                <h2 className="text-[#274C5B] font-bold lg:text-[24px]">{t("HomePage.section7.h2_2")}</h2>
                <p className="text-[grey] xl:w-[60%]">{t("HomePage.section7.p")}</p>
              </div>
              <div className="p-4">
                <h2 className="text-[#274C5B] font-bold lg:text-[24px]">{t("HomePage.section7.h2_2")}</h2>
                <p className="text-[grey] xl:w-[60%]">{t("HomePage.section7.p")}</p>
              </div>
              <div className="p-4">
                <h2 className="text-[#274C5B] font-bold lg:text-[24px]">{t("HomePage.section7.h2_2")}</h2>
                <p className="text-[grey] xl:w-[60%]">{t("HomePage.section7.p")}</p>
              </div>
            </div>
          </div>
      </div>
      <div className="section8 my-[100px]">
          <div className="p-[50px]">
            <Swiper3/>
          </div>
      </div>
      <div className="section9 relative">
         <p className="lg:text-[32px] p-5">{t("HomePage.section9.p")}</p>
         <h2 className="flex items-center  font-bold text-[#274C5B] lg:p-5 lg:text-[32px] lg:justify-between">{t("HomePage.section9.h2")} <span><Button variant="contained" size="small">More News</Button></span></h2>
         <div className="relative grid lg:grid-cols-[40%,40%] lg:justify-around items-center">
            <div className="relative flex flex-col items-center">
              <img src={bargho} alt="" />
              <div className="p-5 bg-white lg:absolute lg:top-[50%]  rounded-[20px] xl:top-[75%] xl:left-[18%] border ">
                <p className="flex items-center"><PersonIcon/>By Rachi Card</p>
                <h1 className="font-bold py-2">The Benefits of Vitamin D & How to Get It</h1>
                <p className="pb-4 py-2">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <Button variant="contained">Read More</Button>
              </div>
            </div>
            <div className="relative  flex flex-col items-center">
              <img src={pomidor} alt="" />
              <div className="p-5 bg-white lg:absolute lg:top-[50%]  rounded-[20px] xl:top-[75%] xl:left-[18%] border  ">
                <p className="flex items-center"><PersonIcon/>By Rachi Card</p>
                <h1 className="font-bold py-2">The Benefits of Vitamin D & How to Get It</h1>
                <p className="pb-4 py-2">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <Button variant="contained">Read More</Button>
              </div>
            </div>
         </div>
      </div>
        <ForEmail/>
  </div>
  )
}

export default Home