import { useState } from "react";
import image from "/productSample.jpg";

const CartCard = () => {

    const [count , setCount] = useState(1)
  return (
    <div className="flex justify-between items-center border border-white p-5 my-5 shadow-2xl bg-gray-200 rounded-lg">

      <div className="w-[30%] flex items-center">
        <img src={image} alt="Asus Tuf PC" className="w-[50px] h-[50px] mx-3" />
        <p className="font-medium">Asus Tuf PC</p>
      </div>


      <p className="w-[20%] text-center font-medium">$1000</p>


      <div className="w-[20%] flex justify-center items-center">
        <button className="px-3 py-1 border border-black" disabled={count === 0} onClick={() => setCount(count - 1)} >-</button>
        <span className="mx-4">{count}</span>
        <button className="px-3 py-1 border border-black" onClick={() => setCount(count + 1)}>+</button>
      </div>

      <p className="w-[20%] text-right font-medium">$1000</p>
    </div>
  );
};

export default CartCard;
