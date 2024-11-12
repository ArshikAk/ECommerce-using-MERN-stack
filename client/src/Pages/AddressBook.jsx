import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"

import SideBar from "../Components/SideBar"
import axios from "axios"
import { Snackbar, Alert, Slide } from '@mui/material';

import AddressCard from "../Components/AddressCard"


const AddressBook = () => {

    const [addresses,setAddresses] = useState(null)

    const [notificationMessage , setNotificationMessage] = useState("")
    const [notificationOpen,setNotificationOpen] = useState(false)
    const [severity, setSeverity] = useState("error")

    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [landmark , setLandMark] = useState("")
    const [pincode , setPincode] = useState()

    const [openAddAddress,setOpenAddAddress] = useState(false)

    const [index,setIndex] = useState(null)
    const [openEditAddress, setOpenEditAddress] = useState(false)

    const [refresh,setRefresh] = useState(0)

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
        axios.get("https://exclusiveserver.vercel.app/api/address/getAddress",config)
        .then((result) => {
            if(result.data == "No address found")
            {
                setAddress(null)
            }
            else
            {
                setAddresses(result.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },[refresh])

    const addAddress = () => {

        event.preventDefault()

        if(addresses.length >= 3)
        {
            setSeverity("error")
            setNotificationMessage("Cannot add more than 3 address");
            setNotificationOpen(true)

            setOpenAddAddress(false)
            setOpenEditAddress(false)

            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setCity("")
            setLandMark("")
            setPincode("")
            
            return
        }

        axios.post("https://exclusiveserver.vercel.app/api/address/addAddress",{name,email,phone,address,city,landmark,pincode},config)
        .then((result) => {
            if(result.data == "Success")
            {
                setSeverity("success")
                setNotificationMessage("Address added successfully");
                setNotificationOpen(true);

                setOpenAddAddress(false)
                setOpenEditAddress(false)

                setName("")
                setEmail("")
                setPhone("")
                setAddress("")
                setCity("")
                setLandMark("")
                setPincode("")

                setRefresh(refresh + 1)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onEdit = (index) => {

        setIndex(index)

        setName(addresses[index].name)
        setEmail(addresses[index].email)
        setPhone(addresses[index].phone)
        setAddress(addresses[index].address)
        setCity(addresses[index].city)
        setLandMark(addresses[index].landMark)
        setPincode(addresses[index].pincode)

        setOpenAddAddress(true)
        setOpenEditAddress(true)
    }

    const updateAddress = () => {
        axios.put("https://exclusiveserver.vercel.app/api/address/updateAddress",{name,email,phone,address,city,landmark,pincode,index},config)
        .then((result) => {
            if(result.data == "Success")
            {
                setSeverity("success")
                setNotificationMessage("Address updated successfully");
                setNotificationOpen(true)

                setOpenAddAddress(false)
                setOpenEditAddress(false)

                setName("")
                setEmail("")
                setPhone("")
                setAddress("")
                setCity("")
                setLandMark("")
                setPincode("")

                setRefresh(refresh + 1)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onDelete = (index) => {

        axios.delete(`https://exclusiveserver.vercel.app/api/address/deleteAddress/${index}`,config)
        .then((result) => {
            if(result.data == "Success")
            {
                setSeverity("success")
                setNotificationMessage("Address deleted successfully");
                setNotificationOpen(true)

                setOpenAddAddress(false)
                setOpenEditAddress(false)

                setRefresh(refresh + 1)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }


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

              <div className="my-20 shadow-lg rounded-lg px-10 py-5 w-[80%] border">

                <div className="my-5 flex justify-between items-center w-full" >
                    <h3 className="text-xl text-red-500">Manage Your Addresses</h3>
                    <button className="border border-blue-500 border-solid p-3 bg-blue-500 text-white hover:bg-blue-800" onClick={() => setOpenAddAddress(true)} >Add New Address</button>
                </div>
                
                <div className="flex flex-col" style={openAddAddress == true ? {display : "none"} : {display : "flex"}}>
                    {
                        addresses && addresses.map((item,index) => {
                            return <AddressCard key={index} index={index} item={item} onEdit={onEdit} onDelete={onDelete} />
                        })
                    }
                </div>

                {
                    addresses == null && (!openAddAddress) ? <p className="my-5 flex justify-center item text-xl" >No Address Found</p> : ""
                }

                <div className="w-[80%] mx-auto my-10 rounded-lg py-5 border border-black border-solid" style={openAddAddress == false ? {display : "none"} : {display : "block"}}>

                    <h3 className="text-xl font-semibold mx-10" >{openEditAddress ?  "Edit Address" : "Add New Address"}</h3>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Name</label>
                        <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={name} onChange={(e) => setName(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Address</label>
                        <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={address} onChange={(e) => setAddress(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Landmark</label>
                        <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={landmark} onChange={(e) => setLandMark(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Town/City</label>
                        <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={city} onChange={(e) => setCity(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Pincode</label>
                        <input type="number" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={pincode} onChange={(e) => setPincode(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
                        <input type="number" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={phone} onChange={(e) => setPhone(e.target.value)}  />
                    </div>

                    <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                        <label className='text-lg text-gray-500 mt-2'>Email Address</label>
                        <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>

                    <div className="flex w-[60%] mx-[20%] justify-evenly mt-10 mb-5 items-center">
                        <button className="border border-blue-500 border-solid px-10 py-3 bg-blue-500 text-white hover:bg-blue-800" onClick={() => openEditAddress ? updateAddress() : addAddress()}>{openEditAddress ? "Save Changes" : "Save"}</button>
                        <button className="border border-black border-solid px-10 py-3 hover:bg-gray-200" onClick={() => {
                            setOpenAddAddress(false)
                            setOpenEditAddress(false)
                        }}>Cancel</button>
                    </div>

                </div>
              </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AddressBook
