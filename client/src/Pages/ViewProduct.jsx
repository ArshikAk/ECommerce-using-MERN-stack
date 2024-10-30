import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import ProductCard from "../Components/ProductCard"

import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ViewProduct = () => {

    const [count, setCount] = useState(1)
    const { id } = useParams()
    const [product , setProduct] = useState({})
    const [products , setProducts] = useState([])
    const [relatedProducts , setRelatedProducts] = useState([])
    const [selectedSize , setSelectedSize] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:8000/api/product/getProducts`)
      .then((res) => {
        const prod1 = res.data.filter(item => item.productId == id)
        setProduct(prod1[0])
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },[id])

    useEffect(() => {
      let temp = products.filter(item => item.category == product.category && item.productId !== product.productId)
      setRelatedProducts(temp)
    },[product ,products])

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);


  return (
    <div>
      <LanguageBar/>
      <Navbar/>

      <div className="flex justify-center items-center my-10">

        <div className="mx-10 flex flex-col">
            <img src={product.image} alt="" className="w-[100px] h-[100px] my-3 border border-black border-solid p-5 cursor-pointer" />
            <img src={product.image} alt="" className="w-[100px] h-[100px] my-3 border border-black border-solid p-5 cursor-pointer" />
            <img src={product.image} alt="" className="w-[100px] h-[100px] my-3 border border-black border-solid p-5 cursor-pointer" />
            <img src={product.image} alt="" className="w-[100px] h-[100px] my-3 border border-black border-solid p-5 cursor-pointer" />
        </div>

        <div className="mx-10">
            <img src={product.image} alt="" className="w-[500px] h-[500px]"  />
        </div>

        <div className="flex flex-col w-[25%] mx-20" >
            <div className="border-b border-gray-400 border-solid pb-5">
                <h1 className="text-xl font-bold my-2" >{product.name}</h1>
                <h3 className="text-2xl my-2" >${product.price}</h3>
                <p className="text-sm my-3 leading-6" >{product.description}.</p>
            </div>

            <div className="flex flex-col my-5" >
                <h2 className="text-xl font-semibold" >Size : </h2>
                
                <div className="flex justify-around items-center mt-5">
                    <button className="border border-black border-solid w-[50px] h-[50px] text-center mx-2 hover:bg-red-500 hover:text-white" style={selectedSize == "XS" ? {backgroundColor : "red" , color : "white"} : {}}  onClick={() => setSelectedSize("XS")} >XS</button>
                    <button className="border border-black border-solid w-[50px] h-[50px] text-center mx-2 hover:bg-red-500 hover:text-white" style={selectedSize == "S" ? {backgroundColor : "red" , color : "white"} : {}}  onClick={() => setSelectedSize("S")} >S</button>
                    <button className="border border-black border-solid w-[50px] h-[50px] text-center mx-2 hover:bg-red-500 hover:text-white" style={selectedSize == "M" ? {backgroundColor : "red" , color : "white"} : {}}  onClick={() => setSelectedSize("M")} >M</button>
                    <button className="border border-black border-solid w-[50px] h-[50px] text-center mx-2 hover:bg-red-500 hover:text-white" style={selectedSize == "L" ? {backgroundColor : "red" , color : "white"} : {}}  onClick={() => setSelectedSize("L")} >L</button>
                    <button className="border border-black border-solid w-[50px] h-[50px] text-center mx-2 hover:bg-red-500 hover:text-white" style={selectedSize == "XL" ? {backgroundColor : "red" , color : "white"} : {}}  onClick={() => setSelectedSize("XL")} >XL</button>
                </div>
            </div>

            <div className="flex justify-between items-center" >
                <div className="flex">
                    <button className="px-3 py-1 border border-black" disabled={count === 1} onClick={() => setCount(count - 1)} >-</button>
                    <span className="px-5 py-1 border-y border-solid border-black">{count}</span>
                    <button className="px-3 py-1 border border-black bg-red-500 text-white" onClick={() => setCount(count + 1)}>+</button>
                </div>

                <button className="bg-red-500 text-white py-[6px] px-10 my-5" onClick={() => navigate("/checkout",{ state : {from : "product" , product}})} >Buy Now</button>
            </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 w-[100%] px-[5%] border-y py-10 border-gray-400 border-solid">

          <div className="flex items-center">
            <div className="w-[15px] h-[30px] bg-red-500 rounded">
            </div>
            <p className="font-bold m-3">Related Items</p>
          </div>

          <div className="my-5 flex overflow-x-auto space-x-4 prod-hori">
          { relatedProducts && 
            relatedProducts.map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-5">
                      <ProductCard  product={item}  />
                    </div>
            ))
          }
        </div>

          <div className="flex justify-center items-center">
            <button className="bg-red-500 text-white p-3 px-10 my-5">Show More</button>
          </div>

        </div>


      <Footer/>
    </div>
  )
}

export default ViewProduct
