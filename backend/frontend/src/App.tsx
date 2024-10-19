import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import Listings from "./pages/Listings";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
