type PropertyCardProps = {
  imgSrc: string;
  name: string;
  city: string;
  price: string;
  rating: number;
  ratingText: string;
};

const PropertyCard = ({
  imgSrc,
  name,
  city,
  price,
  rating,
  ratingText,
}: PropertyCardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imgSrc} alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{city}</p>
        <div className="flex items-center mt-2 mb-2">
          <span className="bg-green-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {rating}
          </span>
          <span className="text-gray-600">{ratingText}</span>
        </div>
        <div className="text-gray-900 font-bold text-xl mb-2">{price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
