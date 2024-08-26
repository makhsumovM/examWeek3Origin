

import teamS1bg from "../assets/teamS1bg.png"
import ForEmail from "../components/forEamail/forEmail"
import SwiperTeam1 from "../components/swipers/swiperForTeam/swiperTeam1"
import SwiperTeam2 from "../components/swipers/swiperForTeam/swiperTeam2"

const Team = () => {
  return (
    <div>
      <div className='section1  bg-cover h-[450px] flex items-center justify-center my-[100px]' style={{backgroundImage:`url(${teamS1bg})`}}>
            <h1 className="text-[#274C5B] text-[52px] font-bold">Our Team</h1>
      </div>
      <div>
        <h2 className="text-center text-[32px] text-[#7EB693]">Team</h2>
        <h1 className="text-center text-[48px] text-[#274C5B]">Our Organic Experts</h1>
        <p className="text-center lg:w-[50%] lg:m-auto lg:text-[18px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className="py-[100px]">
          <div className="py-[20px]">
            <SwiperTeam1/>
          </div>
          <div className="py-[20px]">
            <SwiperTeam2/>
          </div>
        </div>
      </div>
        <div>
          <ForEmail/>
        </div>
    </div>
  )
}

export default Team