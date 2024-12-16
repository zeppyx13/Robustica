import React from "react";
const CardProduct = ({ title, description, image, classs }) => {
  return (
    <div
      className={`${classs} flex flex-col items-center rounded-lg shadow-lg p-6`}
    >
      <img
        src={image}
        alt={title || "Product Image"}
        className="h-36 md:h-44 rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold poppins-bold text-center mb-2">
          {title}
        </h2>
        <p className="text-md assistant-normal text-justify">{description}</p>
      </div>
    </div>
  );
};
export default CardProduct;
