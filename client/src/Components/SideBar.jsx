import { useNavigate } from "react-router-dom"

const SideBar = () => {

    const navigate = useNavigate()

  return (
    <div className="my-10">
      <h1 className="text-lg font-bold my-5 cursor-pointer">Manage My Account</h1>
        <p className="text-sm my-3 ml-5 cursor-pointer">My Profile</p>
        <p className="text-sm my-3 ml-5 cursor-pointer">Address Book</p>
        <p className="text-sm my-3 ml-5 cursor-pointer">My Payment Options</p>

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
