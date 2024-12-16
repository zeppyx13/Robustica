import React from "react";
import Navbar from "../components/partials/Navbar";
import Hero from "../components/Section/Hero";
import Footer from "../components/partials/Footer";
import About from "../components/Section/About";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default AboutUs;
