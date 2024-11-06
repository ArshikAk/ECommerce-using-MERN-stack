import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"


import image from "/aboutImage1.png"
import person1 from "/person1.png"
import person2 from "/person2.png"
import person3 from "/person3.png"


import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { SiAdguard } from "react-icons/si";

const About = () => {
  return (
    <>
      <LanguageBar/>
      <Navbar/>

      <div className="flex w-[100vw] items-center">
        <div className="w-[55%] px-20">

          <h1 className="text-5xl my-5 font-bold">Our Story</h1>
          <p className="my-5 font-medium">Launced in 2015, Exclusive is South Asia&apos;s 
            premier online shopping makterplace with an active 
            presense in Bangladesh. Supported by wide range of tailored 
            marketing, data and service solutions, Exclusive has 10,500 
            sallers and 300 brands and serves 3 millioons customers across the region.
          </p>

          <p className="my-5 font-medium">Exclusive has more than 1 Million products to offer, growing at a very fast. 
            Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>

        <div className="w-[45%]">
          <img src={image} alt="" className="w-full h-[80vh]"/>
        </div>
      </div>

      <div className="flex justify-around items-center my-20">

        <div className="flex flex-col justify-center items-center border border-black border-solid py-5 px-10 group hover:bg-red-500 transition-all duration-500">
          <div className="my-3 bg-black border border-black border-solid rounded-full p-3 group-hover:bg-white transition-colors ">
            <CiShop size={50} className="text-white group-hover:text-black transition-colors"/>
          </div>
          <p className="my-2 text-3xl font-bold group-hover:text-white transition-colors">10.5k</p>
          <p className="my-2 text-gray-400 font-semibold group-hover:text-white transition-colors">Sellers active in  our site</p>
        </div>

        <div className="flex flex-col justify-center items-center border border-black border-solid py-5 px-10 group hover:bg-red-500 transition-all duration-500">
          <div className="my-3 bg-black border border-black border-solid rounded-full p-3 group-hover:bg-white transition-colors ">
            <CiDollar size={50} className="text-white group-hover:text-black transition-colors"/>
          </div>
          <p className="my-2 text-3xl font-bold group-hover:text-white transition-colors">33k</p>
          <p className="my-2 text-gray-400 font-semibold group-hover:text-white transition-colors">Monthly Production Sales</p>
        </div>

        <div className="flex flex-col justify-center items-center border border-black border-solid py-5 px-10 group hover:bg-red-500 transition-all duration-500">
          <div className="my-3 bg-black border border-black border-solid rounded-full p-3 group-hover:bg-white transition-colors ">
            <LuShoppingBag size={50} className="text-white group-hover:text-black transition-colors"/>
          </div>
          <p className="my-2 text-3xl font-bold group-hover:text-white transition-colors">45.5k</p>
          <p className="my-2 text-gray-400 font-semibold group-hover:text-white transition-colors">Customers active our site</p>
        </div>

        <div className="flex flex-col justify-center items-center border border-black border-solid py-5 px-10 group hover:bg-red-500 transition-all duration-500">
          <div className="my-3 bg-black border border-black border-solid rounded-full p-3 group-hover:bg-white transition-colors ">
            <TbMoneybag size={50} className="text-white group-hover:text-black transition-colors"/>
          </div>
          <p className="my-2 text-3xl font-bold group-hover:text-white transition-colors">25k</p>
          <p className="my-2 text-gray-400 font-semibold group-hover:text-white transition-colors">Annual gross sale in  our site</p>
        </div>

      </div>

      <div className="flex justify-around items-center my-10">

        <div>
          <img src={person1} alt="" className="w-[350px] h-[400px] my-3"/>
          <p className="text-2xl mt-3 font-bold">Tom Cruise</p>
          <p className="text-sm mt-1 font-semibold">Founder & CEO</p>
        </div>

        <div>
          <img src={person2} alt="" className="w-[350px] h-[400px] my-3"/>
          <p className="text-2xl mt-3 font-bold">Emma Stone</p>
          <p className="text-sm mt-1 font-semibold">Managing Director</p>
        </div>

        <div>
          <img src={person3} alt="" className="w-[350px] h-[400px] my-3"/>
          <p className="text-2xl mt-3 font-bold">Will Smith</p>
          <p className="text-sm mt-1 font-semibold">Product Designer</p>
        </div>

      </div>

      <div className="flex justify-evenly items-center my-10 py-20">

        <div className="flex flex-col justify-center items-center">
          <div className="my-3 bg-gray-400 border-gray-400 border-solid p-3 rounded-full">
            <div className="bg-black border border-black border-solid rounded-full p-3">
              <TbTruckDelivery size={30} className="text-white"/>
            </div>
          </div>
          <p className="my-1 text-xl font-bold">FREE AND FAST DELIVERY</p>
          <p className="my-1 text-sm text-gray-400 font-semibold">Free delivery for all orders over ₹140</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="my-3 bg-gray-400 border-gray-400 border-solid p-3 rounded-full">
            <div className="bg-black border border-black border-solid rounded-full p-3">
              <MdHeadsetMic size={30} className="text-white"/>
            </div>
          </div>
          <p className="my-1 text-xl font-bold">24/7 CUSTOMER SUPPORT</p>
          <p className="my-1 text-sm text-gray-400 font-semibold">Friendly 24/7 Customer Support</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="my-3 bg-gray-400 border-gray-400 border-solid p-3 rounded-full">
            <div className="bg-black border border-black border-solid rounded-full p-3">
              <SiAdguard size={30} className="text-white"/>
            </div>
          </div>
          <p className="my-1 text-xl font-bold">MONEY BACK GUARANTEE</p>
          <p className="my-1 text-sm text-gray-400 font-semibold">We return money within 30 days</p>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default About
