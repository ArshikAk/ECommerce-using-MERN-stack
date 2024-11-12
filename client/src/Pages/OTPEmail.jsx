import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import axios from "axios"
import image from "/loginImage.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Snackbar, Alert, Slide } from '@mui/material';



const OTPEmail = () => {

  const [email , setEmail] = useState("")

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")
  const navigate = useNavigate()

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const validator = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setSeverity("error")
        setNotificationMessage("Please enter a valid email address");
        setNotificationOpen(true);
        return false;
    }
    return true;
    };

  const submitHandler = () => {
    event.preventDefault()
    if(validator())
    {
        axios.post("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/auth/getOTP",{email})
        .then((result) => {
            if(result.data == "Success")
            {
                localStorage.setItem("email",email)
                navigate("/otpverify")
            }
            else if(result.data == "Invalid User")
            {
                setSeverity("error")
                setNotificationMessage("Given Email ID is not reigstered");
                setNotificationOpen(true);
            }
        })
    }
   }


  return (
    <>

    <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
    </Snackbar>

    <div className="overflow-x-hidden">
      <LanguageBar/>

      <div className="flex w-[100vw]">

        <div className="w-[50vw] h-[750px]">
          <img src={image} alt="Login Image" className="w-full h-full"/>
        </div>

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center">
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Account Password Reset</p>
            <p className="my-3">Enter your Email ID below</p>
          </div>

          <input type="text" placeholder="Email" className="border-b border-gray-400 border-solid w-[50%] mt-8" onChange={(e) => setEmail(e.target.value)} />

          <div className="flex justify-center items-center w-[100%] mt-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => submitHandler()}>Get OTP</button>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default OTPEmail
