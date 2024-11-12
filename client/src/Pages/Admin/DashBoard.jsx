/* eslint-disable react/prop-types */
import axios from "axios";
import Sidebar from "../../Components/Admin/Sidebar";
import { useState, useEffect } from 'react';

const MetricCard = ({ title, value }) => (
  <div className="flex flex-col justify-center items-center border border-solid border-black p-5 rounded-2xl group
    hover:bg-gray-800 transition-all ease-in-out duration-500 hover:scale-110 w-[220px] h-[220px] shadow-md hover:shadow-lg">
    <h1 className="text-2xl my-3 font-bold group-hover:text-white">{title}</h1>
    <p className="mt-2 text-xl group-hover:text-white">{value}</p>
  </div>
);

const DashBoard = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);

  let token = localStorage.getItem("token");

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios.get("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/admin/getDashboardData",config)
    .then((result) => {
        console.log(result.data)
        setTotalSales(result.data.totalSales);
        setTotalOrders(result.data.totalOrders);
        setTotalUsers(result.data.totalUsers);
        setTotalProducts(result.data.totalProducts);
        setRecentOrders(result.data.recentOrders)
    })
    .catch((err) => {
        console.log(err)
    })
  },[])

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex mt-10 p-10 justify-around items-center flex-wrap">
          <MetricCard title="Total Sales" value={`₹${totalSales}`} />
          <MetricCard title="Orders" value={totalOrders} />
          <MetricCard title="Users" value={totalUsers} />
          <MetricCard title="Products" value={totalProducts} />
        </div>

        <div className="m-5 p-5">
          <h2 className="text-2xl font-bold my-10">Recent Orders</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border border-black border-solid bg-gray-800 text-white">
                <th className="border border-white border-solid px-4 py-3">Customer</th>
                <th className="border border-white border-solid px-4 py-3">Product</th>
                <th className="border border-white border-solid px-4 py-3">Date</th>
                <th className="border border-white border-solid px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-800 border-solid hover:bg-gray-100">
                  <td className="border border-gray-800 px-4 py-5">{order.order.name}</td>
                  <td className="border border-gray-800 px-4 py-5">{order.order.product.name}</td>
                  <td className="border border-gray-800 px-4 py-5">{order.order.date}</td>
                  <td className="border border-gray-800 px-4 py-5">{order.order.product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
