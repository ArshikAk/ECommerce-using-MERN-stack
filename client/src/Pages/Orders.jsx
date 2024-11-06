import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";
import OrderCard from "../Components/OrderCard";
import axios from "axios";

const Orders = () => {

    let token = localStorage.getItem("token")

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [orders, setOrders] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/orders/getOrders",config)
        .then((result) => {
            setOrders(result.data.reverse())
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

  return (
    <div className="flex flex-col min-h-screen">
      <LanguageBar />
      <Navbar />
      <div className="flex-grow p-8 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Orders</h1>
        {
            orders && orders.map((item, index) => {
                return <OrderCard key={index} order={item.order} />
            })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
