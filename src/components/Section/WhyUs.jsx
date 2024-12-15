import React from "react";
const WhyUs = () => {
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
            {/* Card 1 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/farmer.png"
                  alt="farmer"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Support Local Farmers
                </h3>
                <p className="text-gray-600 text-sm">
                  We work directly with local farmers to ensure that they
                  receive a fair price for their beans.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/coffee-beans.png"
                  alt="coffee-beans"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Premium beans quality
                </h3>
                <p className="text-gray-600 text-sm">
                  We source the best quality beans from around the world to
                  ensure that you get the bag's of coffee.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/coffee-cup.png"
                  alt="coffee-cup"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Unique Flavor Profile
                </h3>
                <p className="text-gray-600 text-sm">
                  Our beans are grown at high altitudes, which gives them a
                  unique flavor profile that you won't find anywhere else.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center px-4">
            <img
              src="./Logo/logo-no-background.png"
              alt="Robustica Logo"
              className="w-[75%] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8 px-6">
            {/* Card 4 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/price-tag.png"
                  alt="Arabica Flores Bajawa"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Best price guarantee
                </h3>
                <p className="text-gray-600 text-sm">
                  We offer the best prices on the market, so you can enjoy your
                  favorite coffee without breaking the bank.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/offee-plant.png"
                  alt="coffee-plant"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  From the best plantation
                </h3>
                <p className="text-gray-600 text-sm">
                  Our beans are sourced from the best plantations in the world,
                  so you can be sure that you're getting the best quality
                  coffee.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex items-start space-x-4">
              <div>
                <img
                  src="./Icon/coffee-bag.png"
                  alt="coffee-plant"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Many variants of coffee beans
                </h3>
                <p className="text-gray-600">
                  We offer a wide range of coffee beans, so you can find the
                  perfect one for your taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
