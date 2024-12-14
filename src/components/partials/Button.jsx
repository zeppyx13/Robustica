import React from "react";
const Button = ({ title, link, style }) => {
  return (
    <a
      href={link}
      className={`${style} py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-coklat-muda transition duration-300 ease-in-out poppins-semibold text-sm sm:text-base md:text-lg`}
    >
      {title}
    </a>
  );
};
export default Button;
