import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bg-center bg-cover bg-no-repeat h-96 flex items-center justify-center"
          style={{ backgroundImage: "url('./Assets/beans2.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold poppins-bold">
              Robustica
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 assistant-normal">
              The Best Coffee Beans from Bali for the World
            </p>
            <a
              href="/marketplace"
              className="mt-8 bg-coklat text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-coklat-muda transition duration-300 ease-in-out poppins-semibold text-sm sm:text-base md:text-lg"
            >
              Order Now
            </a>
          </div>
        </section>

        {/* Signature Section */}
        <section className="py-16" id="Signature">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 assistant-normal">
              Explore Our
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
              Signature
            </h1>
          </div>
          <div className="container mx-auto px-4">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              navigation={true}
              className="mySwiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="bg-coklat-tua text-white rounded-lg p-6 flex flex-col items-center justify-center h-full">
                  <img
                    src="./Assets/pupuan.jpg"
                    alt="Signature"
                    className="h-36 md:h-44 mb-4 rounded-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-center poppins-bold">
                    The Pupuan
                  </h3>
                  <p className="text-sm md:text-lg mt-2 text-wrap text-center assistant-normal">
                    Pupuan beans are grown in the highlands of Bali, Indonesia.
                    The beans are grown at an altitude of 1,200 meters above sea
                    level, which gives them a unique flavor profile.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-hijau-tua text-white rounded-lg p-6 flex flex-col items-center justify-center h-full">
                  <img
                    src="./Assets/kintamani.jpg"
                    alt="Signature"
                    className="h-36 md:h-44 mb-4 rounded-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-center poppins-bold">
                    The Kintamani
                  </h3>
                  <p className="text-sm md:text-lg mt-2 text-wrap text-center assistant-normal">
                    Kintamani beans are grown in the Kintamani region of Bali,
                    Indonesia. The beans are grown at an altitude of 1,500
                    meters above sea level, which gives them a unique flavor
                    profile.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="bg-coklat text-white rounded-lg p-6 flex flex-col items-center justify-center h-full">
                  <img
                    src="./Assets/banyuatis.jpg"
                    alt="Signature"
                    className="h-36 md:h-44 mb-4 rounded-lg"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-center poppins-bold">
                    The Banyuatis
                  </h3>
                  <p className="text-sm md:text-lg mt-2 text-wrap text-center assistant-normal">
                    Banyuatis beans are grown in the Banyuatis region of Bali,
                    Indonesia. The beans are grown at an altitude of 1,300
                    meters above sea level, which gives them a unique flavor
                    profile.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Journey Section */}
        <section
          className="relative bg-center bg-cover bg-no-repeat py-16 lg:py-20"
          style={{
            backgroundImage: "url('./Assets/plants.png')",
            backgroundColor: "#f5f5dc", // Warna krem untuk melengkapi tema latar
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background bg-opacity-70"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 assistant-normal">
                Welcome to
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
                Journey
              </h1>
            </div>

            {/* Video and Description */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Video Section */}
              <div className="video flex-shrink-0 w-full lg:w-1/2">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/JmhYqxqziOg?si=_M4Ohths_JRFFxui"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg border border-gray-200"
                ></iframe>
              </div>

              {/* Description Section */}
              <div className="description text-center lg:text-left max-w-lg lg:w-1/2 bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Pupuan Story
                </h2>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  Pupuan beans are grown in the highlands of Bali, Indonesia.
                  The beans are grown at an altitude of 1,200 meters above sea
                  level, which gives them a unique flavor profile. The beans are
                  handpicked and sun-dried, which helps to preserve their
                  natural flavors. The beans are then roasted to perfection,
                  resulting in a rich and full-bodied coffee that is perfect for
                  any time of day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
