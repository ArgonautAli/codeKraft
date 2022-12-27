import { React } from "react";
import NavbarMain from "../../components/navbar/Navbar";
import Introduction from "../../components/introduction/Introduction";
import LanguageStripe from "../../components/languageStripe/LanguageStripe";
import SubBody from "../../components/subBody/SubBody";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="pageContainer">
        <NavbarMain />
        <Introduction />
        <LanguageStripe />
        <SubBody />
      </div>
    </>
  );
}

export default HomePage;
