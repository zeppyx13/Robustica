import reactm from "react";
import CardProduct from "../product/CardProduct";
import Button from "../partials/Button";
const Product = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat pt-5 pb-6">
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 assistant-normal">Find Your</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
            Coffee Beans
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-coklat text-white"
            />
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-hijau-tua text-white"
            />
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-coklat-tua text-white"
            />
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-hijau-tua text-white"
            />
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-coklat-tua text-white"
            />
            <CardProduct
              title="Robusta Pupuan"
              description="Ketinggian 1200mdpl, Keasaman Rendah, Tekstur yang tebal dengan aroma woody dan earthy"
              image="./Assets/pupuan.jpg"
              classs="bg-coklat text-white"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            title="View All Products"
            link="/marketplace"
            style="bg-coklat text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
