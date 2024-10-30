import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LanguageBar />
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow text-center p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-green-600">Thank You for Your Order!</h1>
        <p className="mt-4 text-lg text-gray-700">Your order has been successfully placed.</p>
        <p className="mt-2 text-gray-600">We appreciate your business and hope you enjoy your purchase.</p>
        <Link to="/" className="mt-6">
          <button className="px-6 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            Continue Shopping
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
