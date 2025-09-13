import React, { useState, useEffect, useRef } from "react";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const timerRef = useRef(null);

  const handleMousemove = () => {
    setShowNavbar(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowNavbar(false), 1000); // hides after 2s of stillness
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Navbar />
      </div>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
