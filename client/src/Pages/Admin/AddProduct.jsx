import Sidebar from "../../Components/Admin/Sidebar";
import { useState } from "react";
import axios from "axios";
import { Snackbar, Alert, Slide } from '@mui/material';

const AddProduct = () => {

  const [product, setProduct] = useState({
    productId : null,
    name: "",
    price: 0,
    description: "",
    image: null,
    category: "men's clothing",
  });
  const [imageUrl , setImageUrl] = useState(null)

  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [notificationMessage , setNotificationMessage] = useState("")
  const [notificationOpen,setNotificationOpen] = useState(false)
  const [severity, setSeverity] = useState("error")

  const notificationAction = () => {
    setNotificationOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = async (e) => {

    const file = e.target.files[0];

    const formData = new FormData()
    formData.append("file",file)
    formData.append("upload_preset","unsigned_upload")

    const response = await axios.post(`https://api.cloudinary.com/v1_1/dfxnf7to6/image/upload`,formData);

    setProduct({ ...product, image: response.data.secure_url});
    setImageUrl(response.data.secure_url);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      axios.post("https://exclusiveserver-xr6s7fded-arshiks-projects.vercel.app/api/admin/addProduct",{product},config)
      .then((result) => {
        if(result.data == "Success")
        {
          setSeverity("success")
          setNotificationOpen(true)
          setNotificationMessage("Product Added Successfully")
        }
      })
      .catch((err) => {
        console.log(err)
      })

    } catch (error) {
      console.error("Error uploading image:", error);
    }

  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">

      <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={notificationAction} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={Slide} >
        <Alert onClose={notificationAction} severity={severity} sx={{ width: '100%' }}>
          {notificationMessage}
        </Alert>
      </Snackbar>

      <div className="">
        <Sidebar />
      </div>

      <div className="flex-1 p-8 overflow-auto bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6 mt-5">Add New Product</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-lg p-6 mt-20">

          <label className="block text-gray-700 font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />


          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />


          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
            accept="image/*"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
          >
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>

          {
            imageUrl && <img src={imageUrl} className="w-[100px] h-[100px]" ></img>
          }

          <div className="mt-10 w-full flex justify-center items-center">
            <button type="submit" className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
