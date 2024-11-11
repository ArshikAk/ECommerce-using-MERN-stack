/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";

const AddressCard = ({ item , index, onEdit, onDelete }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="border border-gray-300 lg:rounded-lg lg:p-8 shadow-sm flex items-start justify-between relative lg:my-5 hover:shadow-2xl hover:border-black">
      <div>

        <div className="lg:mt-2 flex">
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="font-semibold text-gray-800 lg:mx-3">{item.phone}</p>
        </div>

        <div className="flex lg:mt-2">
            <p className="text-gray-500">Address - {item.address + ", " + item.city + "."}</p>
            <p className="text-gray-500 lg:mx-2">LandMark - {item.landMark}</p>
        </div>

        <div className="lg:mt-2">
          <p className="font-semibold text-gray-800">{item.pincode}</p>
        </div>

      </div>

      <div className="relative">
        <FiMoreVertical
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          size={24}
          onClick={toggleDropdown}
        />

        {isDropdownOpen && (
          <div className="absolute lg:right-0 lg:mt-2 lg:w-32 bg-white border border-gray-200 lg:rounded-lg shadow-lg z-10">
            <button
              onClick={() => {
                toggleDropdown()
                onEdit(index)
              }}
              className="flex items-center lg:px-4 lg:py-2 w-full text-gray-700 hover:bg-gray-100 hover:text-red-500"
            >
              <MdEdit className="lg:mr-2" /> Edit
            </button>
            <button
              onClick={() => {
                toggleDropdown()
                onDelete(index)
              }}
              className="flex items-center lg:px-4 lg:py-2 w-full text-gray-700 hover:bg-gray-100 hover:text-red-500"
            >
              <MdDelete className="lg:mr-2" /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
