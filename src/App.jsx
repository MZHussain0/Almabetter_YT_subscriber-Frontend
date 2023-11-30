import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import SingleSubscriberPage from "./pages/SingleSubscriberPage";
import SubNamesPage from "./pages/SubNamesPage";
import SubscriberPage from "./pages/SubscriberPage";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the route for the Home page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribers" element={<SubscriberPage />} />
        <Route path="/subscribers/names" element={<SubNamesPage />} />
        <Route path="/subscribers/:id" element={<SingleSubscriberPage />} />
        {/* Define the route for any other page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
