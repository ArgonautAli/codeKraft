import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/homepage/HomePage";
import AboutPage from "../../pages/aboutPage/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRoutes;
