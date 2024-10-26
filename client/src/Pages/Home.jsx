import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import SlideShow from "../Components/SlideShow"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <LanguageBar/>
        <Navbar/>

        <div className="flex w-full border-b border-gray-400 border-solid">
          <div className="w-[20%] p-20 border-r border-gray-400 border-solid flex flex-col justify-center">
            <p className="my-3 font-bold text-lg cursor-pointer">Woman&apos;s Fashion</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Men&apos;s Fashion</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Electronics</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Home & LifeStyle</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Medicine</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Sports & Outdoor</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Baby&apos;s & Toys</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Groceries & Pets</p>
            <p className="my-3 font-bold text-lg cursor-pointer">Health & Beauty</p>
          </div>

          <div className="w-[80%] p-20">
            <SlideShow/>
          </div>
        </div>

        <div className="my-10 w-full">

        </div>

        <Footer/>
    </div>
  )
}

export default Home
