import { useEffect } from "react";
import "./App.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Heading from "./component/Heading";
import Analyse from "./component/Analyse";
import Team from "./component/Team";

function App() {

  useEffect(() => {

    // Animations au scroll
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }

      });

    }, {
      threshold: 0.2,
    });

    reveals.forEach((reveal) => observer.observe(reveal));


    // Barres de progression
    const bars = document.querySelectorAll(".fill");

    const barObserver = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        const bar = entry.target;

        if (entry.isIntersecting) {
          bar.style.width = bar.dataset.width;
        } else {
          bar.style.width = "0";
        }

      });

    }, {
      threshold: 0.4,
    });

    bars.forEach((bar) => barObserver.observe(bar));

    // Nettoyage
    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };

  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Heading />
      <Analyse />
      <Team />
    </div>
  );
}

export default App;