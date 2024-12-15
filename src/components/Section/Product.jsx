import reactm from "react";
import CardProduct from "../product/CardProduct";
import Button from "../partials/Button";
import aos from "aos";
import "aos/dist/aos.css";
const Product = () => {
  aos.init();
  return (
    <section className="relative bg-center bg-cover bg-no-repeat pt-5 pb-6">
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 assistant-normal">Find Your</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 poppins-bold">
            Coffee Beans
          </h1>
        </div>
        <div
          className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
          data-aos="fade-up"
          data-aos-duration="1700"
          data-aos-offset="400"
          data-aos-delay="300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardProduct
              title="The banyuatis"
              description="Experience a Robusta like never before. Our signature blend, grown at 1200mdpl and processed using a unique method to achieve surprisingly low acidity, offers a rich, thick texture, captivating woody and earthy aromas, and a subtle hint of chocolate. "
              image="./Assets/banyuatis.jpg"
              classs="bg-coklat text-white"
            />
            <CardProduct
              title="The Kintamani"
              description="Indulge in the rich and complex flavors of our Signature Arabica Kintamani. Grown at 1200mdpl, this exceptional coffee boasts low acidity, a thick, satisfying texture, captivating woody and earthy aromas, and a delightful hint of chocolate."
              image="./Assets/kintamani.jpg"
              classs="bg-hijau-tua text-white"
            />
            <CardProduct
              title="The Pupuan"
              description="Experience the distinctive taste of our signature series coffee beans from Belatungan village. Grown at an altitude of 700-900mdpl, these beans offer a unique combination of low acidity, aromatic clove (cengkeh), and a subtle hint of inulin for a truly unforgettable cup."
              image="./Assets/pupuan.jpg"
              classs="bg-coklat-tua text-white"
            />
            <CardProduct
              title="Honey beans"
              description="Discover the exceptional taste of our Arabica Honey beans, cultivated in the high altitudes of Belatungan village (700-900mdpl). These premium beans offer a delightful hint of sweet and fruity flavors, creating a truly unique coffee experience."
              image="./Assets/pupuan.jpg"
              classs="bg-hijau-tua text-white"
            />
            <CardProduct
              title="Luwak beans"
              description="Experience the luxury of Kintamani Luwak Coffee. Selected coffee beans that are naturally processed, producing a strong, alluring aroma, a mild acidity that is soft on the tongue, and a refreshing touch of fruity flavor. An unforgettable coffee experience. Order your Kintamani Luwak Coffee now and enjoy its specialty!"
              image="./Assets/pupuan.jpg"
              classs="bg-coklat-tua text-white"
            />
            <CardProduct
              title="Bali'em beans"
              description="the distinctive aroma of black coffee always greets visitors. This coffee is processed with a traditional recipe, producing a bitter taste that is just right and is loved by many Balinese. More than just a drink, this black coffee is part of the tradition and togetherness of the Balinese people. Enjoy a cup of coffee that will make you feel the warmth of the Island of the Gods."
              image="./Assets/pupuan.jpg"
              classs="bg-coklat text-white"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            title="View All Products"
            link="/marketplace"
            style="bg-coklat text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
