import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";

const Listings = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header showSearchBar={false} />
      <div className="w-full flex justify-center">
        <div className="flex w-full max-w-[1024px] gap-2">
          <div className="w-1/4 sticky top-0 h-screen">
            <SearchFilter />
          </div>
          <div className="space-y-4 grow mt-4">
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              name="Aparthotel Stare Miasto"
              location="Madrid"
              price="Starting from $120"
              rating={8.9}
              ratingText="Excellent"
              description="Modern apartment hotel with free Wi-Fi and breakfast."
              distance="500m from city center"
            />
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              name="Comfort Suites Airport"
              location="Austin"
              price="Starting from $140"
              rating={9.3}
              ratingText="Exceptional"
              description="Conveniently located with free airport shuttle."
              distance="2km from airport"
            />
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              name="Comfort Suites Airport"
              location="Austin"
              price="Starting from $140"
              rating={9.3}
              ratingText="Exceptional"
              description="Conveniently located with free airport shuttle."
              distance="2km from airport"
            />
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              name="Comfort Suites Airport"
              location="Austin"
              price="Starting from $140"
              rating={9.3}
              ratingText="Exceptional"
              description="Conveniently located with free airport shuttle."
              distance="2km from airport"
            />
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              name="Comfort Suites Airport"
              location="Austin"
              price="Starting from $140"
              rating={9.3}
              ratingText="Exceptional"
              description="Conveniently located with free airport shuttle."
              distance="2km from airport"
            />
            <ListingCard
              image="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
              name="Comfort Suites Airport"
              location="Austin"
              price="Starting from $140"
              rating={9.3}
              ratingText="Exceptional"
              description="Conveniently located with free airport shuttle."
              distance="2km from airport"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
