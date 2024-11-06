import { useState } from "react"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
// import Navbar from "../Components/Navbar"
import { Snackbar, Alert, Slide } from '@mui/material';
import axios from "axios"
import image from "/loginImage.png"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")
  const navigate = useNavigate()

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const validator = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name.length === 0) {
        setNotificationMessage("Name is required");
        setNotificationOpen(true);
        return false;
    } 
    else if (name.length < 3) {
        setNotificationMessage("Name must be at least 3 characters long");
        setNotificationOpen(true);
        return false;
    } 
    else if (!emailRegex.test(email)) {
        setNotificationMessage("Please enter a valid email address");
        setNotificationOpen(true);
        return false;
    }
    else if (!passwordRegex.test(password)) {
        setNotificationMessage("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character");
        setNotificationOpen(true);
        return false;
    }
    return true;
};



  const submitHandler = () => {
    event.preventDefault()

    if(validator())
    {
      axios.post("http://localhost:8000/api/auth/register", {name , email , password})
      .then((res) => {
        if(res.data == "Success")
        {
          setSeverity("success")
          setNotificationOpen(true)
          setNotificationMessage("Registration Successfully Completed")
          
          setTimeout(() => {
            navigate("/login")
          },2000)
          
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

      <div className="flex w-[100vw] overflow-x-hidden">

        <div className="w-[50vw] h-[750px]">
          <img src={image} alt="Login Image" className="w-full h-full"/>
        </div>

        <div className="w-[50vw] h-[750px] flex flex-col justify-center items-center">
          <div className="w-[50%]">
            <p className="my-3 text-3xl font-bold">Create an Account</p>
            <p className="my-3">Enter your details below</p>
          </div>

          <input type="text" placeholder="Name" className="border-b border-gray-400 border-solid w-[50%] my-5" onChange={(e) => setName(e.target.value) } />

          <input type="text" placeholder="Email" className="border-b border-gray-400 border-solid w-[50%] my-5" onChange={(e) => setEmail(e.target.value) } />

          <input type="password" placeholder="Password" className="border-b border-gray-400 border-solid w-[50%] my-5" onChange={(e) => setPassword(e.target.value) } />

          <button className="w-[50%] bg-red-500 text-white py-3 my-5" onClick={() => submitHandler()} >Create Account</button>

          <p className="text-gray-400">Already have account? <Link to={"/login"} className="text-black underline">Login In</Link></p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Register
