import React from "react";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="name">
              *Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan nama Anda"
              className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coklat-muda"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="email">
              *Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email Anda"
              className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coklat-muda"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="subject">
              *Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subjek pesan Anda"
              className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coklat-muda"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="message">
              *Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="apa yang bisa kami bantu?..."
              className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coklat-muda resize-none"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-coklat text-white rounded-md hover:bg-coklat-muda focus:outline-none focus:ring-2 focus:ring-coklat-normal transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
