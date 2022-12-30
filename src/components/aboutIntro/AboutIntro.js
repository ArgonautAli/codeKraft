import { Container } from "react-bootstrap";
import "../subBody/SubBody.scss";
import "./AboutIntro.css";
import creatorImage from "../../assets/images/alihaiderkhan.jpg";

function AboutIntro() {
  return (
    <>
      <div className="">
        <div className="subBody ">
          <Container
            className="containerAboutboxIntro"
            style={{ textAlign: "left", verticalAlign: "middle" }}
          >
            <div className="flex aboutIntroUpper space-x-5 mt-3">
              <h1>
                <img
                  src={creatorImage}
                  style={{
                    height: "250px",
                    width: "800px",
                    objectFit: "cover",
                    borderRadius: "25px",
                  }}
                />
              </h1>
              <div className="aboutIntroText">
                <div>
                  <h1>Hello, I am Ali Haider Khan</h1>
                  <p>
                    In fact, inserting any fantasy text or a famous text, be it
                    a poem, a speech, a literary passage, a song's text, etc.,
                    our text generator will provide the random extraction of
                    terms and steps to compose your own exclusive Lorem Ipsum.
                    Be original, test your imagination... our Lorem Ipsum
                    generator will amaze you. Try it now! Copy and Paste!
                  </p>
                  <div className="followSpace space-x-4">
                    Follow me on &nbsp;
                    <div
                      className="followBtn"
                      style={{ background: "#0072b1 " }}
                    >
                      {" "}
                      @AliHaiderKhan{" "}
                    </div>{" "}
                    <div className="followBtn" style={{ background: "#333" }}>
                      {" "}
                      @ArgonautAli{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutIntro;
