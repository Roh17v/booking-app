import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://5000-roh17v-bookingapp-67gwvi3g9g3.ws-us116.gitpod.io/api/hotels/count-by-cities?cities=berlin,madrid,london",
    {
      method: "GET",
    }
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="w-[240px] h-60 bg-gray-300 rounded-md mb-2"></div>
    </div>
  );

  return (
    <div className="w-full max-w-[1024px] flex gap-4">
      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <img
              loading="lazy"
              src="https://cf.bstatic.com/xdata/images/city/max250/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="Berlin"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">Berlin</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[0] !== undefined
                  ? `${data[0]} hotels`
                  : "No hotels"}
              </h2>
            </div>
          </>
        )}
      </div>

      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <img
              loading="lazy"
              src="https://cf.bstatic.com/xdata/images/city/max250/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="Madrid"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">Madrid</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[1] !== undefined
                  ? `${data[1]} hotels`
                  : "No hotels"}
              </h2>
            </div>
          </>
        )}
      </div>

      <div className="relative">
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <img
              loading="lazy"
              src="https://cf.bstatic.com/xdata/images/city/max250/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="London"
              className="w-full object-cover overflow-hidden rounded-md"
            />
            <div className="absolute left-4 bottom-6">
              <h1 className="text-xl font-bold text-white">London</h1>
              <h2 className="text-lg font-semibold text-white">
                {data && data[2] !== undefined
                  ? `${data[2]} hotels`
                  : "No hotels"}
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
