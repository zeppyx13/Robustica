import React from "react";
import ListProduct from "../../constants/product";

const ShopProduct = () => {
  return (
    <section className="relative flex-1 bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Products
        </h1>
        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {ListProduct.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[48%] md:w-[35%] lg:w-[30%] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 md:h-44 object-contain rounded-t-lg"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-bold poppins-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-md assistant-normal text-left mb-3">
                  {product.description}
                </p>
                <p className="text-red-600 font-semibold mb-4 mt-auto">
                  {product.price}
                </p>
                <button className="w-full bg-coklat hover:bg-coklat-muda text-white py-2 rounded-lg transition-colors duration-300 mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
