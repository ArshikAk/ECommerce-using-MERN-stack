/* eslint-disable react/prop-types */

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {

  const navigate = useNavigate()
  let token = localStorage.getItem("token")

  const location = useLocation()


  let config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const addCart = () => {
    axios.post("http://localhost:8000/api/cart/addCartItem",{product},config)
    .then((res) => {
      if(res.data == "Success")
      {
        alert("Product Added to Cart")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const addWishList = () => {
    axios.post("http://localhost:8000/api/wishList/addWishListItem",{product},config)
    .then((res) => {
      if(res.data == "Success")
      {
        alert("Product Added to Wishlist")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const deleteWishListItem = () => {
    axios.delete(`http://localhost:8000/api/wishList/deleteWishListItem/${product.productId}`,config)
    .then((res) => {
      if(res.data == "Success")
      {
        alert("Product Deleted")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className="flex flex-col m-10 justify-center items-start product relative w-[250px]">

      <img src={product.image} alt={product.name} className="w-[250px] h-[250px] cursor-pointer" onClick={() => navigate(`/productdetail/${product.productId}`)}  />

      <button className="bg-black text-white w-[250px] py-2 product-button"
        style = {location.pathname != "/wishlist" ? {display : "block"} : {display : "none"} }
        onClick={() => addCart()}>Add to Cart</button>

      <p className="font-bold mt-3 truncate w-full ">{product.name}</p>
      <p className="mt-2 text-red-500">${product.price}</p>

      <CiHeart size={35} className="mx-2 cursor-pointer absolute right-1 top-3 p-1 rounded-full bg-opacity-70 
        transition-colors duration-200 bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white" 
        onClick={() => addWishList()}
        style = {location.pathname != "/wishlist" ? {display : "block"} : {display : "none"} }
      />

      <FaRegTrashAlt size={30} className="mx-2 cursor-pointer absolute right-1 top-3 p-1 rounded-full bg-opacity-70 
        transition-colors duration-200 bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white w-[50px]" 
        onClick={() => deleteWishListItem()}
        style = {location.pathname == "/wishlist" ? {display : "block"} : {display : "none"} }
      />

    </div>
  );
};

export default ProductCard;
