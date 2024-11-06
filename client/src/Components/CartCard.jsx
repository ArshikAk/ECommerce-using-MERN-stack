/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import axios from "axios";

const CartCard = ({item , onDelete }) => {

    const [count , setCount] = useState(1)

    let token = localStorage.getItem("token")

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const deleteCartItem = () => {
            
      axios.delete(`http://localhost:8000/api/cart/deleteCartItem/${item.productId}`, config)
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
          
        });
    };


  return (
<div className="grid grid-cols-5 gap-4 items-center border border-white p-5 my-5 shadow-2xl bg-gray-200 rounded-lg">
  <div className="flex items-center">
    <img src={item.image} alt={item.name} className="w-[50px] h-[50px] mx-3" />
    <p className="font-medium">{item.name}</p>
  </div>

  <p className="text-center font-medium">₹{item.price}</p>

  <div className="flex justify-center items-center">
    <button
      className="px-3 py-1 border border-black"
      disabled={count === 1}
      onClick={() => setCount(count - 1)}
      aria-label="Decrease quantity"
    >
      -
    </button>
    <span className="mx-4">{count}</span>
    <button
      className="px-3 py-1 border border-black"
      onClick={() => setCount(count + 1)}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>

  <p className="text-center font-medium">₹{item.price * count}</p>

  <FaRegTrashAlt
    aria-label="Delete item from cart"
    size={30}
    className="mx-auto cursor-pointer p-1 rounded-full bg-opacity-70 transition-colors duration-200 bg-gray-200 text-gray-800 hover:bg-gray-500 hover:text-white"
    onClick={() => deleteCartItem()}
  />

</div>


  );
};

export default CartCard;
