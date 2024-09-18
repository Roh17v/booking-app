import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsletterSubscription from "../components/NewsLetterSubscription";
import ThreeDotLoader from "../components/ThreeDotLoader";

const HotelDetails = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleArrow = (direction: string) => {
    setSliderIndex((prevIndex) => {
      if (direction === "l") {
        return prevIndex === 0 ? photos.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === photos.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData("Hello World");
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <ThreeDotLoader />;
  }

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
            <h1 className="text-3xl font-semibold">Tower Street Apartments</h1>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="ml-2">5 Braztowa cracakov town, poland</span>
            </div>
            <div className="text-blue-500 mt-2">
              Excellent Location - 500m from center
            </div>
            <div className="text-green-600 mt-2">
              Book a Stay at this property at $114 per night with free airport
              taxi
            </div>
            <div className="absolute top-4 right-0">
              <button className="bg-blue-500 text-white rounded-md font-semibold px-3 py-2 hover:bg-blue-600 mt-4">
                Reserve or Book Now!
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {photos.slice(0, 6).map((photo, i) => (
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
          <div className="flex justify-between mt-4 p-2 gap-2 mb-4">
            <div className="flex-[3]">
              <h1 className="text-2xl font-bold mb-2">
                Stay in Heart of Krakov
              </h1>
              <div className="text-lg">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </div>
            </div>
            <div className="p-4 bg-[#ebf3ff] flex-[1] rounded-lg">
              <h1 className="text-xl text-gray-500 font-bold mb-2">
                Perfect for a 9-night stay!
              </h1>
              <div className="text-base">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </div>
              <div className="text-2xl my-2">
                <b className="font-bold text-3xl">$945</b> (9 nights)
              </div>
              <button className="bg-blue-500 text-white rounded-md font-semibold px-3 py-2 hover:bg-blue-600 mt-4 w-full">
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
