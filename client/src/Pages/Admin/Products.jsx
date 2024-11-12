import { useEffect, useState } from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import axios from "axios";
import ProductCard from "../../Components/Admin/ProductCard";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Slide } from '@mui/material';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/product/getProducts");
        setProducts(result.data);
      } catch{
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate()
  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const deleteProduct = (id) => {
    let tempProducts = products.filter(item => item.productId != id)
    setProducts(tempProducts)
    setSeverity("success")
    setNotificationOpen(true)
    setNotificationMessage("Product Deleted Successfully")
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="h-full">
        <Sidebar />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center my-10 mx-10">
          <h1 className="text-2xl text-gray-800">List of All Products</h1>
          <button className="border border-black border-solid bg-gray-800 text-white px-10 py-3 rounded-lg" onClick={() => navigate("/admin/addProduct")} >
            Add Product
          </button>
        </div>

        <div className="w-[95%] mx-auto p-4 mt-10 mb-5 shadow-xl bg-gray-800 text-white rounded-lg">
          <div className="flex justify-between px-4 font-semibold text-sm">
            <p className="w-1/3 text-left">Product</p>
            <p className="w-1/4 text-center">Category</p>
            <p className="w-1/4 text-center">Price</p>
            <p className="text-center">Action</p>
          </div>
        </div>

        <div className="w-[95%] mx-auto h-[calc(100vh-340px)] overflow-scroll prod-hori">
          {loading ? (
            <p className="text-center text-white">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : products.length === 0 ? (
            <p className="text-center text-white">No products available</p>
          ) : (
            products.map((product,index) => (
              <ProductCard key={index} item={product} onDelete={deleteProduct}/>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
