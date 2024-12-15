import React, { useState } from "react";
import boxicons from "boxicons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 rounded poppins-semibold">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="./Logo/logo-no-background.png" // Ganti dengan URL/logo lokal
          alt="Robustica Logo"
          className="h-20 w-20"
        />
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className={`hidden lg:flex space-x-8 text-md font-semibold`}>
        <li>
          <a href="/" className="text-red-700 hover:underline">
            HOME
          </a>
        </li>
        <li>
          <a href="/shop" className="text-gray-700 hover:underline">
            SHOP
          </a>
        </li>
        <li>
          <a href="/blog" className="text-gray-700 hover:underline">
            BLOG
          </a>
        </li>
        <li>
          <a href="/dropship" className="text-gray-700 hover:underline">
            DROPSHIP
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-700 hover:underline">
            CONTACT US
          </a>
        </li>
      </ul>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img
            src="./Logo/logo-no-background.png" // Ganti dengan URL/logo lokal
            alt="Robustica Logo"
            className="h-12 w-12"
          />
          <h2 className="text-lg font-bold">Robustica</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-8">
          <li className="px-4">
            <a href="/" className="flex items-center space-x-2 text-white">
              <box-icon name="home" type="solid" color="#ffffff"></box-icon>
              <span>Home</span>
            </a>
          </li>
          <li className="px-4">
            <a href="/shop" className="flex items-center space-x-2 text-white">
              <box-icon name="cart-alt" type="solid" color="#ffffff"></box-icon>
              <span>Shop</span>
            </a>
          </li>
          <li className="px-4">
            <a href="/blog" className="flex items-center space-x-2 text-white">
              <box-icon name="copy-alt" type="solid" color="#ffffff"></box-icon>
              <span>Blog</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/dropship"
              className="flex items-center space-x-2 text-white"
            >
              <box-icon name="package" type="solid" color="#ffffff"></box-icon>
              <span>Dropship</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/contact"
              className="flex items-center space-x-2 text-white"
            >
              <box-icon
                name="conversation"
                type="solid"
                color="#ffffff"
              ></box-icon>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
