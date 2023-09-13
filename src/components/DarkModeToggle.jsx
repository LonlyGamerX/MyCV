import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = Cookies.get("darkMode") === "true";
    setDarkMode(isDarkMode);
    applyDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyDarkMode(newDarkMode);
    Cookies.set("darkMode", newDarkMode, { expires: 365 });
  };

  const applyDarkMode = (isDarkMode) => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`toggle-button ${darkMode ? "dark" : ""} ms-2 mt-3`}
    ></button>
  );
};

export default DarkModeToggle;
