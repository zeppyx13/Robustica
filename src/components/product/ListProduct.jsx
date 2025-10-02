import React from "react";
import { useCart } from "../context/CartContext";

const ProductList = ({ Id, Image, Name, Weight, Description, Price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ Id, Image, Name, Weight, Description, Price });
  };

  return (
    <div
      key={Id}
      className="w-full sm:w-[48%] md:w-[35%] lg:w-[30%] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <img
        src={Image}
        alt={Name}
        className="h-36 md:h-44 object-contain rounded-t-lg mt-5"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold poppins-bold text-gray-800 mb-2">
          {Name}
        </h2>
        <h3 className="text-md font-bold poppins-medium text-gray-800 mb-2">
          {Weight}
        </h3>
        <p className="text-gray-500 text-md assistant-normal text-left mb-3">
          {Description}
        </p>
        <p className="text-red-600 font-semibold mb-4 mt-auto">{Price}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-coklat hover:bg-coklat-muda text-white py-2 rounded-lg transition-colors duration-300 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
