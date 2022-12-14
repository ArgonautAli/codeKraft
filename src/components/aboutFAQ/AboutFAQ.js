import { Container } from "react-bootstrap";
import "./AboutFAQ.css";
import "../subBody/SubBody.scss";
import coffee from "../../assets/images/coffee.png";
import laptop from "../../assets/images/laptop.png";
import add from "../../assets/images/add.png";
import equal from "../../assets/images/equal.png";
import logo from "../../assets/images/android-chrome-192x192.png";
import { CodeIcon } from "../icons/icon";

function AboutFAQ() {
  return (
    <>
      <div>
        <div className="subBody ">
          <Container
            className="containerAboutboxFAQ"
            style={{ textAlign: "left", verticalAlign: "middle" }}
          >
            <div className="flex aboutIntroUpper space-x-5 mt-3">
              <div className="aboutIntroText">
                <div>
                  <h1>Story of CodeKraft</h1>
                  <p className="lighterFont">
                    In fact, inserting any fantasy text or a famous text, be it
                    a poem, a speech, a literary passage, a song's text, etc.,
                    our text generator will provide the random extraction of
                    terms and steps to compose your own exclusive Lorem Ipsum.
                    Be original, test your imagination... our Lorem Ipsum gen
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="subBody ">
          <Container
            className="containerAboutboxFAQ"
            style={{ textAlign: "left", verticalAlign: "middle" }}
          >
            <div
              className="flex aboutIntroUpper space-x-5 -mt-2 -pt-2"
              style={{
                textAlign: "left",
                verticalAlign: "middle",
                justifyContent: "flex-start",
              }}
            >
              <div
              //   className="aboutIntroText"
              >
                <div>
                  <h1>How you can contribute?</h1>
                  <p className="lighterFont">
                    In fact, inserting any fantasy text or a famous text, be it
                    a poem, a speech, a literary passage, a song's text, etc.,
                    <span
                      className="mt-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <img
                        className="-mb-2 -pb-2 mt-2"
                        src={laptop}
                        style={{
                          height: "38px",
                          width: "36px",
                          verticalAlign: "baseline",
                        }}
                      />{" "}
                      <img
                        className="-mb-2 -pb-2 mt-2"
                        src={add}
                        style={{ height: "20px", width: "20px" }}
                      />
                      <img
                        src={coffee}
                        style={{ height: "36px", width: "36px" }}
                      />
                      <img
                        className="-mb-2 -pb-2 mt-2"
                        src={equal}
                        style={{ height: "20px", width: "20px" }}
                      />
                      <img
                        // className="-mb-2 -pb-2 mt-2"
                        src={logo}
                        style={{ height: "36px", width: "36px" }}
                      />
                    </span>
                  </p>
                  <div className="sponsor">
                    Sponsor the efforts by paying as little as 5$ per month or
                    with one time payment via paypal. Alternatively, reach out
                    to me at kamranahmed.se@gmail.com.
                  </div>
                  <div className="lighterFont mt-2">
                    Sponsor the efforts by paying as little as 5$ per month or
                    with one time payment via paypal. Alternatively, reach out
                    to me at kamranahmed.se@gmail.com
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

export default AboutFAQ;
