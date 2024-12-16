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
      <div className="overflow-hidden flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Hero />
          <Signature />
          <WhyUs />
          <Product />
          <Journey />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
