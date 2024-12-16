import React from "react";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Contact from "../components/Section/Contact";
const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
