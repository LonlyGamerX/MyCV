import { Nav } from "react-bootstrap";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  return (
    <Nav className="sidebar">
      <div className="position-sticky">
        <h3 className="text-center my-4 me-3 ms-2 test2">Scott Zangenberg</h3>

        <Nav.Item>
          <Nav.Link href="/" className="pointerMouse">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects" className="pointerMouse">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/experience" className="pointerMouse">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" className="pointerMouse">
            Contact
          </Nav.Link>
        </Nav.Item>
        <DarkModeToggle />
      </div>
    </Nav>
  );
};

export default Navigation;
