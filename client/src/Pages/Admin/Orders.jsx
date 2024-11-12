import { useEffect, useState } from "react"
import Sidebar from "../../Components/Admin/Sidebar"
import axios from "axios"
import OrderCard from "../../Components/Admin/OrderCard"

const AdminOrders = () => {

  const [orders, setOrders] = useState(null)

  let token = localStorage.getItem("token")
  let config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() =>  {
    axios.get("http://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/admin/getOrders",config)
    .then((result) => {
      setOrders(result.data.reverse())
    })
    .catch((error) => {
      console.log(error)
    })
  },[])


  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div>
        <Sidebar/>
      </div>

      <div className="p-10 w-full">
        <h1 className="text-2xl font-semibold my-3">Orders</h1>

        <div className="w-[95%] mx-auto h-[calc(100vh-110px)] overflow-y-auto prod-hori">
          {orders && orders.map((order,index) => {
            return <OrderCard key={index} order={order.order} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminOrders
