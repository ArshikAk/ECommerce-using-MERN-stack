import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
// import Navbar from "../Components/Navbar"

import image from "/loginImage.png"

import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="overflow-x-hidden">
      <LanguageBar/>
      {/* <Navbar/> */}

      <div className="flex w-[100vw]">

        <div className="w-[50vw] h-[750px]">
          <img src={image} alt="Login Image" className="w-full h-full"/>
        </div>

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center">
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Login to Exclusive</p>
            <p className="my-3">Enter your details below</p>
          </div>

          <input type="text" placeholder="Email" className="border-b border-gray-400 border-solid w-[50%] my-5"/>

          <input type="text" placeholder="Password" className="border-b border-gray-400 border-solid w-[50%] my-5"/>

          <div className="flex justify-between items-center w-[50%] mx-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5">Login</button>
            <p className="text-red-500">Forget Password?</p>
          </div>

          <p className="text-gray-400">Don&apos;t have account? <Link to={"/register"} className="text-black underline">Register</Link></p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Login
