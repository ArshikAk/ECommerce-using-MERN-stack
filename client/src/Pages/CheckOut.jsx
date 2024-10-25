
import LanguageBar from '../Components/LanguageBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CheckOutCard from '../Components/CheckOutCard'

const CheckOut = () => {
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
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Landmark</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Town/City</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Mobile Number</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex flex-col w-[60%] mx-[20%] my-3'>
                <label className='text-lg text-gray-500 mt-2'>Email Address</label>
                <input type="text" className='border border-gray-300 border-solid mt-2 pl-3 h-10 bg-gray-200 rounded-lg text-black shadow-2xl'/>
            </div>

            <div className='flex w-[60%] mx-[20%] my-5'>
                <input type="checkbox"/>
                <p className='mx-3 font-semibold'>Save this information for future checkout process</p>
            </div>
        </div>

        <div className='w-[50%] flex flex-col justify-center items-center'>
            <div className='flex flex-col w-[60%] my-3'>
                <CheckOutCard/>
                <CheckOutCard/>
            </div>

            <div className="w-[60%]" >

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">SubTotal</p>
                    <p className="font-semibold">$1000</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Shipping</p>
                    <p className="font-semibold">Free</p>
                </div>

                <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">$1000</p>
                </div>

          </div>

          <div className='w-[60%] mt-5'>
            <div className='flex items-center my-2'>
                <input type="radio" name="pay" id="" />
                <label className='mx-3 font-medium'>Razor Pay</label>
            </div>

            <div className='flex items-center my-2'>
                <input type="radio" name="pay" id="" />
                <label className='mx-3 font-medium'>Cash on Delivery</label>
            </div>
          </div>

          <div className='w-[60%]'>
            <input type="text" className="border border-black border-solid p-2 pl-3 pr-10" placeholder="Enter Coupon" />
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500 mx-5">Apply Coupon</button>
          </div>

          <div className='w-[60%]'>
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500">Place Order</button>
          </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOut
