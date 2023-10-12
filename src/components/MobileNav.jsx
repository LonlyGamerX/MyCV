import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MobileNav = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // Use i18n to change the language
  };

  return (
    <Navbar className="mobile-nav" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="text-center">
        <Nav className="me-auto">
          <h3 className="text-center me-3 ms-2 text-decoration-underline">
            Scott Zangenberg
          </h3>
          <Nav.Item>
            <Nav.Link href="/" className="pointerMouse">
              {t("navbar.home")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects" className="pointerMouse">
              {t("navbar.projects")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/experience" className="pointerMouse">
              {t("navbar.experience")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="pointerMouse">
              {t("navbar.contact")}
            </Nav.Link>
          </Nav.Item>
          <DarkModeToggle />
          <div className="mt-auto">
            <div
              onClick={() => changeLanguage("en")}
              aria-label="English"
              className="clickable-flag"
            >
              <Flag country="US" size={32} />
            </div>
            <div
              onClick={() => changeLanguage("dk")}
              aria-label="Dansk"
              className="clickable-flag"
            >
              <Flag country="DK" size={32} />
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNav;
