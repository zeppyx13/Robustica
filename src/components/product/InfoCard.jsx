import React from "react";
import aos from "aos";
import "aos/dist/aos.css";

const InfoCard = ({ title, image, description }) => {
  aos.init();
  return (
    <div
      className="flex items-start space-x-4"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div>
        <img src={image} alt={`${title}`} className="w-full h-full" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 poppins-bold">
          {title}
        </h3>
        <p className="text-gray-600 text-sm assistant-normal">{description}</p>
      </div>
    </div>
  );
};
export default InfoCard;
