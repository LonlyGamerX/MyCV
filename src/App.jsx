import "./sass/App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

//Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App" role="main">
      <Router>
        <Navigation />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
