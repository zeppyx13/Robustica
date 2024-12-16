import React from "react";

const About = () => {
  return (
    <section
      className="relative flex-1 bg-gray-50 py-16 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('./Assets/bags.png')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 gap-6">
        <div className="description text-center lg:text-left max-w-lg lg:w-1/2 bg-white bg-opacity-95 rounded-xl p-5 shadow-lg">
          <h2 className="text-4xl font-bold text-black mb-6 poppins-bold">
            About Robustica
          </h2>
          <p className="text-black mb-6 leading-relaxed assistant-normal">
            We are a small business proudly established in 2023 with a mission
            to showcase the diverse range of authentic Balinese coffee from the
            popular favorites to the hidden gems yet to be discovered.
          </p>
          <p className="text-black mb-6 leading-relaxed assistant-normal">
            At Robustica, we’re passionate about supporting local farmers,
            helping them introduce their finest coffee beans to the world while
            contributing to their prosperity.
          </p>
          <p className="text-black mb-6 leading-relaxed assistant-normal">
            Whether you’re a coffee enthusiast, a cafe owner, or just curious
            about Bali’s rich coffee culture, we’re here to share the best of
            our island’s coffee heritage. Let’s brew something extraordinary
            together!
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/Logo/logo-no-background.png"
            alt="Robustica Logo"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
