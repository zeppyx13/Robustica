import React from "react";
// sesction
import WhyUs from "../components/Section/WhyUs";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Product from "../components/Section/Product";
import Journey from "../components/Section/Journey";
import Signature from "../components/Section/Signature";
import Hero from "../components/Section/Hero";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow h-full">
        {/* Hero Section */}
        <Hero />
        {/* Signature Section */}
        <Signature />
        {/* Why Us Section */}
        <WhyUs />
        {/* Product Section */}
        <Product />
        {/* Journey Section */}
        <Journey />
      </main>
      <Footer />
    </>
  );
};

export default Home;
