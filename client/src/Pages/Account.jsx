import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"

import SideBar from "../Components/SideBar"
import axios from "axios"
import { Snackbar, Alert, Slide } from '@mui/material';


const Account = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")

  const [currentPassword,setCurrentPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const [changePassword,setChangePassword] = useState(false)

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  let token = localStorage.getItem("token")

  let config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }

  useEffect(() => {
    axios.get("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/account/getProfile",config)
    .then((result) => {
      setName(result.data.name)
      setEmail(result.data.email)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  const saveChanges = () => {
    if(validator())
    {
      axios.put("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/account/updateProfile",{name,email,changePassword,newPassword,currentPassword},config)
      .then((result) => {
          if(result.data == "Success")
          {
            setSeverity("success")
            setNotificationOpen(true)
            setNotificationMessage("Profile Updated Successfully")
          }
          else if(result.data == "Invalid Password")
          {
              setSeverity("error")
              setNotificationOpen(true)
              setNotificationMessage("Invalid Current Password")
          }
          
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  const validator = () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) 
    {
        setSeverity("error")
        setNotificationMessage("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character");
        setNotificationOpen(true);
        return false;
    }
    else if(newPassword != confirmPassword)
    {
        setSeverity("error")
        setNotificationMessage("New Password and Confirm Password is not matched");
        setNotificationOpen(true);
        return false; 
    }
    return true;
};


  return (
    <div>
        <LanguageBar/>
        <Navbar/>

        <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
          <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
            {notificationMessage}
          </Alert>
        </Snackbar>

        <div className="flex">

            <div className="flex justify-center items-start w-[30%] mt-10 border-r border-solid border-gray-300">
                <SideBar/>
            </div>
            
            <div className="flex flex-col w-[70%] justify-center items-center">
              <div className="my-20 shadow-lg rounded-lg p-10">
                  <h3 className="text-xl text-red-500">Edit Your Profile</h3>

                    <div className="flex my-2 p-5">

                      <div className="flex flex-col mx-5">
                        <label className="my-3 font-semibold" >Name</label>
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[400px] " value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                      </div>

                      <div className="flex flex-col mx-5" >
                        <label className="my-3 font-semibold">Email</label>
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md h-[40px] p-4 w-[400px] " value={email} placeholder="Your Email" disabled={true} />
                      </div>
                    </div>

                    <div className='flex mx-10 mt-5'>
                      <input type="checkbox" checked={changePassword} onChange={() => setChangePassword(!changePassword)} />
                      <p className='mx-3 font-semibold'>Change account password</p>
                    </div>

                    <div className="flex my-2 p-5" style={changePassword == true ? {display : "flex"} : {display : "none"}} >
                      <div className="flex flex-col mx-5" >
                        <label className="my-3 font-semibold">Change Password</label>
                        <input type="password" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" value={currentPassword} placeholder="Current Password" onChange={(e) => setCurrentPassword(e.target.value)}  />
                        <input type="password" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" value={newPassword} placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)}  />
                        <input type="password" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}  />
                      </div>
                    </div>

                    <div className="flex justify-end mt-10">
                      <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => saveChanges()} >Save Changes</button>
                    </div>
              </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account
