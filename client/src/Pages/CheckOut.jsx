
import LanguageBar from '../Components/LanguageBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CheckOutCard from '../Components/CheckOutCard'
import { useLocation, useNavigate } from 'react-router-dom'
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
    const [pincode , setPincode] = useState()

    const [addresses,setAddresses] = useState(null)
    const [selectedAddress,setSelectedAddress] = useState(0)
    const [showAddresses, setShowAddresses] = useState(false)

    const [saveAddress,setSaveAddress] = useState(false)
    const [showSaveOption , setShowSaveOption] = useState(true)

    let token = localStorage.getItem("token")

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const navigate = useNavigate()

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

    useEffect(() => {
        axios.get("http://localhost:8000/api/address/getAddress",config)
        .then((result) => {
            if(result.data == "No address found" || result.data.length == 0)
            {
                setSaveAddress(true)
                setShowAddresses(false)
            }
            else
            {
                setShowAddresses(true)
                setAddresses(result.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleChange = (index) => {
        setSelectedAddress(index)
        setName(addresses[index].name)
        setEmail(addresses[index].email)
        setPhone(addresses[index].phone)
        setAddress(addresses[index].address)
        setCity(addresses[index].city)
        setLandMark(addresses[index].landMark)
        setPincode(addresses[index].pincode)

    }


    const placeOrder = () => {

        event.preventDefault()

        axios.post("http://localhost:8000/api/orders/placeOrder",{name,email,phone,address,city,pincode,landmark,paymentMethod,items},config)
        .then((result) => {
            if(saveAddress)
            {
                addAddress()
            }
            console.log(result.data)
            navigate("/ordersuccess")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const addAddress = () => {

        event.preventDefault()

        if(addresses.length == 3)
        {
            return
        }

        axios.post("http://localhost:8000/api/address/addAddress",{name,email,phone,address,city,landmark,pincode},config)
        .then((result) => {
            console.log(result.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    

        // const initiatePayment = async (amount) => {

        //     const orderResponse = await axios.post('/api/payment/create-order', { amount });
        //     const { amount, id: order_id, currency } = orderResponse.data.order;

        //     const options = {
        //         key: 'YOUR_RAZORPAY_KEY_ID',
        //         amount: amount,
        //         currency: currency,
        //         name: 'Your Company Name',
        //         description: 'Test Transaction',
        //         order_id: order_id,
        //         handler: async (response) => {
        //         const data = {
        //             razorpay_order_id: response.razorpay_order_id,
        //             razorpay_payment_id: response.razorpay_payment_id,
        //             razorpay_signature: response.razorpay_signature,
        //         };

        //         const result = await axios.post('/api/payment/verify-payment', data);
        //         if (result.data.success) {
        //             alert('Payment Successful');
        //         } else {
        //             alert('Payment verification failed');
        //         }
        //         },
        //         prefill: {
        //         name: 'Customer Name',
        //         email: 'customer@example.com',
        //         contact: '9999999999',
        //         },
        //         theme: {
        //         color: '#3399cc',
        //         },
        //     };

        //     const paymentObject = new window.Razorpay(options);
        //     paymentObject.open();
        // };



  return (
    <div className='w-[100vw] overflow-x-hidden'>
      <LanguageBar/>
      <Navbar/>

      <div className='flex flex-wrap w-full'>

        <div className='w-[50%] border-r border-gray-300 border-solid py-10' style={showAddresses == false ? {display : "block"} : {display : "none"}} >
            <div className='w-[60%] mx-[20%] my-3'>
                <h1 className='text-2xl font-bold'>Billing Details</h1>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Name</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={name} disabled={!showSaveOption} onChange={(e) => setName(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={address} disabled={!showSaveOption} onChange={(e) => setAddress(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Landmark</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={landmark} disabled={!showSaveOption} onChange={(e) => setLandMark(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Town/City</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={city} disabled={!showSaveOption} onChange={(e) => setCity(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Pincode</label>
                <input type="number" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={pincode} disabled={!showSaveOption} onChange={(e) => setPincode(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
                <input type="number" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={phone} disabled={!showSaveOption} onChange={(e) => setPhone(e.target.value)}  />
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Email Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl' value={email} disabled={!showSaveOption} onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className='flex w-[60%] mx-[20%] my-5'>
                <input type="checkbox" checked={saveAddress} onChange={() => setSaveAddress(!saveAddress)} />
                <p className='mx-3 font-semibold'>Save this information for future checkout process.</p>
            </div>

        </div>

        <div className='lg:w-[50%] border-r border-gray-300 border-solid py-10' style={showAddresses == true ? {display : "block"} : {display : "none"}} >
            
            <div className='mx-3 lg:w-[80%] lg:mx-auto w-full'>
                <h1 className='my-5 text-2xl font-semibold'>Select Delivery Address</h1>

                <div className='flex flex-col h-[250px] overflow-auto lg:h-auto lg:block lg:overflow-hidden'>
                    {
                    addresses && addresses.map((item,index) => {
                        return (
                            <>
                            <div className={selectedAddress == index ? 
                                "border rounded-lg py-8 px-5 flex items-center relative my-5 shadow-xl border-black lg:mx-3 w-[80%] lg:w-[90%] mx-auto" : 
                                "border border-gray-300 rounded-lg py-8 px-5 shadow-sm flex items-center relative my-5 hover:shadow-2xl hover:border-black lg:mx-3 w-[80%] lg:w-[90%] mx-auto"
                                } 
                                onClick={() => handleChange(index)} >

                                <input type="radio" name="address" id="" checked={selectedAddress == index} />
                                <div className='mx-7'>
                                    <div className="mt-2 flex">
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="font-semibold text-gray-800 mx-3">{item.phone}</p>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-gray-500 text-sm lg:text-base mt-1">Address - {item.address + "," + item.city + "."}</p>
                                        <p className="text-gray-500 text-sm lg:text-base mt-1">LandMark - {item.landMark}</p>
                                    </div>

                                    <div className="mt-2">
                                    <p className="font-semibold text-gray-800">{item.pincode}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                </div>

            </div>
        </div>

        <div className='w-[85%] mx-auto lg:w-[50%] flex flex-col lg:justify-center lg:items-center'>
            <div className='flex flex-col lg:w-[60%] lg:my-3 lg:mt-10'>
                {items &&
                    items.map((item , index) => {
                        return (<CheckOutCard key={index} item={item} />)
                    })
                }
            </div>

            <div className="lg:w-[60%]" >

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">SubTotal</p>
                    <p className="font-semibold">₹{total}</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Shipping</p>
                    <p className="font-semibold">Free</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">₹{total}</p>
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

          <div className='hidden lg:block w-[60%]'>
            <input type="text" className="border border-black border-solid p-2 pl-3 pr-10" placeholder="Enter Coupon" />
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500 mx-5">Apply Coupon</button>
          </div>

          <div className='lg:w-[60%] flex justify-center items-center lg:justify-end my-5'>
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500" onClick={() => placeOrder()}>Place Order</button>
          </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOut
