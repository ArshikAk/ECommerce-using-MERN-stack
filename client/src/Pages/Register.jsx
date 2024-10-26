import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
// import Navbar from "../Components/Navbar"

import image from "/loginImage.png"

import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="overflow-x-hidden">
      <LanguageBar/>
      {/* <Navbar/> */}

      <div className="flex w-[100vw] overflow-x-hidden">

        <div className="w-[50vw] h-[750px]">
          <img src={image} alt="Login Image" className="w-full h-full"/>
        </div>

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center">
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Create an Account</p>
            <p className="my-3">Enter your details below</p>
          </div>

          <input type="text" placeholder="Name" className="border-b border-gray-400 border-solid w-[50%] my-5"/>

          <input type="text" placeholder="Email" className="border-b border-gray-400 border-solid w-[50%] my-5"/>

          <input type="text" placeholder="Password" className="border-b border-gray-400 border-solid w-[50%] my-5"/>

          <button className="w-[50%] bg-red-500 text-white py-3 my-5">Create Account</button>

          <p className="text-gray-400">Already have account? <Link to={"/login"} className="text-black underline">Login In</Link></p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Register
