import {Routes , Route} from "react-router-dom"

import ProtectedRoute from "./Components/ProtectedRoute"


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

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><CheckOut /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="/products/:category?" element={<ProtectedRoute><Products/></ProtectedRoute>} />
      <Route path="/productdetail/:id" element={<ProtectedRoute><ViewProduct /></ProtectedRoute>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
