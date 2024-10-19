import { Link } from "react-router-dom";

type PropertyCardProps = {
  imgSrc: string;
  name: string;
  city: string;
  price: string;
  rating: number;
  ratingText: string;
  id: string;
};

const PropertyCard = ({
  id,
  imgSrc,
  name,
  city,
  price,
  rating,
  ratingText,
}: PropertyCardProps) => {
  return (
    <div className="lg:max-w-xs w-full sm:max-w-[200px] md:max-w-[300px] rounded overflow-hidden shadow-lg flex flex-col justify-between mx-auto">
      <img
        className="w-full h-36 md:h-40 lg:h-52 object-cover"
        src={imgSrc}
        alt="Property"
      />
      <div className="px-4 py-2 sm:px-2 sm:py-1 md:px-4 md:py-2">
        <div className="font-bold text-lg sm:text-base md:text-lg mb-2">
          {name}
        </div>
        <p className="text-gray-700 text-sm sm:text-xs capitalize">{city}</p>
        <div className="flex items-center mt-2 mb-2">
          <span className="bg-green-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {rating}
          </span>
          <span className="text-gray-600 text-sm sm:text-xs">{ratingText}</span>
        </div>
        <div className="text-gray-900 font-bold text-lg sm:text-base md:text-lg mb-2">
          <span className="text-sm sm:text-xs text-gray-500 font-light">
            Starting from{" "}
          </span>
          ₹{price}
        </div>
      </div>
      <div className="px-4 sm:px-2 pt-2 pb-4">
        <Link to={`/hotels/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-1 md:py-2 md:px-4 sm:px-2 text-sm md:text-base rounded mb-4 w-full">
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
