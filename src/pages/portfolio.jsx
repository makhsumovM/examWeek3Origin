
import portfoliobg from "../assets/portfolioimg.png"
import ForEmail from "../components/forEamail/forEmail"
import SwiperPorfolio2 from "../components/swipers/swiperForPortfolio/swiperPortfolio2"
import SwiperPorfolio1 from "../components/swipers/swiperForPortfolio/swiperProtfolio1"
const Portfolio = () => {
  return (
    <div>
      <div className='section1  bg-cover h-[450px] flex items-center justify-center my-[100px]' style={{backgroundImage:`url(${portfoliobg})`}}>
            <h1 className="text-[#274C5B] text-[52px] font-bold">Portfolio Standard</h1>
      </div>
      <div className="my-[100px]">
        <div className="py-[50px]">
          <SwiperPorfolio1/>
        </div>
        <div>
          <SwiperPorfolio2/>
        </div>
      </div>
      <div>
        <ForEmail/>
      </div>
    </div>
  )
}

export default Portfolio