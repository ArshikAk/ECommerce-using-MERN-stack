import { Link } from "react-router-dom"


const LanguageBar = () => {
  return (
    <div className="bg-black text-white flex flex-row  justify-between lg:justify-center items-center relative p-3">
      <p className="py-3 text-sm">Summer Sale for All Swim Suits and Free Delivery - OFF 50%! <Link to="/" className="font-bold underline px-3">ShopNow</Link></p>
      <select className="bg-black text-white lg:absolute lg:right-[10%]">
        <option value="English">English</option>
        <option value="Tamil">Tamil</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Telugu">Telugu</option>
        <option value="Hindi">Hindi</option>
      </select>     
    </div>
  )
}

export default LanguageBar

