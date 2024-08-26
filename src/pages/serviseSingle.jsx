
import servisebg from "../assets/BackgroundServiseS1.jpg"
import shdgor from "../assets/shdgor.png"
import singleS2img1 from "../assets/singleS2img1.png"
import singleS2img2 from "../assets/singleS2img2.png"
import ForEmail from "../components/forEamail/forEmail"
const ServiseSingle = () => {
  return (
    <div>
      <div className='section1  bg-cover h-[450px] flex items-center justify-center my-[100px]' style={{backgroundImage:`url(${servisebg})`}}>
            <h1 className="text-[#274C5B] text-[52px] font-bold text-center">Quality Standard</h1>
      </div>
      <div className="w-fit m-auto">
        <img src={shdgor} alt="" />
      </div>
      <div className="xl:py-7">
        <h1 className="text-center text-[32px] py-2 font-bold text-[#274C5B] md:w-[70%] md:m-auto md:text-start  xl:text-[48px] xl:w-[60%]">Organic Store Services</h1>
        <p className="text-center py-4 md:w-[70%] md:m-auto md:text-start xl:text-[20px] xl:w-[60%]">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        <p className="text-center py-4 md:w-[70%] md:m-auto md:text-start xl:text-[20px] xl:w-[60%]">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
      </div>
      <div className="py-[50px] lg:flex lg:justify-evenly xl:w-[65%] xl:m-auto ">
        <div className="sm:flex sm:justify-center">
          <img src={singleS2img1} alt="" />
        </div>
        <div className="bg-[#F9F8F8] p-8 lg:w-[50%] lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-center text-[32px] text-[#274C5B] lg:text-start">Why Organic</h1>
          <p className="text-center lg:text-start">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
        </div>
      </div>
      <div className="py-[50px] lg:flex lg:justify-evenly xl:w-[65%] xl:m-auto ">
        <div className="bg-[#F9F8F8] p-8 lg:w-[50%] lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-center text-[32px] text-[#274C5B] lg:text-start">Why Organic</h1>
          <p className="text-center lg:text-start">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
        </div>
        <div className="sm:flex sm:justify-center">
          <img src={singleS2img2} alt="" />
        </div>
      </div>
      <div className="lg:w-[90%] m-auto xl:w-[65%] xl:m-auto">
        <h1 className="text-center text-[#274C5B] font-bold text-[32px] lg:text-start lg:py-[20px] 2xl:text-[52px]">We farm your land</h1>
        <p className="text-center lg:text-start 2xl:text-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      <div className="flex flex-col gap-3 items-center md:flex-row md:justify-around xl:w-[65%] xl:m-auto xl:justify-start py-[50px] ">
        <div className="flex items-center gap-2 p-4 bg-[#F9F8F8] rounded-[20px]">
          <div className="bg-[#7EB693] w-[69px] h-[69px] rounded-full text-white flex justify-center items-center text-[24px] font-bold">01</div>
          <h1 className=" text-[#274C5B] font-bold text-[24px]">Best quality support</h1>
        </div>
        <div className="flex items-center gap-2 p-4 bg-[#F9F8F8] rounded-[20px]">
          <div className="bg-[#7EB693] w-[69px] h-[69px] rounded-full text-white flex justify-center items-center text-[24px] font-bold">02</div>
          <h1 className=" text-[#274C5B] font-bold text-[24px]">Best quality support</h1>
        </div>
      </div>
      <div>
        <ForEmail/>
      </div>
    </div>
  )
}

export default ServiseSingle