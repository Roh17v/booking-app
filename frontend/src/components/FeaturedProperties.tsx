import useFetch from "../hooks/useFetch";
import PropertyCard from "./PropertyCard";

interface PropertyProps {
  _id: string;
  name: string;
  city: string;
  type: string;
  cheapestPrice: number;
  rating: number;
  photos: [string];
  ratingText: string;
  price: number;
}

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "https://5000-roh17v-bookingapp-67gwvi3g9g3.ws-us116.gitpod.io/api/hotels?featured=true&limit=4",
    {
      method: "GET",
    }
  );

  const SkeletonCard = () => {
    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg flex flex-col justify-between animate-pulse">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="flex items-center mt-2 mb-2">
            <div className="h-4 w-10 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1024px]">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          )) // Show 4 skeleton loaders while loading
        : data.map((property: any) => (
            <PropertyCard
              key={property._id}
              imgSrc={property.photos[0]}
              name={property.name}
              city={property.city}
              price={property.cheapestPrice}
              rating={property.rating}
              ratingText="Excellent"
            />
          ))}
    </div>
  );
};

export default FeaturedProperties;
