




import shops1bg from "../assets/shopS1bg.png"
import ForEmail from "../components/forEamail/forEmail"
import ShopSwiper1 from "../components/swipers/swipersforShop/shopSwiper1"

const Shop = () => {
  return (
    <div>
      <div className='section1  bg-cover h-[450px] flex items-center justify-center my-[100px]' style={{backgroundImage:`url(${shops1bg})`}}>
            <h1 className="text-[#274C5B] text-[52px] font-bold">Shop</h1>
      </div>
      <div className="py-[50px]">
        <div className="p-[50px]">
          <ShopSwiper1/>
        </div>
        <div className="p-[50px]">
          <ShopSwiper1/>
        </div>
        <div className="p-[50px]">
          <ShopSwiper1/>
        </div>
      </div>
      <div>
        <ForEmail/>
      </div>
    </div>
  )
}

export default Shop