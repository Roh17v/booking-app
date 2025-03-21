import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API}/api/hotels?featured=true&limit=10`,
    {
      method: "GET",
    }
  );

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const SkeletonCard = () => (
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col justify-between animate-pulse">
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

  return (
    <div className="max-w-[1024px] mx-auto relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 5 }, // Mobile screens
          480: { slidesPerView: 2, spaceBetween: 10 }, // Small tablets
          768: { slidesPerView: 3, spaceBetween: 15 }, // Larger tablets
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktops
        }}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))
          : data.map((property: any) => (
              <SwiperSlide key={property._id}>
                <PropertyCard
                  id={property._id}
                  imgSrc={property.photos[0]}
                  name={property.name}
                  city={property.city}
                  price={property.cheapestPrice}
                  rating={property.rating}
                  ratingText="Excellent"
                />
              </SwiperSlide>
            ))}
      </Swiper>

      <button
        ref={prevButtonRef}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800  px-4 py-2 rounded-full"
      >
        {"<"}
      </button>

      <button
        ref={nextButtonRef}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800  px-4 py-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

export default FeaturedProperties;
