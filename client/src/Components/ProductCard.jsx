import image from "/productSample.jpg"

const ProductCard = () => {
  return (
    <div className="flex flex-col m-5 justify-center items-start product relative">
      <img src={image} alt="" className="w-[250px] h-[250px]"/>
      <button className="bg-black text-white w-[250px] py-2 product-button absolute bottom-14" onClick={() => console.log("Added")}>Add to Cart</button>

      <p className="font-bold mt-3">Asus Tuf PC</p>
      <p className="mt-2 text-red-500">$1000</p>
    </div>
  )
}

export default ProductCard
