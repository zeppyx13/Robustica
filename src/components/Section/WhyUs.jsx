import React from "react";
import InfoCard from "../product/InfoCard";
import aos from "aos";
import "aos/dist/aos.css";
const WhyUs = () => {
  aos.init();
  return (
    <section className="py-16" id="why-us">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-10">
          {/* Left Column */}
          <div className="space-y-8 px-6">
            <InfoCard
              image={"./Icon/farmer.png"}
              title={"Support Local Farmers"}
              description={
                "We support local farmers by sourcing our beans from them. This helps them to earn a living and support their families."
              }
            />
            <InfoCard
              image={"./Icon/coffee-beans.png"}
              title={"Premium beans quality"}
              description={
                "We source the best quality beans from around the world to ensure that you get the bag's of coffee."
              }
            />
            <InfoCard
              image={"./Icon/coffee-cup.png"}
              title={"Unique Flavor Profile"}
              description={
                "Our beans are grown at high altitudes, which gives them a unique flavor profile that you won't find anywhere else."
              }
            />
          </div>
          {/* Center Image */}
          <div
            className="flex justify-center px-4"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              src="./Logo/logo-no-background.png"
              alt="Robustica Logo"
              className="w-[75%] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain"
            />
          </div>
          {/* Right Column */}
          <div className="space-y-8 px-6">
            <InfoCard
              image={"./Icon/price-tag.png"}
              title={"Best price guarantee"}
              description={
                "We offer the best prices on the market, so you can enjoy your favorite coffee without breaking the bank."
              }
            />
            <InfoCard
              image={"./Icon/offee-plant.png"}
              title={"From the best plantation"}
              description={
                "Our beans are sourced from the best plantations in the world, so you can be sure that you're getting the best quality coffee."
              }
            />
            <InfoCard
              image={"./Icon/coffee-bag.png"}
              title={"Many variants of coffee beans"}
              description={
                "We offer a wide range of coffee beans, so you can find the perfect one for your taste."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
