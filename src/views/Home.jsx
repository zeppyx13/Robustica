import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mt-8">Robustica</h1>
        <p className="text-lg text-gray-600 mt-4">
          Coffe from bali for the world
        </p>
      </div>
    </>
  );
};
export default Home;
