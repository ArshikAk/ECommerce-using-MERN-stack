/* eslint-disable react/prop-types */
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";

const WishListCard = ({ item, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteWishListItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/api/wishList/deleteWishListItem/${item.productId}`, config)
      .then((res) => {
        if (res.data === "Success") {
          alert("Product Deleted");
          onDelete(item.productId);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete product. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-between items-center border border-white p-5 my-10 shadow-2xl bg-gray-200 rounded-lg">
      <div className="w-[30%] flex items-center">
        <img src={item.image} alt="Product" className="w-[50px] h-[50px] mx-3"/>
        <p className="font-medium">{item.name}</p>
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
