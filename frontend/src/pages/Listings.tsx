import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";

const Listings = () => {
  return (
    <div>
      <Navbar />
      <Header showSearchBar={false} />
      <div className="w-full max-w-[1024px] flex flex-col items-center mt-4">
        <SearchFilter />
      </div>
    </div>
  );
};

export default Listings;
