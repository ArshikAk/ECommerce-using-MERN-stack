import { useState , useEffect } from "react";

import image1 from "/header1.jpg"
import image2 from "/header2.jpg"
import image3 from "/header3.jpg"
import image4 from "/header4.jpg"
import image5 from "/header5.jpg"
import image6 from "/header6.jpg"

const images = [image1, image2, image3, image4, image5,image6]


const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
      }, [])

  return (
    <div className="flex">
        <img src={image1} alt="" className="" style={currentSlide == 0 ? {display : "block"} : {display : "none"}}/>
        <img src={image2} alt="" className="" style={currentSlide == 1 ? {display : "block"} : {display : "none"}}/>
        <img src={image3} alt="" className="" style={currentSlide == 2 ? {display : "block"} : {display : "none"}}/>
        <img src={image4} alt="" className="" style={currentSlide == 3 ? {display : "block"} : {display : "none"}}/>
        <img src={image5} alt="" className="" style={currentSlide == 4 ? {display : "block"} : {display : "none"}}/>
        <img src={image6} alt="" className="" style={currentSlide == 5 ? {display : "block"} : {display : "none"}}/>
    </div>
  )
}

export default SlideShow
