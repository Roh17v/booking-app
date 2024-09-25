import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/SearchFilterContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <SearchContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchContextProvider>
);
