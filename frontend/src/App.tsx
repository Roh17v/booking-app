import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Listings from "./pages/Listings";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
