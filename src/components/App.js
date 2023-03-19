import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactsPage";
import NotFound from "../pages/NotFound";
import AppBar from "./AppBar/AppBar";

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
