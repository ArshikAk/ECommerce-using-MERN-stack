import CartCard from "../Components/CartCard";
import Footer from "../Components/Footer";
import LanguageBar from "../Components/LanguageBar";
import Navbar from "../Components/Navbar";

const products = [1,2]

const Cart = () => {
  return (
    <div>
      <LanguageBar />
      <Navbar />

      <div className="py-5 bg-gray-100">

        <div className="flex justify-between items-center w-[80%] mx-auto border border-white p-5 my-5 shadow-2xl bg-gray-200 rounded-lg">
          <p className="w-[30%] text-left font-semibold">Product</p>
          <p className="w-[20%] text-center font-semibold">Price</p>
          <p className="w-[20%] text-center font-semibold">Quantity</p>
          <p className="w-[20%] text-right font-semibold">SubTotal</p>
        </div>


        <div className="w-[80%] mx-auto">
          {
            products.map((product, index) => {
              return (
                <CartCard key={index}/>
              )
            })
          }
        </div>

        <div className="flex justify-between items-center w-[80%] mx-auto my-10">
          <button className="p-3 px-10 my-5 border border-black hover:bg-gray-300 transition-colors">
            Return to Home
          </button>
          <button className="p-3 px-10 my-5 border border-black hover:bg-gray-300 transition-colors">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between items-center w-[80%] mx-auto my-10">
          <div>
            <input type="text" className="border border-black border-solid p-2 px-10" placeholder="Enter Coupon" />
            <button className="p-2 px-10 my-5 border border-red-500 border-solid text-white bg-red-500 mx-5">Apply Coupon</button>
          </div>

          <div className="border border-black border-solid p-5 w-[30%]" >

            <p className="text-xl font-bold">Cart Total</p>

            <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
              <p className="font-semibold">SubTotal</p>
              <p className="font-semibold">$1000</p>
            </div>

            <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
              <p className="font-semibold">Shipping</p>
              <p className="font-semibold">Free</p>
            </div>

            <div className="flex justify-between py-3 my-2 border-b border-gray-300 border-solid">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">$1000</p>
            </div>

            <div className="flex justify-center items-center">
              <button className="p-2 px-10 mt-3 border border-red-500 border-solid text-white bg-red-500">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
