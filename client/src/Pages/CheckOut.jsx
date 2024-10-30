
import LanguageBar from '../Components/LanguageBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CheckOutCard from '../Components/CheckOutCard'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CheckOut = () => {

    const location = useLocation()
    const {from , cartitems , product} = location.state
    const [items , setItems] = useState(null)
    const [total , setTotal] = useState(0)

    const [paymentMethod , setPaymentMethod] = useState(null)

    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [landmark , setLandMark] = useState("")

    let token = localStorage.getItem("token")

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() =>  {
        if(from === "cart")
        {
            setItems(cartitems)
        }
        else{
            setItems([product])
        }
    },[from , cartitems , product])

    useEffect(() => {
        if (items) {
          const tot = items.reduce((sum, item) => sum + item.price, 0);
          setTotal(tot);
        }
      }, [items]);


    const placeOrder = () => {

        event.preventDefault()

        axios.post("http://localhost:8000/api/orders/placeOrder",{name,email,phone,address,city,landmark,paymentMethod,items},config)
        .then((result) => {
            console.log(result.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


  return (
    <div>
      <LanguageBar/>
      <Navbar/>

      <div className='flex w-full'>

        <div className='w-[50%] border-r border-gray-300 border-solid py-10'>
            <div className='w-[60%] mx-[20%] my-3'>
                <h1 className='text-2xl font-bold'>Billing Details</h1>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Name</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setName(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setAddress(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Landmark</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setLandMark(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Town/City</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setCity(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
                <input type="number" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setPhone(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Email Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className='flex w-[60%] mx-[20%] my-5'>
                <input type="checkbox"/>
                <p className='mx-3 font-semibold'>Save this information for future checkout process</p>
            </div>
        </div>

        <div className='w-[50%] flex flex-col justify-center items-center'>
            <div className='flex flex-col w-[60%] my-3 mt-10'>
                {items &&
                    items.map((item , index) => {
                        return (<CheckOutCard key={index} item={item} />)
                    })
                }
            </div>

            <div className="w-[60%]" >

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">SubTotal</p>
                    <p className="font-semibold">${total}</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Shipping</p>
                    <p className="font-semibold">Free</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">${total}</p>
                </div>

          </div>

          <div className='w-[60%] mt-5'>
            <div className='flex items-center my-2'>
                <input type="radio" name="pay" value="Online" onClick={(e) => setPaymentMethod(e.target.value)} />
                <label className='mx-3 font-medium'>Razor Pay</label>
            </div>

            <div className='flex items-center my-2'>
                <input type="radio" name="pay" value="Cash" onClick={(e) => setPaymentMethod(e.target.value)} />
                <label className='mx-3 font-medium'>Cash on Delivery</label>
            </div>
          </div>

          <div className='w-[60%]'>
            <input type="text" className="border border-black border-solid p-2 pl-3 pr-10" placeholder="Enter Coupon" />
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500 mx-5">Apply Coupon</button>
          </div>

          <div className='w-[60%] flex justify-end my-5'>
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500" onClick={() => placeOrder()}>Place Order</button>
          </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOut
