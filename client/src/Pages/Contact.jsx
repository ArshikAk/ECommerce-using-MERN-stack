import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"


const Contact = () => {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <LanguageBar/>
      <Navbar/>

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
            <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Name" />
            <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Email" />
            <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[30px] p-4" placeholder="Your Phone" />
          </div>

          <textarea className="w-[80%] mx-[10%] bg-gray-200 resize-none h-[200px] p-3" placeholder="Your Message" ></textarea>

          <div className="flex w-[80%] mx-[10%] justify-end">
            <button className="bg-red-500 text-white py-3 mt-10 w-[20%]">Send Message</button>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Contact
