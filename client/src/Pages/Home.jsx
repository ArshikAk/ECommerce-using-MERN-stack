import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import SlideShow from "../Components/SlideShow"

import ProductCard from "../Components/ProductCard"


import { GiClothes } from "react-icons/gi";
import { GiTravelDress } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiJewelCrown } from "react-icons/gi";

import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { SiAdguard } from "react-icons/si";

import { useNavigate } from "react-router-dom"

import { useEffect , useState } from "react"
import axios from "axios"

const Home = () => {

  const navigate = useNavigate()

  const [products , setProducts] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/getProducts")
    .then((res) => {
     setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const getRandomArray = (min, max) => {
    return Array.from({ length: 7 }, () => 
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  const randomNumbers1 = getRandomArray(1, 20);
  const randomNumbers2 = getRandomArray(1, 20);


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

        <div className="flex flex-col my-10 w-[100%] px-[5%] border-b border-gray-400 border-solid">

          <div className="flex items-center">
            <div className="w-[15px] h-[30px] bg-red-500 rounded">
            </div>
            <p className="font-bold m-3">Today&apos;s</p>
          </div>

          <h1 className="text-red-500 font-bold text-3xl my-3">Flash Sales</h1>

          <div className="my-5 flex overflow-x-auto space-x-4 prod-hori">
          { products && 
            products.filter(item => randomNumbers1.includes(item.productId)).map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                      <ProductCard  product={item}  />
                    </div>
            ))
          }
        </div>


          <div className="flex justify-center items-center">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => navigate("/products")}>View All Products</button>
          </div>

        </div>

        <div className="flex flex-col my-10 w-[100%] px-[5%] border-b border-gray-400 border-solid">

          <div className="flex items-center">
            <div className="w-[15px] h-[30px] bg-red-500 rounded">
            </div>
            <p className="font-bold m-3">Categories</p>
          </div>

          <h1 className="text-red-500 font-bold text-3xl my-3">Browse by Categories</h1>

          <div className="my-10 flex justify-around items-center prod-hori">

            <div className="flex flex-col justify-center items-center p-5 border border-solid border-black group hover:bg-red-500 transition-all duration-300 transform group-hover:scale-105 rounded-lg shadow-md hover:shadow-lg w-[200px] h-[200px] cursor-pointer hover:scale-110 ease-in-out " onClick={() => navigate("/products/men")}  >
              <GiClothes size={35} className="my-3 group-hover:text-white" />
              <h1 className="my-3 text-xl group-hover:text-white">Men&apos;s Wear</h1>
            </div>

            <div className="flex flex-col justify-center items-center p-5 border border-solid border-black group hover:bg-red-500 transition-all duration-300 transform group-hover:scale-105 rounded-lg shadow-md hover:shadow-lg w-[200px] h-[200px] cursor-pointer hover:scale-110 ease-in-out " onClick={() => navigate("/products/women")}  >
              <GiTravelDress size={35} className="my-3 group-hover:text-white" />
              <h1 className="my-3 text-xl group-hover:text-white">Women&apos;s Wear</h1>
            </div>

            <div className="flex flex-col justify-center items-center p-5 border border-solid border-black group hover:bg-red-500 transition-all duration-300 transform group-hover:scale-105 rounded-lg shadow-md hover:shadow-lg w-[200px] h-[200px] cursor-pointer hover:scale-110 ease-in-out " onClick={() => navigate("/products/electronics")}  >
              <IoPhonePortraitOutline size={35} className="my-3 group-hover:text-white" />
              <h1 className="my-3 text-xl group-hover:text-white">Electronics</h1>
            </div>

            <div className="flex flex-col justify-center items-center p-5 border border-solid border-black group hover:bg-red-500 transition-all duration-300 transform group-hover:scale-105 rounded-lg shadow-md hover:shadow-lg w-[200px] h-[200px] cursor-pointer hover:scale-110 ease-in-out " onClick={() => navigate("/products/jewelery")}  >
              <GiJewelCrown size={35} className="my-3 group-hover:text-white" />
              <h1 className="my-3 text-xl group-hover:text-white">Jewelery</h1>
            </div>

          </div>

          <div className="flex justify-center items-center">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => navigate("/products")} >View All Products</button>
          </div>

        </div>


        <div className="flex flex-col my-10 w-[100%] px-[5%] border-b border-gray-400 border-solid">

          <div className="flex items-center">
            <div className="w-[15px] h-[30px] bg-red-500 rounded">
            </div>
            <p className="font-bold m-3">This Month</p>
          </div>

          <h1 className="text-red-500 font-bold text-3xl my-3">Best Selling Products</h1>

          <div className="my-5 flex overflow-x-auto space-x-4 prod-hori">
          { products && 
            products.filter(item => randomNumbers2.includes(item.productId)).map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                      <ProductCard  product={item}  />
                    </div>
            ))
          }
        </div>

          <div className="flex justify-center items-center">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => navigate("/products")}>View All</button>
          </div>

        </div>

        <div className="flex justify-evenly items-center my-10 py-10">

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
    </div>
  )
}

export default Home
