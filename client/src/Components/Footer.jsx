

const Footer = () => {
  return (
    <>
        <div className="bg-black text-white flex justify-evenly items-start py-10">
          <div className="flex flex-col justify-center">
            <p className="py-2 text-xl font-bold">Exclusive</p>
            <p className="py-2 font-semibold">Subscribe</p>
            <p className="py-2">Get 10% Off your first order</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="py-2 font-bold">Support</p>
            <p className="py-2">111, Bijay sarani, Dharka</p>
            <p className="py-2">exclusive@gmail.com</p>
            <p className="py-2">+91 8248436235</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="py-2 font-bold">Account</p>
            <p className="py-2">My Account</p>
            <p className="py-2">Login / Register</p>
            <p className="py-2">Cart</p>
            <p className="py-2">Wishlist</p>
            <p className="py-2">Shop</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="py-2 font-bold">Quick Link</p>
            <p className="py-2">Privacy Policy</p>
            <p className="py-2">Terms of Use</p>
            <p className="py-2">FAQ</p>
            <p className="py-2">Contact</p>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-gray-700 border-solid bg-black py-5">
          <p className="text-gray-400">CopyRight Rimel 2022. All rights reserved</p>
        </div>
    </>
  )
}

export default Footer
