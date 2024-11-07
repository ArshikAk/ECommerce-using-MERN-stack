import LanguageBar from "../Components/LanguageBar"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <LanguageBar/>
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <h1 className="my-5 text-[70px] font-bold">404 Not Found</h1>
        <p className="font-semibold">Your visited page not found. You may go to home page.</p>
        <button className="bg-red-500 text-white p-3 px-10 my-5" onClick={() => navigate("/")} >Back to Home Page</button>
      </div>
      <Footer/>
    </>
  )
}

export default ErrorPage
