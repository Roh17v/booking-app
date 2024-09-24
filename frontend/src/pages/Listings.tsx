import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";
import useFetch from "../hooks/useFetch";
import { calculateDaysAndNights } from "../utils/getdaysandnight";

const Listings = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `https://5000-roh17v-bookingapp-67gwvi3g9g3.ws-us116.gitpod.io/api/hotels?city=${location.state.destination.toLowerCase()}`,
    { method: "GET" }
  );
  const result = calculateDaysAndNights(
    location.state.date[0].startDate,
    location.state.date[0].endDate
  );

  const SkeletonLoader = () => {
    return (
      <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md bg-white w-full animate-pulse">
        <div className="w-full md:w-48 h-32 md:h-auto bg-gray-300"></div>
        <div className="p-4 flex-1 flex-col gap-4">
          <div className="flex justify-between">
            <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
            <div className="flex justify-between gap-2">
              <div className="font-medium text-right">
                <div className="w-12 h-6 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded mt-1"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col pl-4">
              <div className="border-l-2 border-gray-300 pl-4">
                <div className="w-40 h-6 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="text-right whitespace-nowrap">
              <div className="w-20 h-4 bg-gray-300 rounded mt-4 mb-2"></div>
              <div className="w-16 h-6 bg-gray-300 rounded"></div>
              <div className="w-32 h-4 bg-gray-300 rounded mt-2"></div>
              <div className="flex w-full flex-row-reverse mt-4">
                <div className="w-36 h-10 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <Header showSearchBar={false} />
      <div className="w-full flex justify-center">
        <div className="flex w-full max-w-[1024px] gap-2">
          <div className="w-1/3 sticky top-0 h-screen">
            <SearchFilter />
          </div>
          <div className="space-y-4 grow mt-4">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : data.map((item: any, index: number) => (
                  <ListingCard
                    key={index}
                    item={{...item,...result}}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
function getdaysandnights() {
  throw new Error("Function not implemented.");
}
