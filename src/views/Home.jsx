import React from "react";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-center bg-cover bg-no-repeat h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('./Assets/beans.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold poppins-Bold">
            Robustica
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            The Best Coffe Beans from Bali for the World
          </p>
          <a
            href="/marketplace"
            className="mt-8 bg-coklat text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-coklat-muda transition"
          >
            See More
          </a>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default Home;
