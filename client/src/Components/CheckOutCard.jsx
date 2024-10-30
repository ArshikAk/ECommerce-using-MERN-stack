/* eslint-disable react/prop-types */

const CheckOutCard = ({item}) => {
  return (
    <div className="flex justify-between items-center my-3">

      <div className="flex items-center w-[50%]">
        <img src={item.image} alt="Asus Tuf PC" className="w-[50px] h-[50px] " />
        <p className="font-medium mx-3 truncate w-full">{item.name}</p>
      </div>

      <p className="font-medium">${item.price}</p>
    </div>
  )
}

export default CheckOutCard
