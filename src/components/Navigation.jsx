import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Nav className="sidebar">
      <div className="position-sticky">
        <h3 className="text-center my-4 me-2 ms-2">Scott Zangenberg</h3>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bio">Bio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/experience">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navigation;
