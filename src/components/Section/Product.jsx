import React from "react";
import CardProduct from "../product/CardProduct";
import Button from "../partials/Button";
import aos from "aos";
import "aos/dist/aos.css";
import ListProduct from "../../constants/product";

const Product = () => {
  aos.init();

  // Filter hanya ID 1 hingga 6
  const filteredProducts = ListProduct.filter(
    (product) => product.id >= 1 && product.id <= 6
  );

  // Class untuk selang-seling warna background
  const backgroundClasses = [
    "bg-coklat text-white",
    "bg-hijau-tua text-white",
    "bg-coklat-tua text-white",
    "bg-coklat-tua text-white",
  ];

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat pt-5 pb-6"
      id="products"
    >
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 assistant-normal">Find Your</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
            Coffee Beans
          </h1>
        </div>

        {/* Grid Produk */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
          data-aos="fade-up"
          data-aos-duration="1700"
          data-aos-offset="400"
          data-aos-delay="300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <CardProduct
                key={product.id}
                title={product.name}
                description={product.description}
                image={product.image}
                classs={backgroundClasses[index % backgroundClasses.length]} // Selang-seling kelas warna
              />
            ))}
          </div>
        </div>

        {/* Tombol */}
        <div className="flex justify-center mt-10">
          <Button
            title="View All Products"
            link="/shop"
            style="bg-coklat text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
