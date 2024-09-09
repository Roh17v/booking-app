import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ThreeDotLoader from "../components/ThreeDotLoader";

const HotelDetails = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData("Hello World");
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <ThreeDotLoader />;
  }
  
  return (
    <div>
      <Navbar />
      <Header showSearchBar={false} />
      <div></div>
    </div>
  );
};

export default HotelDetails;
