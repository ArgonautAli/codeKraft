import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./SubBody.css";

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
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </>
  );
}

export default SubBody;
