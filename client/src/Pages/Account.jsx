import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"

import SideBar from "../Components/SideBar"


const Account = () => {
  return (
    <div>
        <LanguageBar/>
        <Navbar/>
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
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[400px] " placeholder="Your Name" />
                      </div>

                      <div className="flex flex-col mx-5" >
                        <label className="my-3 font-semibold">Email</label>
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[400px] " placeholder="Your Email" />
                      </div>
                    </div>

                    <div className="flex my-2 p-5" >
                      <div className="flex flex-col mx-5" >
                        <label className="my-3 font-semibold">Change Password</label>
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" placeholder="Current Password" />
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" placeholder="New Password" />
                        <input type="text" className="border border-solid border-gray-200 bg-gray-200 rounded-md text-black h-[40px] p-4 w-[700px] my-2" placeholder="Confirm Password" />
                      </div>
                    </div>

                    <div className="flex justify-end mt-10">
                      <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Save Changes</button>
                    </div>
              </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account
