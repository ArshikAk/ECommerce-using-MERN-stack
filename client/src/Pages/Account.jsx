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
            <div className="flex justify-center items-center w-[30%]">
                <SideBar/>
            </div>
            <div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Account
