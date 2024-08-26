
import { t } from "i18next"
import section1Img from "../assets/aboutS1img.png"
import aboutSection2Img from "../assets/aboutSection2Img.png"
import aboutSection2Icon from "../assets/aboutSection2Icon.png"
import { Button } from "@mui/material"
import aboutSection3Img from "../assets/aboutsection3Img.jpg"
import abouts3icon from "../assets/abouts3Icon.png"
import SwiperAbout1 from "../components/swipers/swiperForAbout/swiperAbout1"
import SwiperAbout2 from "../components/swipers/swiperForAbout/swiperAbout2"
import ForEmail from "../components/forEamail/forEmail"
const About = () => {
  return (
    <div>
      <div className='section1  bg-cover h-[450px] flex items-center justify-center my-[100px]' style={{backgroundImage:`url(${section1Img})`}}>
            <h1 className="text-[#274C5B] text-[52px] font-bold">About Us</h1>
      </div>
      <div className="section2 py-10 grid lg:grid-cols-[45%,45%] items-center m:grid-cols-1">
        <div>
          <img src={aboutSection2Img} alt="" />
        </div>
        <div>
          <h2 className=" text-[#7EB693] font-bold sm:px-4  xl:text-[32px]">{t("HomePage.section3.h2")}</h2>
          <h1 className="text-[#274C5B] font-bold sm:px-4 xl:text-[64px]">{t("HomePage.section3.h1")}</h1>
          <p className="text-[#274C5B] m:text-center py-4 xl:text-[24px] xl:text-start">{t("HomePage.section3.p")}</p>
          <div className="flex items-center py-5">
            <div>
              <img src={aboutSection2Icon} alt="" />
            </div>
            <div>
              <h3 className="text-[#274C5B] font-bold">{t("HomePage.section3.h3")}</h3>
              <p className="text-[#274C5B]">{t("HomePage.section3.p2")}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src={aboutSection2Icon} alt="" />
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
      <div className="section3 ">
        <div className="flex flex-col md:items-center gap-2 xl:flex-row 2xl:justify-center">
          <div>
            <h2 className="text-[#7EB693] text-center text-[24px] sm:text-start sm:w-[90%] sm:m-auto 2xl:text-[32px] 2xl:w-[60%]">Why Choose us?</h2>
            <h1 className="text-[#274C5B] font-bold text-center text-[32px] sm:text-start sm:w-[90%] sm:m-auto 2xl:text-[54px] 2xl:w-[60%]">We do not buy from the
            open market & traders.</h1>
            <p className="py-4 text-center sm:text-start sm:w-[90%] sm:m-auto 2xl:w-[60%]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
              <p className="p-4 bg-[#ECECEC] rounded-[20px] text-center 2xl:w-[40%] m-auto">100% Natural Product</p>
           
            <p className="py-4 sm:text-start sm:w-[90%] sm:m-auto 2xl:w-[60%] 2xl:py-[20px]">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
              <p className="p-4 bg-[#ECECEC] rounded-[20px] text-center 2xl:w-[40%] m-auto">100% Natural Product</p>
            <p className="py-4 sm:text-start sm:w-[90%] sm:m-auto 2xl:w-[60%]">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
          </div>
          <div>
            <img src={aboutSection3Img} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-[250px] place-items-center justify-center gap-3 lg:grid-cols-[repeat(4,250px)] md:grid-cols-2 sm:grid-cols-2 py-[100px] ">
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <img src={abouts3icon} alt="" />
            <h1>Return Policy</h1>
            <p className="text-center">Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-2 ">
            <img src={abouts3icon} alt="" />
            <h1>Return Policy</h1>
            <p className="text-center">Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <img src={abouts3icon} alt="" />
            <h1>Return Policy</h1>
            <p className="text-center">Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <img src={abouts3icon} alt="" />
            <h1>Return Policy</h1>
            <p className="text-center">Simply dummy text of the printintypesetting industry.</p>
          </div>
        </div>
      </div>
      <div className="section4">
            <h2 className="text-center text-[24px] text-[#7EB693]">Team</h2>
            <h1 className="text-center text-[32px] py-2 text-[#274C5B]">Our Organic Experts</h1>
            <p  className="text-center lg:w-[50%] m-auto text-[18px] ">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

            <div className="py-[100px]">
              <SwiperAbout1/>
            </div>

      </div>
      <div className="section5 bg-[#274C5B] py-[100px]">
            <h2 className="text-center text-[32px] py-3 text-[#7EB693]">About Us</h2>
            <h1 className="text-[white] text-center text-[48px] pb-[50px]">What We Offer for You</h1>
            <div>
              <SwiperAbout2/>
            </div>
      </div>

      <div>
        <ForEmail/>
      </div>
    </div>
  )
}

export default About