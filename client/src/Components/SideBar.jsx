import { useLocation, useNavigate } from "react-router-dom"

const SideBar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const setStyle = (path) => {

      return location.pathname == path ? "text-sm my-3 ml-5 cursor-pointer text-red-500 underline underline-offset-8" : "text-sm my-3 ml-5 cursor-pointer";

    };
  

  return (
    <div className="my-10">
      <h1 className="text-lg font-bold my-5 cursor-pointer">Manage My Account</h1>
        <p className={setStyle("/account")} onClick={() => navigate("/account")} >My Profile</p>
        <p className={setStyle("/addressbook")} onClick={() => navigate("/addressbook")}>Address Book</p>
        <p className={setStyle("/paymentOptions")} onClick={() => navigate("/account")}>My Payment Options</p>

    <div className="cursor-pointer" onClick={() => navigate('/orders') } >
        <h1 className="text-lg font-bold my-5">My Orders</h1>
            <p className="text-sm my-3 ml-5">My Returns</p>
            <p className="text-sm my-3 ml-5">My Cancellations</p>
    </div>

    <h1 className="text-lg font-bold my-5 cursor-pointer " onClick={() => navigate('/wishlist')} >My Wishlist</h1>
    </div>
  )
}

export default SideBar
