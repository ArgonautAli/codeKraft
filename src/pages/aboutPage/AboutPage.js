import NavbarMain from "../../components/navbar/Navbar";
import "../homepage/HomePage.css";
import AboutIntro from "../../components/aboutIntro/AboutIntro";
import AboutFAQ from "../../components/aboutFAQ/AboutFAQ";

function AboutPage() {
  return (
    <>
      <div className="pageContainer">
        {" "}
        <NavbarMain />
        <AboutIntro />
        <hr />
        <AboutFAQ />
      </div>
    </>
  );
}

export default AboutPage;
