import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header showSearchBar={true} />
      <div className="flex flex-col mt-16 items-center gap-4 z-0">
        <Featured />
        <h1 className="text-xl font-bold w-[1024px]">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="text-xl font-bold w-[1024px]">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
