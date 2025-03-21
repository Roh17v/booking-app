import addDays from "date-fns/addDays";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface PropertyCount {
  type: string;
  count: number;
}

const PropertyList = () => {
  const { data, loading } = useFetch<PropertyCount[]>(
    `${import.meta.env.VITE_API}/api/hotels/count-by-type`,
    {
      method: "GET",
    }
  );

  const navigate = useNavigate();

  const handleClick = (type: string) => {
    navigate("/hotels", {
      state: {
        type,
        date: [{ startDate: new Date(), endDate: addDays(new Date(), 7) }],
      },
    });
  };
  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="w-52 h-40 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-6 bg-gray-300 w-full rounded-md"></div>
      <div className="h-4 bg-gray-300 w-1/4 rounded-md mt-2"></div>
    </div>
  );

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="max-w-[1024px] flex flex-col md:flex-row gap-4">
      {images.map((images, index) => {
        return loading ? (
          <Skeleton key={index} />
        ) : (
          data && (
            <div
              key={index}
              className="overflow-hidden rounded-md flex-1 hover:cursor-pointer"
              onClick={() => handleClick(data[index].type.slice(0, -1))}
            >
              <img
                src={images}
                alt=""
                className="h-[150px] w-full object-cover"
              />
              <div>
                <h1 className="font-bold capitalize">{data[index].type}</h1>
                <h2 className="font-light text-gray-500">
                  {data[index].count}
                </h2>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PropertyList;
