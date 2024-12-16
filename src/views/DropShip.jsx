import React from "react";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Dropshiper from "../components/Section/Dropshiper";
const DropShip = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Dropshiper />
      <Footer />
    </div>
  );
};

export default DropShip;
