import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Footer />
    </>
  )
}

export default App;
