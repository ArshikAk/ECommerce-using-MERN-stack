import { useLocation, useNavigate } from "react-router-dom"

import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {

  const location = useLocation()

  const navigate = useNavigate()

  return (
    <div className="flex flex-row justify-around items-center  py-5 border-b border-gray-300 border-solid w-[100%]">

      <p className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")} >Exclusive</p>

      <div className="flex flex-row justify-evenly items-center mx-10">
        <p className="mx-5 font-semibold cursor-pointer" onClick={() => navigate("/")} >Home</p>
        <p className="mx-5 font-semibold cursor-pointer" onClick={() => navigate("/contact")} >Contact</p>
        <p className="mx-5 font-semibold cursor-pointer" onClick={() => navigate("/about")} >About</p>
        <p className="mx-5 font-semibold cursor-pointer" onClick={() => navigate("/register")} >SignUp</p>
      </div>

      <div className="flex items-center">
        <input type="search" className="border border-gray-300 border-solid rounded-md bg-gray-300 text-black pl-3" placeholder="Search Products"/>

        <div className="flex" style={ location.pathname == "/login" || location.pathname == "/register" ? {display : "none"} : {display : "flex"}} >
          <CiHeart size={30} className="mx-2 cursor-pointer" onClick={() => navigate("/wishlist")}/>
          <CiShoppingCart size={30} className="mx-2 cursor-pointer" onClick={() => navigate("/cart")}/>
          <MdAccountCircle size={30} className="mx-2 cursor-pointer" onClick={() => navigate("/account")}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
