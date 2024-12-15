import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../partials/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  AOS.init();
  return (
    <section
      id="hero"
      className="relative bg-center bg-cover bg-no-repeat h-96 flex items-center justify-center shadow-lg"
      style={{ backgroundImage: "url('./Assets/beans2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 shadow-lg"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold poppins-bold"
          data-aos="fade-out"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Robustica
        </h1>

        {/* Typing Effect */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 assistant-normal">
          <Typewriter
            options={{
              strings: [
                "The Best Coffee Beans from Bali for the World",
                "Taste the Authentic Indonesian Flavor",
                "Sustainably Sourced, Perfectly Roasted",
              ],
              autoStart: true,
              loop: true,
              delay: 70, // Kecepatan mengetik
              deleteSpeed: 40, // Kecepatan menghapus teks
            }}
          />
        </p>

        {/* Button */}
        <Button
          title="Explore Now"
          link="/marketplace"
          style="mt-8 bg-coklat text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-coklat-muda transition duration-300 ease-in-out poppins-semibold text-sm sm:text-base md:text-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
