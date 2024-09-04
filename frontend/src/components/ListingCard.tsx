interface ListingCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  ratingText: string;
  description: string;
  distance: string;
}

const ListingCard = ({
  image,
  name,
  location,
  price,
  rating,
  ratingText,
  description,
  distance,
}: ListingCardProps) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md bg-white w-full">
      <img
        className="w-full md:w-48 h-32 md:h-auto object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600 text-sm">{location}</p>
          <p className="text-sm text-gray-500 mt-1">{distance}</p>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4 w-full">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              {rating}
            </div>
            <span className="ml-2 text-gray-600">{ratingText}</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">{price}</div>
          <button className="bg-blue-500 px-4 py-2 text-white rounded-lg">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
