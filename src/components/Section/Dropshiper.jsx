import React from "react";
import Button from "../partials/Button";
const Dropshipper = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-5 md:py-5">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-md rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center poppins-bold">
          Mitra Dropshipper
        </h1>
        <p className="text-gray-600 text-center mb-6 leading-relaxed assistant-normal">
          <strong>Jadilah Mitra Dropshipper Kami! </strong>Mari bersama
          memperkenalkan kopi Bali yang unik dan berkualitas tinggi ke seluruh
          Indonesia bahkan hingga ke mancanegara. Bersama-sama, kita dapat
          mendukung para petani lokal dan membawa citarasa istimewa kopi Bali ke
          lebih banyak pecinta kopi di seluruh dunia. Yuk, bergabung dan tumbuh
          bersama kami!
        </p>
        <div className="mb-8 assistant-normal">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Syarat & Ketentuan Berlaku
          </h2>
          <ul className="list-decimal list-inside text-gray-600 space-y-2">
            <li>
              Mendaftarkan diri dengan <b>Foto KTP</b>, Foto diri, data lengkap,
              rekening bank, dan NPWP (jika ada).
            </li>
            <li>Pembelian melalui whatsapp dan kontak resmi kami lainya </li>
            <li>Dropshipper menjual produk dengan harga dasar.</li>
          </ul>
        </div>
        <div className="mb-8 assistant-normal">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Benefit</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Terdapat <b>benefit 15%</b> setiap pembelian dropshipper.
            </li>
            <li>
              Untuk transaksi <b>Rp 2.5jt</b> per minggu, dropshipper akan
              mendapatkan harga <b>Grosir</b>.
            </li>
            <li>Produk dijual dengan harga dasar.</li>
          </ul>
        </div>
        <div className="mb-8 assistant-normal">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Fasilitas
          </h2>
          <ul className="list-decimal list-inside text-gray-600 space-y-2">
            <li>
              <b className="text-coklat">PT. Robustica </b> menyediakan resi
              khusus untuk para dropshipper sesuai nama olshop atau usaha
              dropshipper.
            </li>
            <li>
              Dropshipper akan didukung dengan beberapa materi promosi online
              oleh <b className="text-coklat ">PT. Robustica</b>.
            </li>
          </ul>
        </div>
        <div className="text-center mt-10 assistant-normal">
          <p className="text-lg font-medium text-gray-800 mb-3">
            For more information, please contact us:
          </p>
          <Button
            title="Contact Us"
            link="/contact"
            style="inline-block px-6 py-3 bg-coklat text-white rounded-lg shadow hover:bg-coklat-muda transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Dropshipper;
