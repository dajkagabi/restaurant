import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission";
import Dishes from "./components/Dishes/Dishes";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
