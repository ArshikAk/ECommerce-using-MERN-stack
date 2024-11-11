/* eslint-disable react/prop-types */
import { useState } from "react";

const OrderCard = ({ order }) => {
  const [status, setStatus] = useState(order.status || "Order Placed");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="lg:bg-gray-50 border lg:border-gray-200 lg:rounded-lg lg:p-6 lg:mb-4 lg:shadow-sm">
      <div className="flex justify-between items-start">

        <div className="lg:flex lg:items-center lg:w-1/2">
          <img src={order.product.image} alt={order.product.name} className="lg:w-16 lg:h-16 lg:mr-4 lg:rounded-md"/>

          <div className="lg:mx-3">
            <p className="lg:text-gray-800 lg:font-medium">
              {order.product.name} × {order.product.size}
            </p>
            <p className="lg:text-gray-700 lg:mt-1">
              {order.name}
              <br />
              {order.address}, {order.city}, {order.landMark}
              <br />
              {order.phone}
            </p>
          </div>
        </div>

        <div className="lg:text-left">
          <p className="lg:text-gray-600">
            <span className="lg:font-semibold">Items:</span>1
          </p>
          <p className="lg:text-gray-600 lg:mt-1">
            <span className="lg:font-semibold">Payment Method:</span> {order.paymentMethod}
          </p>
          <p className="lg:text-gray-600 lg:mt-1">
            <span className="lg:font-semibold">Date:</span> {order.date}
          </p>
        </div>

        <div className="lg:flex lg:flex-col lg:items-end">
          <p className="lg:text-lg lg:font-semibold lg:text-gray-900">
            ₹ {order.product.price}
          </p>
          <select
            value={status}
            onChange={handleStatusChange}
            className="lg:mt-2 lg:p-2 lg:border lg:rounded-md lg:text-gray-700 lg:bg-white lg:shadow-sm"
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
