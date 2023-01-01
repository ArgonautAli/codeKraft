import NavbarMain from "../../components/navbar/Navbar";
import "../homepage/HomePage.css";
import AboutIntro from "../../components/aboutIntro/AboutIntro";
import AboutFAQ from "../../components/aboutFAQ/AboutFAQ";
import Footer from "../../components/footer/Footer";

function AboutPage() {
  return (
    <>
      <div className="pageContainer">
        {" "}
        <NavbarMain />
        <AboutIntro />
        <hr />
        <AboutFAQ />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
