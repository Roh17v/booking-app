import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsletterSubscription from "../components/NewsLetterSubscription";
import ReserveProperty from "../components/ReserveProperty";
import ThreeDotLoader from "../components/ThreeDotLoader";
import { useAuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import formatCurrency from "../utils/formatcurrency";

const HotelDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch(
    `/api/hotels/${id}`,
    {
      method: "GET",
    }
  );

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [sliderIndex, setSliderIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleArrow = (direction: string) => {
    setSliderIndex((prevIndex) => {
      if (direction === "l") {
        return prevIndex === 0 ? photos.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === photos.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  if (loading) {
    return <ThreeDotLoader />;
  }

  const handleReserve = () => {
    if (user) {
      setModalOpen(true);
    } else {
      const confirm = window.confirm("You need to SignIn to reserve property.");
      if (confirm) {
        navigate("/signin");
      }
    }
  };

  const photos = data.photos.map((photo: any) => ({ src: photo }));

  return (
    <div>
      <Navbar />
      <Header showSearchBar={false} />
      <div className="flex justify-center items-center mt-2">
        {isOpen && (
          <div className="w-full h-screen bg-black bg-opacity-70 flex justify-center items-center fixed top-0 left-0 z-50">
            <div className="relative w-full h-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white text-3xl cursor-pointer z-10 hover:text-gray-300 transition"
              />

              <FontAwesomeIcon
                onClick={() => handleArrow("l")}
                icon={faArrowLeft}
                className="absolute left-8 text-white text-3xl cursor-pointer z-10 hover:text-gray-300 transition"
              />

              <img
                src={photos[sliderIndex].src}
                className="max-w-4xl max-h-3/4 object-contain"
                alt="Property Slide"
              />

              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => handleArrow("r")}
                className="absolute right-8 text-white text-3xl cursor-pointer z-10 hover:text-gray-300 transition"
              />
            </div>
          </div>
        )}

        <div className="w-full max-w-[1024px] relative">
          <div>
            <h1 className="text-3xl font-semibold">{data.name}</h1>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="ml-2">{data.address}</span>
            </div>
            <div className="text-blue-500 mt-2">{data.distance}</div>
            <div className="text-green-600 mt-2">
              Book a Stay at this property at $114 per night with free airport
              taxi
            </div>
            <div className="absolute top-4 right-0">
              <button
                onClick={handleReserve}
                className="bg-blue-500 text-white rounded-md font-semibold px-3 py-2 hover:bg-blue-600 mt-4"
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {photos.slice(0, 6).map((photo: any, i: number) => (
              <div key={i} className="relative group">
                {i < 5 ? (
                  <img
                    src={photo.src}
                    loading="lazy"
                    alt={`Property Image ${i + 1}`}
                    className="w-full h-48 md:h-64 lg:h-72 object-cover shadow-md cursor-pointer"
                    onClick={() => {
                      setIsOpen(true);
                      setSliderIndex(i);
                    }}
                  />
                ) : (
                  <div className="relative">
                    <img
                      src={photo.src}
                      loading="lazy"
                      alt={`Property Image ${i + 1}`}
                      className="w-full h-48 md:h-64 lg:h-72 object-cover shadow-md cursor-pointer"
                      onClick={() => {
                        setIsOpen(true);
                        setSliderIndex(i);
                      }}
                    />
                    {photos.length > 6 && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold cursor-pointer"
                        onClick={() => {
                          setIsOpen(true);
                          setSliderIndex(i);
                        }}
                      >
                        +{photos.length - 6} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {modalOpen && (
            <ReserveProperty setModalOpen={setModalOpen} hotelId={id} />
          )}
          <div className="flex justify-between mt-4 p-2 gap-2 mb-4">
            <div className="flex-[3]">
              <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
              <div className="text-lg">{data.desc}</div>
            </div>
            <div className="p-4 bg-[#ebf3ff] flex-[1] rounded-lg">
              <h1 className="text-xl text-gray-500 font-bold mb-2">
                Perfect for a 9-night stay!
              </h1>
              <div className="text-base">
                Located in the real heart of {data.city}, this property has an
                excellent location score of {data.rating}!
              </div>
              <div className="text-2xl my-2">
                <b className="font-bold text-3xl">{`${formatCurrency(
                  data.cheapestPrice * 9 * 0.9,
                  "InR"
                )}`}</b>{" "}
                (9 nights)
              </div>
              <button
                onClick={handleReserve}
                className="bg-blue-500 text-white rounded-md font-semibold px-3 py-2 hover:bg-blue-600 mt-4 w-full"
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default HotelDetails;
