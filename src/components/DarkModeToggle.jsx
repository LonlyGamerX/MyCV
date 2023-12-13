import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    applyDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
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
      className={`toggle-button ${
        darkMode ? "dark" : ""
      } ms-lg-3 m-auto mb-3 mt-3 pointerMouse`}
    ></button>
  );
};

export default DarkModeToggle;
