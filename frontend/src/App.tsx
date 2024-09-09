import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PageNotFound from "./components/PageNotFound";
import HotelDetails from "./pages/HotelDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
