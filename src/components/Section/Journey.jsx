import React from "react";
import Button from "../partials/Button";
import aos from "aos";
import "aos/dist/aos.css";
const Journey = () => {
  aos.init();
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat py-16 lg:py-20"
      style={{
        backgroundImage: "url('./Assets/plants.png')",
      }}
      id="journey"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 font-bold assistant-normal">
            <strong>Discover to</strong>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
            Our Journey
          </h1>
        </div>

        {/* Video and Description */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Video Section */}
          <div
            className="video flex-shrink-0 w-full lg:w-1/2"
            data-aos="zoom-out"
            data-aos-duration="1700"
          >
            <iframe
              width="100%"
              height="345"
              src="https://www.youtube.com/embed/JmhYqxqziOg?si=_M4Ohths_JRFFxui"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg border border-gray-200"
            ></iframe>
          </div>

          {/* Description Section */}
          <div
            className="description text-center lg:text-left max-w-lg lg:w-1/2 bg-white bg-opacity-90 rounded-xl p-6 shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-offset="200"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 poppins-bold text-gray-900">
              The Pupuan Story
            </h2>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-8 assistant-normal">
              Pupuan beans are grown in the highlands of Bali, Indonesia. The
              beans are grown at an altitude of 1,200 meters above sea level,
              which gives them a unique flavor profile. The beans are handpicked
              and sun-dried, which helps to preserve their natural flavors. The
              beans are then roasted to perfection, resulting in a rich and
              full-bodied coffee that is perfect for any time of day.
            </p>
            <Button
              title="Discover More"
              link="/about"
              style="bg-coklat text-white mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
