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
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col justify-between">
      <img className="w-full h-50 object-cover" src={imgSrc} alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base capitalize">{city}</p>
        <div className="flex items-center mt-2 mb-2">
          <span className="bg-green-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {rating}
          </span>
          <span className="text-gray-600">{ratingText}</span>
        </div>
        <div className="text-gray-900 font-bold text-xl mb-2">
          <span className="text-sm text-gray-500 font-light">
            Starting from{" "}
          </span>
          ₹{price}
        </div>
      </div>
      <div className="px-6 pt-2 pb-2">
        <Link to={`/hotels/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
