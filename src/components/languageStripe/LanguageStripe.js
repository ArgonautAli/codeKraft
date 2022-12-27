import "./LanguageStripe.scss";
import javascriptLogo from "../../assets/images/javascript.png";
import pythonLogo from "../../assets/images/pythonpng.png";
import cLogo from "../../assets/images/cpng.png";

function LanguageStripe() {
  return (
    <>
      <div className="lang-container">
        <div className="wrap-image">
          <img src={javascriptLogo} style={{ height: "76px", width: "76px" }} />
        </div>
        <div className="wrap-image">
          {" "}
          <img src={pythonLogo} style={{ height: "76px", width: "76px" }} />
        </div>
        <div className="wrap-image">
          {" "}
          <img src={cLogo} style={{ height: "76px", width: "76px" }} />
        </div>
      </div>
    </>
  );
}

export default LanguageStripe;
