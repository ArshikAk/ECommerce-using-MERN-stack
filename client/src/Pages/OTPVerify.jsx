import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import axios from "axios"
import image from "/loginImage.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Snackbar, Alert, Slide } from '@mui/material';



const OTPVerify = () => {

  const [otp , setOtp] = useState("")

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const [otpVerified,setOtpVerified] = useState(false)

  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const validator = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        setSeverity("error")
        setNotificationMessage("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character");
        setNotificationOpen(true);
        return false;
    }
    return true;
};


  const submitHandler1 = () => {
    event.preventDefault()

    let email = localStorage.getItem("email")

    axios.post("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/auth/verifyOTP",{otp,email})
        .then((result) => {
            if(result.data == "Success")
            {
                setSeverity("success")
                setNotificationMessage("OTP verified successfully");
                setNotificationOpen(true);
                setOtpVerified(true)
            }
            else if(result.data == "Invalid" || result.data == "Expired")
            {
                setSeverity("error")
                setNotificationMessage("Invalid OTP or OTP Expired");
                setNotificationOpen(true);
            }
        })
    }

    const submitHandler2 = () => {
        event.preventDefault()
    
        let email = localStorage.getItem("email")
    
        if(validator())
        {
            if(password == confirmPassword)
            {
                axios.put("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/auth/changePassword",{email , password})
                .then((result) => {
                    if(result.data == "Success")
                    {
                        setSeverity("success")
                        setNotificationMessage("Password Changed successfully");
                        setNotificationOpen(true);
                        
                        setTimeout(() => {
                            navigate("/login")
                        },2000)
                    }
                })
            }
            else{
                setSeverity("error")
                setNotificationMessage("Password  and Confirm Password does not match");
                setNotificationOpen(true);
            }
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

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center" style={otpVerified == false ? {display : "flex"} : {display : "none"}} >
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Account Password Reset</p>
            <p className="my-3">Enter your OTP below</p>
          </div>

          <input type="text" placeholder="OTP" className="border-b border-gray-400 border-solid w-[50%] mt-8" onChange={(e) => setOtp(e.target.value)} />

          <div className="flex justify-center items-center w-[100%] mt-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => submitHandler1()}>Verify OTP</button>
          </div>

        </div>

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center" style={otpVerified == true ? {display : "flex"} : {display : "none"}} >
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Account Password Reset</p>
            <p className="my-3">Enter your New Password Below</p>
          </div>

          <input type="password" placeholder="Password" className="border-b border-gray-400 border-solid w-[50%] mt-8" onChange={(e) => setPassword(e.target.value)} />

          <input type="password" placeholder="Confirm Password" className="border-b border-gray-400 border-solid w-[50%] mt-8" onChange={(e) => setConfirmPassword(e.target.value)} />

          <div className="flex justify-center items-center w-[100%] mt-5">
            <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => submitHandler2()}>Change Password</button>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default OTPVerify
