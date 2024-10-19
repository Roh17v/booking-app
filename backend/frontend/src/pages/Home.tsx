import { useEffect } from "react";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewsLetterSubscription from "../components/NewsLetterSubscription";
import PropertyList from "../components/PropertyList";
import { useSearchContext } from "../context/SearchFilterContext";

const Home = () => {
  const { resetFilters } = useSearchContext();

  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <div>
      <Navbar />
      <Header showSearchBar={true} />

      <div className="flex flex-col mt-8 md:mt-12 items-center gap-8 w-full px-4">
        <section className="w-full max-w-[1024px]">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            Trending Destinations
          </h1>
          <Featured />
        </section>

        <section className="w-full max-w-[1024px]">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            Browse by property type
          </h1>
          <PropertyList />
        </section>

        <section className="w-full max-w-[1024px]">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            Homes guests love
          </h1>
          <FeaturedProperties />
        </section>
      </div>

      <NewsLetterSubscription />
      <Footer />
    </div>
  );
};

export default Home;
