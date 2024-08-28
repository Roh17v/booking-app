import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Listings from "./pages/Listings/Listings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
