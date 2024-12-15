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
                  Experience the distinctive taste of our signature series
                  coffee beans from Belatungan village. Grown at an altitude of
                  700-900mdpl, these beans offer a unique combination of low
                  acidity, aromatic clove (cengkeh), and a subtle hint of inulin
                  for a truly unforgettable.
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
                  Indulge in the rich and complex flavors of our Signature
                  Arabica Kintamani. Grown at 1200mdpl, this exceptional coffee
                  boasts low acidity, a thick, satisfying texture, captivating
                  woody and earthy aromas, and a delightful hint of chocolate.
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
                  Experience a Robusta like never before. Our signature blend,
                  grown at 1200mdpl and processed using a unique method to
                  achieve surprisingly low acidity, offers a rich, thick
                  texture, captivating woody and earthy aromas, and a subtle
                  hint of chocolate.
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
