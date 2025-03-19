import { Link } from "react-router-dom";
import formatCurrency from "../utils/formatcurrency";

interface ItemProps {
  _id: number;
  photos: [string];
  name: string;
  location: string;
  cheapestPrice: number;
  rating: number;
  desc: string;
  distance: string;
  title: string;
  days: number;
  nights: number;
}

interface ListingCardProps {
  item: ItemProps;
}

const ListingCard = ({ item }: ListingCardProps) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md bg-white w-full">
      <img
        className="w-full md:w-48 h-32 md:h-auto object-cover"
        src={item.photos[0]}
        alt={item.name}
      />
      <div className="p-4 flex-1 flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold text-blue-500">
            {item.name}
          </div>
          <div className="flex justify-between gap-2">
            <div className="font-medium text-right">
              <div>Excellent</div>
              <div className="text-xs text-gray-500">523 ratings</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-primary-blue text-white rounded-t-md rounded-r-md font-semibold px-1 py-2">
                {item.rating}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col pl-4">
            <div className="border-l-2 border-gray-300 pl-4">
              <div className="font-medium">{item.title}</div>
              <div className="text-xs line-clamp-3">{item.desc}</div>
              <div className="text-xs">2 beds (1 double, 1 sofa bed)</div>
            </div>
          </div>
          <div className="text-right whitespace-nowrap">
            <div className="text-sm mt-4 text-right mb-2">{`${item.days} days ${item.nights} night`}</div>
            <div className="text-lg font-semibold">{`${formatCurrency(
              item.cheapestPrice * item.days,
              "INR"
            )}`}</div>
            <div className="text-sm">{`+₹ ${
              item.cheapestPrice * 0.12
            } taxes and charges`}</div>
            <div className="flex w-full flex-row-reverse">
              <Link to={`/hotels/${item._id}`}>
                <button className="relative inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 group">
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    See availability
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
