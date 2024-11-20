import addDays from "date-fns/addDays";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/count-by-cities?cities=berlin,madrid,london,delhi",
    {
      method: "GET",
    }
  );

  const navigate = useNavigate();

  const hanldeClick = (destination: string) => {
    navigate("/hotels", {
      state: {
        destination: destination,
        date: [{ startDate: new Date(), endDate: addDays(new Date(), 7) }],
      },
    });
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="w-[240px] h-60 bg-gray-300 rounded-md mb-2"></div>
    </div>
  );

  return (
    <div className="w-full max-w-[1024px] flex flex-col sm:flex-row gap-4">
      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <div
            onClick={() => hanldeClick("berlin")}
            className="hover:cursor-pointer"
          >
            <img
              loading="lazy"
              src="https://q-xx.bstatic.com/xdata/images/city/max250/977237.jpg?k=6d894f6f1bc6d83e5206ee19d4e593b008640ec596ed3803071cc03aff856b8b&o="
              alt="Berlin"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">Berlin</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[0] !== undefined
                  ? `${data[0]} Properties`
                  : "No Properties"}
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <div
            onClick={() => hanldeClick("madrid")}
            className="hover:cursor-pointer"
          >
            <img
              loading="lazy"
              src="https://cf.bstatic.com/xdata/images/city/600x600/981656.jpg?k=7ef64f3ab955d484f092fc638773f88d5c6844bdee27ea824eb4f25be314f758&o="
              alt="Madrid"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">Madrid</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[1] !== undefined
                  ? `${data[1]} Properties`
                  : "No Properties"}
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <div
            onClick={() => hanldeClick("london")}
            className="hover:cursor-pointer"
          >
            <img
              loading="lazy"
              src="https://r-xx.bstatic.com/xdata/images/city/max250/977262.jpg?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o="
              alt="London"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">London</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[2] !== undefined
                  ? `${data[2]} Properties`
                  : "No Properties"}
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <div
            onClick={() => hanldeClick("delhi")}
            className="hover:cursor-pointer"
          >
            <img
              loading="lazy"
              src="https://r-xx.bstatic.com/xdata/images/city/max250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt="India"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">Delhi</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[3] !== undefined
                  ? `${data[3]} Properties`
                  : "No Properties"}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
