import { useEffect, useState } from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import axios from "axios";
import ProductCard from "../../Components/Admin/ProductCard";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/product/getProducts");
        setProducts(result.data);
      } catch{
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center my-10 mx-10">
          <h1 className="text-2xl text-gray-800">List of All Products</h1>
          <button className="border border-black border-solid bg-gray-800 text-white px-10 py-3 rounded-lg">
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

        <div className="w-[95%] mx-auto h-[calc(100vh-200px)] overflow-y-auto prod-hori">
          {loading ? (
            <p className="text-center text-white">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : products.length === 0 ? (
            <p className="text-center text-white">No products available.</p>
          ) : (
            products.map((product,index) => (
              <ProductCard key={index} item={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;