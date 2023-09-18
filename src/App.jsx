import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { I18nextProvider } from 'react-i18next';

// Components
import Navigation from "./components/Navigation";
import AdminNavigation from "./components/AdminNavigation";
import Logout from "./components/Logout";
import i18n from './components/i18n';

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import LoginUser from "./pages/LoginUser";
import Error404 from "./pages/Error404";
import NotAdmin from "./pages/NotAdmin";

// Admin pages
import CreateUser from "./pages/admin/CreateUser";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  const admin = Cookies.get("admin");
  const logIn = Cookies.get("user");
  const [user, setUser] = useState(logIn);
  const [IsAdmin, setIsAdmin] = useState(true);

  // useEffect(() => {
  //   setUser(Cookies.get("user"));
  //   setIsAdmin(Cookies.get("admin"));
  // }, []);

  useEffect(() => {
    if (!logIn) {
      setUser(false);
    }

    if (!admin) {
      setIsAdmin(false);
    }
  }, [admin, logIn]);

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="d-flex">
            {IsAdmin && user ? <AdminNavigation /> : <Navigation />}
            <section className="flex-grow-1 p-3 content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/login"
                  element={
                    <LoginUser setUser={setUser} setIsAdmin={setIsAdmin} />
                  }
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notAdmin" element={<NotAdmin />} />
                {/* Admin Sites */}
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/createuser" element={<CreateUser />} />
                {/* Error Page */}
                <Route path="*" element={<Error404 />} />
              </Routes>
            </section>
          </div>
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;
