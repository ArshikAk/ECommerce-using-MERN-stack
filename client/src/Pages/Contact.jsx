import { useState } from "react"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import axios from "axios"
import { Snackbar, Alert, Slide } from '@mui/material';


const Contact = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("")
  const [message , setMessage] = useState("");

  let token = localStorage.getItem("token")

  let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
  }

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const sendMail = () => {
    axios.post("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/contact/sendContact",{name,email,phone,message},config)
    .then((response) => {
      if(response.data.message == "Message sent successfully!")
      {
        setSeverity("success")
        setNotificationMessage("Mail Sent Successfully")
        setNotificationOpen(true)
        setName("")
        setEmail("");
        setPhone("");
        setMessage("");
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <LanguageBar/>
      <Navbar/>

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="flex my-20 justify-around items-center">
        <div className="shadow-2xl py-10 px-16 rounded-2xl">
          <div className="border-b border-solid border-black py-5">
            <h1 className="text-2xl font-bold my-2">Call to Us</h1>
            <p className="my-3 text-sm ">We are available 24/7, 7 days in week.</p>
            <p className="my-3 text-sm ">Phone - +91 82484 36235</p>
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold my-2">Write to Us</h1>
            <p className="my-3 text-sm ">Fill out our form and we will contact you within 24 hours.</p>
            <p className="my-3 text-sm ">Email : customer@exclusive.com</p>
            <p className="my-3 text-sm ">Email : support@exclusive.com</p>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl flex flex-col w-[60%] py-10">
          <div className="flex w-[80%] mx-[10%] justify-between items-center my-5">
            <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}  />
            <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="number" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <textarea className="w-[80%] mx-[10%] bg-gray-200 resize-none h-[200px] p-3" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>

          <div className="flex w-[80%] mx-[10%] justify-end">
            <button className="bg-red-500 text-white py-3 mt-10 w-[20%]" onClick={() => sendMail()} >Send Message</button>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Contact
