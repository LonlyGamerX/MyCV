import Nav from "react-bootstrap/Nav";
import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

const DesktopNav = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // Use i18n to change the language
  };

  return (
    <div className="desktop-nav">
      <Nav className="sidebar d-flex flex-column">
        <div className="position-sticky">
          <h3 className="text-center my-4 me-3 ms-2">Scott Zangenberg</h3>
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
            <Nav.Link href="/education" className="pointerMouse">
              {t("navbar.education")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="pointerMouse">
              {t("navbar.contact")}
            </Nav.Link>
          </Nav.Item>
          <DarkModeToggle />
        </div>
        <div className="mt-auto">
          <div
            onClick={() => changeLanguage("en")}
            aria-label="English"
            className="clickable-flag pointerMouse"
          >
            <Flag country="US" size={32} />
          </div>
          <div
            onClick={() => changeLanguage("dk")}
            aria-label="Dansk"
            className="clickable-flag pointerMouse"
          >
            <Flag country="DK" size={32} />
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default DesktopNav;
