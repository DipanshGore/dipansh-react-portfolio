import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import FrontPage from "./Components/FrontPage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  
  return (
    <>
      {/* Show Header for all routes except "/" */}
      {location.pathname !== "/" && <Header />}
      
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactWithFooter />} />
        <Route path="*" element={<FrontPage />} /> 
      </Routes>
    </>
  );
}

function ContactWithFooter() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
