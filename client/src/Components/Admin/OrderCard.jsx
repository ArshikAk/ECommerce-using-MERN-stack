/* eslint-disable react/prop-types */
import { useState } from "react";

const OrderCard = ({ order }) => {
  const [status, setStatus] = useState(order.status || "Order Placed");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 shadow-sm">
      <div className="flex justify-between items-start">

        <div className="flex items-center w-1/2">
          <img src={order.product.image} alt={order.product.name} className="w-16 h-16 mr-4 rounded-md"/>

          <div className="mx-3">
            <p className="text-gray-800 font-medium">
              {order.product.name} × {order.product.size}
            </p>
            <p className="text-gray-700 mt-1">
              {order.name}
              <br />
              {order.address}, {order.city}, {order.landMark}
              <br />
              {order.phone}
            </p>
          </div>
        </div>

        <div className="text-left">
          <p className="text-gray-600">
            <span className="font-semibold">Items:</span>1
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Payment Method:</span> {order.paymentMethod}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Date:</span> {order.date}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-lg font-semibold text-gray-900">
            ₹ {order.product.price}
          </p>
          <select
            value={status}
            onChange={handleStatusChange}
            className="mt-2 p-2 border rounded-md text-gray-700 bg-white shadow-sm"
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
