import { React } from "react";
import NavbarMain from "../../components/navbar/Navbar";
import Introduction from "../../components/introduction/Introduction";
import LanguageStripe from "../../components/languageStripe/LanguageStripe";
import SubBody from "../../components/subBody/SubBody";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="pageContainer">
        <NavbarMain />
        <Introduction />
        <LanguageStripe />
        <SubBody />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
