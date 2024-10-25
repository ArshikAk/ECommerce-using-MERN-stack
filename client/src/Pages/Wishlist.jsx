import Footer from "../Components/Footer"
import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"

import ProductCard from "../Components/ProductCard"

const count = [1,2,3,4,5,6,7,8,9,10]

const Wishlist = () => {
  return (
    <div>
      <LanguageBar/>
      <Navbar/>

      <div className="flex justify-between items-center w-[80%] mx-[10%] my-10">
        <h1>Wishlist (4)</h1>
        <button className="p-3 px-10 my-5 border border-black border-solid">Add all to Cart</button>
      </div>

      <div className="flex justify-evenly items-start flex-wrap w-[80%] mx-[10%]">
        {
          count.map((item, index) => {
            return(
              <ProductCard key={index}/>
            )
          })
        }
      </div>

      <Footer/>
    </div>
  )
}

export default Wishlist
