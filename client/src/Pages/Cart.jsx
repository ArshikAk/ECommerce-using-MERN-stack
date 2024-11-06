import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Slide } from '@mui/material';


const Cart = () => {

  let token = localStorage.getItem("token")
  let config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const [cartitems , setCartItems] = useState(null)
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart/getCart",config)
    .then((response) => {
      setCartItems(response.data.cartItems)
    })
  },[])

  useEffect(() => {
    if (cartitems) {
      const tot = cartitems.reduce((sum, item) => sum + item.price, 0);
      setTotal(tot);
    }
  }, [cartitems]);

  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));

    setSeverity("success")
    setNotificationMessage("Product Removed from the Cart")
    setNotificationOpen(true)
  };


  return (
    <div>
      <LanguageBar />
      <Navbar />

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
            <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
              {notificationMessage}
            </Alert>            
      </Snackbar>

      <div className="py-5 bg-gray-100">

      <div className="w-[80%] mx-auto p-5 my-5 shadow-2xl bg-gray-200 rounded-lg">
          <div className="grid grid-cols-5 gap-4 items-center">
            <p className="font-semibold text-center">Product</p>
            <p className="font-semibold text-center">Price</p>
            <p className="font-semibold text-center">Quantity</p>
            <p className="font-semibold text-center">SubTotal</p>
            <p className="font-semibold text-center">More</p>
          </div>
      </div>



        <div className="w-[80%] mx-auto">
          {cartitems &&
            cartitems.map((product, index) => {
              return (
                <CartCard key={index} item={product} onDelete={removeItemFromCart} />
              )
            })
          }
        </div>

        <div className="flex justify-between items-center w-[80%] mx-auto my-10">
          <button className="p-3 px-10 my-5 border border-black hover:bg-gray-300 transition-colors" onClick={() => navigate("/" ,)} >
            Return to Home
          </button>
          <button className="p-3 px-10 my-5 border border-black hover:bg-gray-300 transition-colors">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between items-center w-[80%] mx-auto my-10">
          <div>
            <input type="text" className="border border-black border-solid p-2 px-10" placeholder="Enter Coupon" />
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500 mx-5">Apply Coupon</button>
          </div>

          <div className="border border-black border-solid p-5 w-[30%]" >

            <p className="text-xl font-bold">Cart Total</p>

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

            <div className="flex justify-center items-center">
              <button className="p-2 px-10 mt-3 border border-red-500 border-solid text-white bg-red-500" onClick={() => navigate("/checkout" , { state : {from : "cart" , cartitems}} )}>Proceed to Checkout</button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
