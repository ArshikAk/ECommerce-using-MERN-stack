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
    <div className="lg:flex lg:justify-between lg:items-center lg:border lg:border-gray-300 lg:p-4 lg:px-8 lg:my-3 lg:shadow-lg lg:bg-gray-100 lg:rounded-lg lg:mx-auto lg:relative">
 
      <div className="lg:flex lg:items-center lg:w-1/3">
        <img src={item.image} alt={item.name} className="lg:w-[40px] lg:h-[40px] lg:mx-2 lg:rounded-md" />
        <p className="lg:ont-medium lg:w-[250px] lg:text-sm lg:overflow-hidden lg:text-ellipsis lg:whitespace-nowrap">{item.name}</p>
      </div>
      
      <p className="lg:w-1/4 lg:font-medium lg:text-center lg:text-sm">{item.category}</p>
      
      <p className="lg:w-1/4 lg:font-medium lg:text-center lg:text-sm">₹{item.price.toFixed(2)}</p>
      
      <div className="lg:flex lg:justify-center">
        <button className="lg:bg-gray-800 lg:text-white lg:px-2 lg:py-1 lg:rounded-md">
          <CiMenuBurger size={14} onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
        </button>
        {isDropdownOpen && (
          <div className="lg:absolute lg:right-20 lg:-top-5 lg:mt-4 lg:w-24 lg:bg-white border lg:border-gray-300 lg:rounded-lg lg:shadow-lg lg:z-30">
            <ul>
              <li className="lg:px-4 lg:py-2 lg:text-sm lg:text-gray-700 lg:hover:bg-gray-100 cursor-pointer" onClick = {() => navigate(`/admin/updateProduct/${item.productId}`)}>Edit</li>
              <li onClick={handleDelete} className="lg:px-4 lg:py-2 lg:text-sm lg:text-red-500 lg:hover:bg-gray-100 lg:cursor-pointer">Delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
