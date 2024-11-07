import {Routes , Route} from "react-router-dom"

import ProtectedAdminRoute from "./RouteProtectors/ProtectedAdminRoute"
import ProtectedUserRoute from "./RouteProtectors/ProtectedUserRoute"


import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Wishlist from "./Pages/Wishlist"
import ErrorPage from "./Pages/ErrorPage"
import CheckOut from "./Pages/CheckOut"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import ViewProduct from "./Pages/ViewProduct"
import OrderSuccess from "./Pages/OrderSuccess"
import Orders from "./Pages/Orders"
import Account from "./Pages/Account"


import Dashboard from "./Pages/Admin/DashBoard"
import AdminProducts from "./Pages/Admin/Products"
import AdminOrders from "./Pages/Admin/Orders"
import AddProduct from "./Pages/Admin/AddProduct"
import UpdateProduct from "./Pages/Admin/UpdateProduct"

function App() {

  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />


      <Route path="/" element={<ProtectedUserRoute/>} >
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products/>} />
        <Route path="productdetail/:id" element={<ViewProduct />} />
        <Route path="ordersuccess" element={<OrderSuccess />} />
        <Route path="orders" element={<Orders />} />
        <Route path="account" element={<Account />} />
      </Route>

      <Route path="/admin" element={<ProtectedAdminRoute/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="orders" element={<AdminOrders/>}/>
        <Route path="addProduct" element={<AddProduct/>}/>
        <Route path="updateProduct/:id" element={<UpdateProduct/>}/>
      </Route>
    </Routes>
  )
}

export default App
