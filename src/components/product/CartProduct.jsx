import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "boxicons"; // penting biar <box-icon> bisa dipakai

function CartDropdown() {
  const { cart, getCartCount, getCartTotal } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative flex items-center text-gray-700 hover:text-red-600"
      >
        <box-icon name="cart" color="currentColor"></box-icon>
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            {getCartCount()}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          <div className="p-4 border-b font-semibold flex justify-between items-center">
            <span>Keranjang ({getCartCount()})</span>
            <Link to="/cart" className="text-red-600 text-sm hover:underline">
              Lihat Semua
            </Link>
          </div>

          {/* List Produk */}
          <div className="max-h-64 overflow-y-auto divide-y">
            {cart.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Keranjang kosong
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 text-sm"
                >
                  {/* Gambar produk */}
                  <img
                    src={
                      item.image || item.img || "https://via.placeholder.com/50"
                    }
                    alt={item.name || item.title}
                    className="w-12 h-12 object-cover rounded"
                  />

                  {/* Detail produk */}
                  <div className="flex-1">
                    <p className="truncate font-medium">
                      {item.name || item.title}
                    </p>
                    <p className="text-gray-500">
                      {item.quantity} x Rp
                      {(item.price || 0).toLocaleString()}
                    </p>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right font-semibold">
                    Rp{((item.price || 0) * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between mb-2 font-semibold">
                <span>Total</span>
                <span>Rp{getCartTotal().toLocaleString()}</span>
              </div>
              <Link
                to="/cart"
                className="block text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
              >
                Lanjut ke Pembayaran
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
