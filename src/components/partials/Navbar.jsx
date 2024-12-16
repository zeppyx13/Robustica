import React, { useState, useEffect } from "react";
import boxicons from "boxicons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set link aktif berdasarkan path URL
    setActiveLink(window.location.pathname);
  }, []);

  const getLinkStyle = (path, isMobile = false) => {
    if (activeLink === path) {
      return isMobile
        ? "text-hijau-tua" // Style di mobile
        : "text-hijau-tua underline"; // Style di desktop
    }
    return isMobile
      ? "text-white hover:text-hijau"
      : "text-gray-700 hover:underline";
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 rounded poppins-semibold">
      {/* Logo */}
      <div className="flex items-center">
        <a href="./">
          <img
            src="./Logo/logo-no-background.png"
            alt="Robustica Logo"
            className="h-20 w-20"
          />
        </a>
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
      <ul className="hidden lg:flex space-x-8 text-md font-semibold">
        <li>
          <a href="/" className={getLinkStyle("/")}>
            HOME
          </a>
        </li>
        <li>
          <a href="/shop" className={getLinkStyle("/shop")}>
            SHOP
          </a>
        </li>
        <li>
          <a href="/about" className={getLinkStyle("/about")}>
            ABOUT US
          </a>
        </li>
        <li>
          <a href="/dropship" className={getLinkStyle("/dropship")}>
            DROPSHIP
          </a>
        </li>
        <li>
          <a href="/contact" className={getLinkStyle("/contact")}>
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
        <div className="flex items-center justify-between px-3 py-4 border-b border-gray-700">
          <a href="./">
            <img
              src="./Logo/logo-no-background.png"
              alt="Robustica Logo"
              className="h-12 w-12"
            />
          </a>
          <a href="./">
            <h2 className="text-lg font-bold">Robustica</h2>
          </a>
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
            <a
              href="/"
              className={`flex items-center space-x-2 ${getLinkStyle(
                "/",
                true
              )}`}
            >
              <box-icon
                name="home"
                type="solid"
                color="currentColor"
              ></box-icon>
              <span>HOME</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/shop"
              className={`flex items-center space-x-2 ${getLinkStyle(
                "/shop",
                true
              )}`}
            >
              <box-icon
                name="cart-alt"
                type="solid"
                color="currentColor"
              ></box-icon>
              <span>SHOP</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/about"
              className={`flex items-center space-x-2 ${getLinkStyle(
                "/about",
                true
              )}`}
            >
              <box-icon
                name="copy-alt"
                type="solid"
                color="currentColor"
              ></box-icon>
              <span>ABOUT US</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/dropship"
              className={`flex items-center space-x-2 ${getLinkStyle(
                "/dropship",
                true
              )}`}
            >
              <box-icon
                name="package"
                type="solid"
                color="currentColor"
              ></box-icon>
              <span>DROPSHIP</span>
            </a>
          </li>
          <li className="px-4">
            <a
              href="/contact"
              className={`flex items-center space-x-2 ${getLinkStyle(
                "/contact",
                true
              )}`}
            >
              <box-icon
                name="conversation"
                type="solid"
                color="currentColor"
              ></box-icon>
              <span>CONTACT US</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
