import image from "/productSample.jpg";

const CheckOutCard = () => {
  return (
    <div className="flex justify-between items-center my-3">

      <div className="flex items-center">
        <img src={image} alt="Asus Tuf PC" className="w-[50px] h-[50px]" />
        <p className="font-medium mx-3">Asus Tuf PC</p>
      </div>

      <p className="font-medium">$1000</p>
    </div>
  )
}

export default CheckOutCard
