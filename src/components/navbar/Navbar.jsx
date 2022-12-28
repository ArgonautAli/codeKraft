import { React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import webLogo from "../../assets/images/android-chrome-192x192.png";
import "./Navbar.scss";

function NavbarMain() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div style={{ display: "flex" }}>
          <img
            src={webLogo}
            style={{
              display: "flex",
              height: "32px",
              width: "32px",
            }}
          />{" "}
          &nbsp;
          <Navbar.Brand href="#home">CodeKraft</Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav px-4" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex space-x-8 ">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            {/* <Button className='outline-light' variant="outline-light">Donate</Button> */}
          </Nav>
          <Nav>
            <Button>Start Coding</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
