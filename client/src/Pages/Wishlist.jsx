import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";
import WishListCard from "../Components/WishListCard";
import axios from "axios";
import { Snackbar, Alert, Slide } from '@mui/material';

const Wishlist = () => {
  const [items, setItems] = useState(null);
  const [count, setCount] = useState(0);

  let token = localStorage.getItem("token");

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  useEffect(() => {
    axios
      .get("https://exclusiveserver.vercel.app/api/wishlist/getWishList", config)
      .then((response) => {
        setItems(response.data.items);
      });
  }, []);

  useEffect(() => {
    if (items) {
      setCount(items.length);
    }
  }, [items]);

  const removeItemFromWishlist = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  };

  const addToCart = () => {
    axios.post("https://exclusiveserver.vercel.app/api/cart/addToCart",{items},config)
    .then((result) => {
      if(result.data == "Success")
      {
        setSeverity("success")
        setNotificationMessage("All Items are added to cart")
        setNotificationOpen(true)
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="h-[100vh]">
      <LanguageBar />
      <Navbar />

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="flex justify-between items-center w-[80%] mx-[10%] mt-10">
        <h1>Wishlist ({count})</h1>
        <button className="p-3 px-10 my-5 border border-black border-solid hover:bg-gray-300 transition-colors" onClick={() => addToCart()} >Add all to Cart</button>
      </div>

      <div className="lg:w-[80%] mx-5 lg:mx-[10%] min-h-[50%]  overflow-y-auto prod-hori">
        {items && items.length > 0 ? (
          items.map((item, index) => {
            return (
              <WishListCard
                key={index}
                item={item}
                onDelete={removeItemFromWishlist}
              />
            );
          })
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
