import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
