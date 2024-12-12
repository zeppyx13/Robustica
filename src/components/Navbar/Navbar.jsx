import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 rounded poppins-semibold">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../../../public/Logo/logo-no-background.png" // Ganti dengan URL/logo lokal
          alt="Robustica Logo"
          className="h-12 w-12"
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
      <ul
        className={`hidden lg:flex space-y-4 lg:space-y-0 lg:space-x-8 text-md font-semibold`}
      >
        <li>
          <a
            href="/"
            className="block text-red-700 hover:underline px-8 lg:px-0 py-2 lg:py-0"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/shop"
            className="block text-gray-700 hover:underline px-8 lg:px-0 py-2 lg:py-0"
          >
            SHOP
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="block text-gray-700 hover:underline px-8 lg:px-0 py-2 lg:py-0"
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="/dropship"
            className="block text-gray-700 hover:underline px-8 lg:px-0 py-2 lg:py-0"
          >
            DROPSHIP
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="block text-gray-700 hover:underline px-8 lg:px-0 py-2 lg:py-0"
          >
            KONTAK KAMI
          </a>
        </li>
      </ul>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img
            src="../../../public/Logo/logo-no-background.png" // Ganti dengan URL/logo lokal
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

        <ul className="mt-4 space-y-4">
          <li className="px-4">
            <a
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/location"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <span>Location</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/contact"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
