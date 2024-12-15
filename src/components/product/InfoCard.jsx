import React from "react";

const InfoCard = ({ title, image, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div>
        <img src={image} alt={`${title}`} className="w-full h-full" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
export default InfoCard;
