import { TextField } from "@mui/material"
import bgGamail from "../../assets/forEmailBG.png"

const ForEmail = () => {
  return (
    <div className="w-[90%] h-[320px] my-[100px] m-auto bg-cover m:bg-center xl:my-[150px]" style={{backgroundImage:`url(${bgGamail})`, backgroundRepeat:"no-repeat" }}>
        <div className="flex m:flex-col justify-center h-[90%] m:gap-[20px] md:flex-row md:items-center xl:justify-around">
            <h1 className="text-[white] m:text-center m:text-[24px] xl:text-[52px] xl:w-[30%] xl:text-start">Subscribe to
                our Newsletter
            </h1>
            <div className="flex items-center sm:justify-around md:justify-center">
                <TextField size="small" label="Your Email Adress" variant="outlined"/>
                <button className="text-[white] py-[10px] px-[20px] bg-[#274C5B] rounded-md hover:bg-[#1C2630]">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default ForEmail