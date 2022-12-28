import Container from "react-bootstrap/Container";
import { CodeIcon, ListIcon, VideoIcon } from "../icons/icon";
import "./SubBody.scss";

function SubBody() {
  return (
    <>
      <div className="subBodyOverall">
        <div className="subBody ">
          <Container className="containerSubBox">
            <div className="flex-container__text">
              <h1
                className="flex-container__text-heading"
                style={{ fontSize: "2.5em" }}
              >
                How we help you?
              </h1>
            </div>
          </Container>
        </div>
        <div className="subBoxCard-container">
          <div className="cardcontainer">
            <div className="box">
              <div className="boxContent">
                <CodeIcon />
                <h1 className="title">Title</h1>
                <p className="desc">
                  Less unicorn and apart and credibly yikes touched much jeez
                  that so reverent the by a as that kiwi fed wherever more
                  aboard.
                </p>
              </div>
              <a href="#"></a>
            </div>
            <div className="box">
              <div className="boxContent">
                <VideoIcon />
                <h1 className="title">Title</h1>
                <p className="desc">
                  Less unicorn and apart and credibly yikes touched much jeez
                  that so reverent the by a as that kiwi fed wherever more
                  aboard.
                </p>
              </div>
              <a href="#"></a>
            </div>
            <div className="box">
              <div className="boxContent">
                <ListIcon />
                <h1 className="title">Title</h1>
                <p className="desc">
                  Less unicorn and apart and credibly yikes touched much jeez
                  that so reverent the by a as that kiwi fed wherever more
                  aboard.
                </p>
              </div>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubBody;
