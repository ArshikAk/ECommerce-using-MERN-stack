/* eslint-disable react/prop-types */
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const ProductCard = ({ item }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleEdit = () => {
        console.log("Edit product:", item.name);
        setIsDropdownOpen(false);
    };

    const handleDelete = () => {
        console.log("Delete product:", item.name);
        setIsDropdownOpen(false);
    };

  return (
    <div className="flex justify-between items-center border border-gray-300 p-4 px-8 my-3 shadow-lg bg-gray-100 rounded-lg mx-auto">
 
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
          <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul>
              <li onClick={handleEdit} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Edit</li>
              <li onClick={handleDelete} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
