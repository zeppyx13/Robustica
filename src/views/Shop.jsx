import React from "react";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ShopProduct from "../components/Section/ShopProduct";
const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <ShopProduct />
      <Footer />
    </div>
  );
};

export default Shop;
