import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          navigation={false}
        >
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            <div className="bg-gradient-to-b from-coklat to-coklat shadow-lg text-white rounded-lg p-4 sm:p-6 flex flex-col items-center justify-between min-h-[300px] sm:min-h-[400px] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              <img
                src="./Assets/pupuan.jpg"
                alt="Pupuan"
                className="h-28 sm:h-36 md:h-44 mb-3 sm:mb-4 rounded-lg object-cover"
              />
              <div className="text-center flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold poppins-bold mb-1 sm:mb-2">
                  The Pupuan
                </h3>
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed assistant-normal">
                  Pupuan beans are grown in the highlands of Bali, Indonesia.
                  The beans are grown at an altitude of 1,200 meters, giving
                  them a unique flavor profile.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="bg-gradient-to-b from-hijau to-hijau-tua shadow-lg text-white rounded-lg p-4 sm:p-6 flex flex-col items-center justify-between min-h-[300px] sm:min-h-[400px] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              <img
                src="./Assets/kintamani.jpg"
                alt="Kintamani"
                className="h-28 sm:h-36 md:h-44 mb-3 sm:mb-4 rounded-lg object-cover"
              />
              <div className="text-center flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold poppins-bold mb-1 sm:mb-2">
                  The Kintamani
                </h3>
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed assistant-normal">
                  Kintamani beans are grown in the highlands of Bali at 1,500
                  meters above sea level, resulting in a rich and unique flavor
                  profile.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 3 */}
          <SwiperSlide>
            <div className="bg-gradient-to-b from-coklat-muda to-coklat-tua shadow-lg text-white rounded-lg p-4 sm:p-6 flex flex-col items-center justify-between min-h-[300px] sm:min-h-[400px] transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              <img
                src="./Assets/banyuatis.jpg"
                alt="Banyuatis"
                className="h-28 sm:h-36 md:h-44 mb-3 sm:mb-4 rounded-lg object-cover"
              />
              <div className="text-center flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold poppins-bold mb-1 sm:mb-2">
                  The Banyuatis
                </h3>
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed assistant-normal">
                  Banyuatis beans are grown in Bali's Banyuatis region at 1,300
                  meters above sea level, resulting in a rich and full-bodied
                  coffee.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Signature;
