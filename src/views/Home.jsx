import React from "react";
import Navbar from "../components/navbar/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative bg-center bg-cover bg-no-repeat h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('./Assets/beans.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold poppins-bold">
            Robustica
          </h1>
          <p className="text-lg md:text-2xl mt-4 assistant-normal">
            The Best Coffee Beans from Bali for the World
          </p>
          <a
            href="/marketplace"
            className="mt-8 bg-coklat text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-coklat-muda transition duration-300 ease-in-out poppins-semibold"
          >
            Order Now
          </a>
        </div>
      </div>
      <section className="py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 assistant-normal">Explore Our</p>
          <h2 className="text-3xl font-bold text-gray-900 poppins-bold">
            Our Signature
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
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
                  className="h-44 mb-4"
                />
                <h3 className="text-4xl font-bold text-center poppins-bold">
                  The Pupuan
                </h3>
                <p className="text-lg mt-2 text-wrap text-center assistant-normal">
                  Pupuan beans are grown in the highlands of Bali, Indonesia.
                  The beans are grown at an altitude of 1,200 meters above sea
                  level, which gives them a unique flavor profile.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-hijau-tua text-white rounded-lg p-6 flex flex-col items-center justify-center h-full">
                <img
                  src="./Assets/kintamani.jpg"
                  alt="Signature"
                  className="h-44 mb-4"
                />
                <h3 className="text-4xl font-bold text-center poppins-bold">
                  The Kintamani
                </h3>
                <p className="text-lg mt-2 text-wrap text-center assistant-normal">
                  Kintamani beans are grown in the Kintamani region of Bali,
                  Indonesia. The beans are grown at an altitude of 1,500 meters
                  above sea level, which gives them a unique flavor profile.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-coklat text-white rounded-lg p-6 flex flex-col items-center justify-center h-full">
                <img
                  src="./Assets/banyuatis.jpg"
                  alt="Signature"
                  className="h-44 mb-4"
                />
                <h3 className="text-4xl font-bold text-center poppins-bold">
                  The Banyuatis
                </h3>
                <p className="text-lg mt-2 text-wrap text-center assistant-normal">
                  Banyuatis beans are grown in the Banyuatis region of Bali,
                  Indonesia. The beans are grown at an altitude of 1,300 meters
                  above sea level, which gives them a unique flavor profile.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
