import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
// import Navbar from "../Components/Navbar"

import axios from "axios"

import image from "/loginImage.png"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const navigate = useNavigate()

  const submitHandler = () => {

    event.preventDefault()


    axios.post("http://localhost:8000/api/auth/login", {email , password})
    .then(async (res) => {
      console.log(res.data)
      if(res.data.message == "Success")
      {
        await localStorage.setItem("token",res.data.token)
        alert("Login Successfull")
        navigate("/")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }


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

          <input type="text" placeholder="Email" className="border-b border-gray-400 border-solid w-[50%] my-5" onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password" className="border-b border-gray-400 border-solid w-[50%] my-5" onChange={(e) => setPassword(e.target.value)} />

          <div className="flex justify-between items-center w-[50%] mx-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => submitHandler()}>Login</button>
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
