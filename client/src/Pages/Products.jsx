import { useEffect, useState } from "react"
import CategoryBar from "../Components/CategoryBar"
import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import ProductCard from "../Components/ProductCard"
import axios from "axios"
import { useParams } from "react-router-dom"

const Products = () => {

    const [products , setProducts] = useState(null)
    const [search , setSearch] = useState("")
    const {category} = useParams()


    useEffect(() => {
      axios.get("http://localhost:8000/api/product/getProducts")
      .then((res) => {
        if(category != undefined)
        {
          const filteredProducts = res.data.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()))
          setProducts(filteredProducts)
        }
        else{
          setProducts(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },[category])
    
  return (
    <div>
      <LanguageBar/>
      <Navbar/>
      <CategoryBar category={category} />

      <div className="my-10 flex">

        <div className="w-[20%] border-r border-gray-400 border-solid relative flex justify-center items-start">

            <div className="w-[90%] mx-[5%] sticky top-10">
                <h1 className="my-3 text-xl  font-bold">Search Products</h1>
                <input type="text" className="border border-black border-solid w-[80%] rounded h-[35px] bg-gray-200 pl-5 text-black" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </div>

        </div>

        <div className="w-[80%] flex justify-evenly items-center flex-wrap">
            {products &&
                products.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} />
                    )
                })
            }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products
