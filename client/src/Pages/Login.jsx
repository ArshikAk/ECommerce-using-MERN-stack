import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
// import Navbar from "../Components/Navbar"

import axios from "axios"
import image from "/loginImage.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { Snackbar, Alert, Slide } from '@mui/material';

import { useAuth } from "../RouteProtectors/AuthContext"


const Login = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const { login } = useAuth()

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")
  const navigate = useNavigate()

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const validator = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        setNotificationMessage("Please enter a valid email address");
        setNotificationOpen(true);
        return false;
    }
    // else if (!passwordRegex.test(password)) {
    //     setNotificationMessage("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character");
    //     setNotificationOpen(true);
    //     return false;
    // }
    return true;
};

  const submitHandler = () => {
    event.preventDefault()
    
    if(validator())
    {
      axios.post("http://localhost:8000/api/auth/login", {email , password})
      .then(async (res) => {
        if(res.data.message == "Success")
        {
          
          localStorage.setItem("token",res.data.token)
          console.log(res.data.user)
          await login(res.data.user)

          setSeverity("success")
          setNotificationOpen(true)
          setNotificationMessage("Login Successfully Completed")

          setTimeout(() => {
            if(res.data.user.role == "admin")
            {
              navigate("/admin/dashboard")
            }
            else{
              navigate("/")
            }
          },2000)

        }
        else if(res.data == "User Not Found" || res.data == "Invalid Password")
        {
          setSeverity("error")
          setNotificationOpen(true)
          setNotificationMessage("Invalid User Email or Password")
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }


  return (
    <div className="overflow-x-hidden">
      <LanguageBar/>
      {/* <Navbar/> */}

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="flex w-[100vw] py-[10%]">

        <div className="hidden lg:w-[50vw] lg:h-[750px]">
          <img src={image} alt="Login Image" className="w-full h-full"/>
        </div>

        <div className="w-[100vw] p-[10%] lg:w-[50vw] lg:h-[750px] flex flex-col justify-center lg:items-center">
          <div className="lg:w-[50%]">
            <p className="my-3 text-3xl font-bold">Login to Exclusive</p>
            <p className="hidden lg:block my-3">Enter your details below</p>
          </div>

          <input type="text" placeholder="Email" className="border border-black p-2 lg:border-b lg:border-gray-400 border-solid lg:w-[50%] my-5" onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password" className="border border-black p-2 lg:border-b lg:border-gray-400 border-solid lg:w-[50%] my-5" onChange={(e) => setPassword(e.target.value)} />


          <div className="flex justify-between items-center lg:w-[50%] lg:mx-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => submitHandler()}>Login</button>
            <p className="text-red-500 cursor-pointer" onClick={() => navigate("/otpemail")} >Forget Password?</p>
          </div>

          <p className="text-gray-400 my-5">Don&apos;t have account? <Link to={"/register"} className="text-black underline">Register</Link></p>
          
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Login
