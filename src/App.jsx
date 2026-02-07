import React, { useState, useEffect } from "react";
import "./theme.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import About from "./components/about/About.jsx";
import Education from "./components/Education/Education.jsx";
import Interest from "./components/skills/Interest.jsx";
import Projects from "./components/Projects/Projects.jsx";
import CarouselImages from "./components/Carousel/Carousel.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Router>
      <div className="App">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              style={{ zIndex: "1" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Sidebar />
            </div>
          </nav>
        </div>
        <div className="main">
          <CarouselImages />
          <Projects />
          <About />
          <Interest />
          <Education />
        </div>
      </div>
    </Router>
  );
}

export default App;
