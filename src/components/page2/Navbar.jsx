
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">Get</span>
        <span className="text-purple-500">Gigs</span>
      </div>

      {/* Menu Items + Buttons (Aligned Together) */}
      <div className="flex items-center space-x-6">
        {/* Menu Items (Reversed Order) */}
        <ul className="flex flex-row-reverse space-x-reverse space-x-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">How It Works</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Testimonials</li>
        </ul>

        {/* Login & Sign Up Buttons with Hover Effect */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg font-semibold border border-purple-500 text-white hover:bg-purple-500 transition duration-300">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg font-semibold border border-purple-500 text-white hover:bg-purple-500 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
