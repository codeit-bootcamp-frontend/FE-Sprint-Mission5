import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="items" element={<MarketPage />} />
        <Route path="additem" element={<AddItemPage />} />
        <Route path="community" element={<CommunityFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
