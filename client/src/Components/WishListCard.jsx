/* eslint-disable react/prop-types */
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";
import { Snackbar, Alert, Slide } from '@mui/material';

const WishListCard = ({ item, onDelete }) => {

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
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

  const deleteWishListItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/api/wishList/deleteWishListItem/${item.productId}`, config)
      .then((res) => {
        if (res.data === "Success") {
          setSeverity("success")
          setNotificationOpen(true)
          setNotificationMessage("Product Removed from wishlist")
          onDelete(item.productId);
        }
      })
      .catch((err) => {
        console.log(err);
          setSeverity("error")
          setNotificationOpen(true)
          setNotificationMessage("Failed to remove the product")
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-between items-center border border-white py-5 px-3 lg:p-5 my-10 shadow-2xl bg-gray-200 rounded-lg">

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="w-[40%] lg:w-[30%] flex items-center">
        <img src={item.image} alt="Product" className="w-[50px] h-[50px] mx-3"/>
        <p className="w-full truncate font-medium">{item.name}</p>
      </div>

      <p className="w-[20%] text-center font-medium">₹{item.price}</p>

      <FaRegTrashAlt
        aria-label="Delete item from wishlist"
        size={30}
        className={`mx-2 cursor-pointer p-1 rounded-full bg-opacity-70 transition-colors duration-200 bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white w-[50px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!loading ? deleteWishListItem : null}
      />
    </div>
  );
};

WishListCard.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WishListCard;
