import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-full bottom-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-4 poppins-bold">
              About Robustica
            </h2>
            <p className="text-md leading-6 assistant-normal">
              Robustica is a coffee shop that provides the best coffee beans
              from Bali for the world. We have been serving the best coffee
              since 2023. Our coffee beans are sourced from the best coffee
              plantations in Bali. We have a wide variety of coffee beans that
              you can choose from. Visit us today and experience the best coffee
              in Bali.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-4 poppins-bold">
              Quick Links
            </h2>
            <ul className="space-y-2 text-md assistant-normal">
              <li>
                <a href="./" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="./shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="./about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="./dropship" className="hover:underline">
                  Dropship
                </a>
              </li>
              <li>
                <a href="./contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Shop Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-4 poppins-bold">
              Our Shop
            </h2>
            <ul className="space-y-2 text-md">
              <li>
                <a
                  href="https://Robustica.gungnanda.com"
                  target="blanks_"
                  className="hover:underline"
                >
                  Website
                </a>
              </li>
              <li>
                <a href="#shopee" className="hover:underline">
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href="#tokopedia"
                  target="blanks_"
                  className="hover:underline"
                >
                  Tokopedia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-4 poppins-bold">
              Contact Info
            </h2>
            <ul className="space-y-2 text-md assistant-normal">
              <li>
                <span className="font-bold">Alamat Kami:</span> <br />
                Jl. Nangka Utara 1 No. 1, Denpasar, Bali
              </li>
              <li>
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+62315618880" className="hover:underline">
                  +62 315618880
                </a>
              </li>
              <li>
                <span className="font-bold">No. Telp:</span>{" "}
                <a href="tel:0315618880" className="hover:underline">
                  031 5618880
                </a>
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:Contact@robustica.shop"
                  className="hover:underline"
                >
                  Contact@robustica.shop
                </a>
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                <a href="https://Robustica.shop/" className="hover:underline">
                  https://Robustica.shop/
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm assistant-normal">
          <p>&copy; 2024 Robustica Team. All Rights Reserved.</p>
          <p>
            Created by{" "}
            <a
              href="https://gungnanda.com"
              target="blanks_"
              className="hover:underline"
            >
              Gung Nanda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
