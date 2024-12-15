import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Signature = () => {
  return (
    <section className="py-16" id="Signature">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 assistant-normal">Explore Our</p>
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
                Pupuan beans are grown in the highlands of Bali, Indonesia. The
                beans are grown at an altitude of 1,200 meters above sea level,
                which gives them a unique flavor profile.
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
                Indonesia. The beans are grown at an altitude of 1,500 meters
                above sea level, which gives them a unique flavor profile.
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
                Indonesia. The beans are grown at an altitude of 1,300 meters
                above sea level, which gives them a unique flavor profile.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Signature;
