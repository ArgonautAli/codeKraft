import Container from "react-bootstrap/Container";
import "./Introduction.css";
import { CodeIcon, ListIcon, VideoIcon } from "../icons/icon";

function Introduction() {
  return (
    <>
      <div className="containerIntro ">
        <Container className="containerBox">
          <div className="flex-container ">
            {" "}
            <div
              className="flex-container__text grow"
              style={{
                padding: "24px",
                marginTop: "50px",
              }}
            >
              <div className="flex-container__text">
                <h1
                  className="flex-container__text-heading"
                  style={{ fontSize: "2.5em" }}
                >
                  What is CodeKraft?
                </h1>
                <p
                  className="flex-container__text-body"
                  style={{ fontSize: "1.5em" }}
                >
                  Autocomplete CSS properties smarter. SCA collects local CSS
                  properties usage statistic to provide smart sorted hints. In
                  case of not enough individual static it uses global usage
                  statistic to suggest you best options.
                </p>
              </div>

              <div className="icon-strip " style={{ color: "black" }}>
                <div>
                  <VideoIcon />
                </div>
                <div className="">
                  <CodeIcon />
                </div>

                <div>
                  {" "}
                  <ListIcon />
                </div>
              </div>
            </div>
            <div className="img-container">
              <div className="intro-abstract " />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Introduction;
