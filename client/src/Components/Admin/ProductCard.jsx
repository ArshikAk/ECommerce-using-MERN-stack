/* eslint-disable react/prop-types */
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ item , onDelete }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/admin/deleteProduct/${item.productId}`,config)
        .then((result) => {
          if(result.data == "Success")
          {
            onDelete(item.productId)
          }
        })
        .catch((err) => {
          console.log(err)
        })
        setIsDropdownOpen(false);
    };

  return (
    <div className="flex justify-between items-center border border-gray-300 p-4 px-8 my-3 shadow-lg bg-gray-100 rounded-lg mx-auto relative">
 
      <div className="flex items-center w-1/3">
        <img src={item.image} alt={item.name} className="w-[40px] h-[40px] mx-2 rounded-md" />
        <p className="font-medium w-[250px] text-sm overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</p>
      </div>
      
      <p className="w-1/4 font-medium text-center text-sm">{item.category}</p>
      
      <p className="w-1/4 font-medium text-center text-sm">₹{item.price.toFixed(2)}</p>
      
      <div className="flex justify-center">
        <button className="bg-gray-800 text-white px-2 py-1 rounded-md">
          <CiMenuBurger size={14} onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-20 -top-5 mt-4 w-24 bg-white border border-gray-300 rounded-lg shadow-lg z-30">
            <ul>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick = {() => navigate(`/admin/updateProduct/${item.productId}`)}>Edit</li>
              <li onClick={handleDelete} className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer">Delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
