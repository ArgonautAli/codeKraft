import "./Footer.scss";
import webLogo from "../../assets/images/android-chrome-192x192.png";
import GlitchTypo from "./glitchTypo/GlitchTypo";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer-one">
          <div className="subFooter-one space-x-3 mb-2">
            {" "}
            <img
              src={webLogo}
              style={{
                display: "flex",
                height: "32px",
                width: "32px",
              }}
            />{" "}
            &nbsp; <b>CodeKraft.co</b> &nbsp;by
            <div className="name-button"> @Ali Haider Khan </div>
          </div>
          <div className="resname-button mt-3 mb-2"> @Ali Haider Khan </div>
          <div>
            {" "}
            <p>
              {" "}
              Less unicorn and apart and credibly yikes touched much jeez that
              so reverent the by a as that kiwi fed wherever more aboard.
            </p>{" "}
          </div>
          <div>Github • LinkedIn • Twitter</div>
          <div className="mt-4">
            <p>
              <GlitchTypo />
              <p className="w-full subGlitch -mt-2">
                {" "}
                Less unicorn and apart and credibly yikes touched much jeez that
                so reverent the by a as that kiwi fed wherever more aboard.
              </p>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
