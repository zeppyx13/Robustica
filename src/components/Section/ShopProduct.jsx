import React from "react";
import ListProduct from "../../constants/product";
import ProductList from "../product/ListProduct";
const ShopProduct = () => {
  return (
    <section className="relative flex-1 bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Product
        </h1>
        <div className="subproduct">
          <h2 className="text-4xl font-bold text-gray-800 pb-16">
            Coffee Beans
          </h2>
          {/* Product Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {ListProduct.filter((product) => product.category === "beans").map(
              (product) => (
                <ProductList
                  Id={product.id}
                  Image={product.image}
                  Name={product.name}
                  Weight={product.weight}
                  Description={product.description}
                  Price={product.price}
                />
              )
            )}
          </div>
        </div>
        <div className="subproduct">
          <h2 className="text-4xl font-bold text-gray-800 pt-24 pb-16">
            Ground Coffee
          </h2>
          {/* Product Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-5">
            {ListProduct.filter((product) => product.category === "powder").map(
              (product) => (
                <ProductList
                  Id={product.id}
                  Image={product.image}
                  Name={product.name}
                  Weight={product.weight}
                  Description={product.description}
                  Price={product.price}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
