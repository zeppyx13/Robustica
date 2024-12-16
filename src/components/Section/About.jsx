import React from "react";

const About = () => {
  return (
    <section className="flex-1 bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Robustica
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Selamat datang di Kopi Bara Official store. Semangat Bara untuk
            Nusantara. Dengan inspirasi citarasa dan budaya unik Nusantara, kami
            mendukung pegiat UMKM Kopi Indonesia dengan menyediakan berbagai
            pilihan kopi dari kelas budget hingga kelas signature.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Produk kami cocok untuk usaha warkop/kedai/cafe/resto/hotel anda.
            Kirim pesan ke kami untuk berbagai tips dan informasi usaha kopi dan
            kami akan dengan senang hati membantu.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/Logo/logo-no-background.png"
              alt="Robustica Logo"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
