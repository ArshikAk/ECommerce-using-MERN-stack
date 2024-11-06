/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

const OrderCard = ({order}) => {

  const navigate = useNavigate()
  return (
            <div className="bg-white border border-gray-300 rounded-lg flex p-4 my-5 items-center shadow-2xl cursor-pointer " onClick={() => navigate(`/productdetail/${order.product.productId}`)}  >
              <div className="flex-shrink-0">
                <img src={order.product.image} alt={order.product.name} className="w-[100px] h-[100px] mx-5"/>
              </div>

              <div className="ml-6 flex-grow items-center">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{order.product.name}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-base font-semibold mt-2">Delivery Address</p>
                  <p className="text-sm font-semibold my-2">{order.name}</p>
                  <p className="text-sm text-gray-600 mt-1 ml-2">Order Date: {order.date}</p>
                  <p className="text-sm text-gray-600 mt-1 ml-2">{order.address}, {order.city}</p>
                  <p className="text-sm text-gray-600 mt-1 ml-2">Landmark: {order.landMark}</p>
                  <p className="text-sm text-gray-600 mt-1 ml-2">Payment Method: {order.paymentMethod}</p>
                </div>
              </div>

              <div>
                    <p className="text-lg font-bold text-gray-800 mx-5">
                    ₹{order.product.price}
                    </p>
              </div>
            </div>
  )
}

export default OrderCard
