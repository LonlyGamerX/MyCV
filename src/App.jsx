import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

// Components
import Navigation from "./components/Navigation";
import i18n from "./components/i18n";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Router>
            <Navigation />
            <section className="p-3 content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                {/* Error Page */}
                <Route path="*" element={<Error404 />} />
              </Routes>
            </section>
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;
