import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getUnderlineStyle = (path) => {
    return location.pathname === path
      ? { textDecoration: "underline", textDecorationColor: "black", textUnderlineOffset: "8px" }
      : { textDecoration: "none" };
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-around items-center py-5 border-b border-gray-300 w-full">
      <p className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Exclusive
      </p>

      <div className="flex flex-row justify-evenly items-center mx-10">
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("/")} onClick={() => navigate("/")}>Home</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("/contact")} onClick={() => navigate("/contact")}>Contact</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("/about")} onClick={() => navigate("/about")}>About</p>
        <p className="mx-5 font-semibold cursor-pointer" style={getUnderlineStyle("/products")} onClick={() => navigate("/products")}>Products</p>
      </div>

      <div className="flex items-center">

        <div className="flex" style={ location.pathname === "/login" || location.pathname === "/register" ? { display: "none" } : { display: "flex" }}>
          <CiHeart size={30} className="mx-2 cursor-pointer" onClick={() => navigate("/wishlist")} />
          <CiShoppingCart size={30} className="mx-2 cursor-pointer" onClick={() => navigate("/cart")} />

          <div className="relative">
            <MdAccountCircle size={30} className="mx-2 cursor-pointer" onClick={toggleDropdown} />

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white bg-opacity-90 border border-gray-300 rounded-lg shadow-lg text-black
                           transition duration-200 ease-in-out transform opacity-0 translate-y-2"
                style={{ opacity: dropdownOpen ? 1 : 0, transform: dropdownOpen ? "translateY(0)" : "translateY(8px)",}}>
                <ul className="flex flex-col">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/account");
                      setDropdownOpen(false);
                    }}
                  >
                    My Account
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/orders");
                      setDropdownOpen(false);
                    }}
                  >
                    My Orders
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("token")
                      navigate("/login")
                    }}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
