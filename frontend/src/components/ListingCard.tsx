import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="p-4 flex-1 flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold text-blue-500">{name}</div>
          <div className="flex justify-between gap-2">
            <div className="font-medium text-right">
              <div>{ratingText}</div>
              <div className="text-xs text-gray-500">523 ratings</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-primary-blue text-white rounded-t-md rounded-r-md font-semibold px-1 py-2">
                {rating}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col pl-4">
            <div className="border-l-2 border-gray-300 pl-4">
              <div className="font-medium">King Room with Garden View</div>
              <div className="text-xs">
                Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1
                kitchen • 56m²
              </div>
              <div className="text-xs">2 beds (1 double, 1 sofa bed)</div>
            </div>
          </div>
          <div className="text-right whitespace-nowrap">
            <div className="text-sm mt-4 text-right mb-2">8 days 3 night</div>
            <div className="text-lg font-semibold">₹ 59,600</div>
            <div className="text-sm">+₹ 7,152 taxes and charges</div>
            <div className="flex w-full flex-row-reverse">
              <button className="flex gap-2 items-center bg-blue-600 text-white px-2 py-1 text-base rounded font-medium mt-2">
                See availability
                <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
