import React from "react";
// sections
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
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <div className="overflow-hidden">
          <Hero />
        </div>
        {/* Signature Section */}
        <div className="overflow-hidden">
          <Signature />
        </div>
        {/* Why Us Section */}
        <div className="overflow-hidden">
          <WhyUs />
        </div>
        {/* Product Section */}
        <div className="overflow-hidden">
          <Product />
        </div>
        {/* Journey Section */}
        <div className="overflow-hidden">
          <Journey />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
