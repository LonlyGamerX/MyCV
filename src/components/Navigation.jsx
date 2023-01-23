import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { TfiFacebook } from "react-icons/tfi";
import { GrGooglePlus } from "react-icons/gr";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/profile" className="text-white">
              Profile
            </Nav.Link>
            <Nav.Link href="/projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contacy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
