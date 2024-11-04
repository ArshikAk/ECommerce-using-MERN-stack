/* eslint-disable react/prop-types */

const ReviewCard = ({item}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 mb-4 w-full">
      <div className="flex items-center mb-2">
        <span className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded my-3">
          {item.email}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed mx-3">{item.feedBack}</p>
    </div>
  );
};

export default ReviewCard;
