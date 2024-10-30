/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CategoryBar = (props) => {

  const navigate = useNavigate()

  const getUnderlineStyle = (cad) => {

    return cad === props.category

      ? { textDecoration: "underline", textDecorationColor: "black", textUnderlineOffset: "8px" }
      : { textDecoration: "none" };
  };


  return (
    <div className="flex flex-row justify-around items-center py-5 border-b border-gray-300 w-full">

        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle()} onClick={() => navigate("/products")}>All</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("men")} onClick={() => navigate("/products/men")}>Men&apos;s Wear</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("women")} onClick={() => navigate("/products/women")}>Women&apos;s Wear</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("electronics")} onClick={() => navigate("/products/electronics")}>Electronics</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("jewelery")} onClick={() => navigate("/products/jewelery")}>Jewellery</p>

    </div>
  );
};

export default CategoryBar;
