import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Get<span className="text-purple-600">Gigs</span></h2>
          <p className="mt-2 text-gray-400">
            The ultimate platform connecting talented artists with event organizers. Making event magic happen since 2023.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaInstagram className="text-xl cursor-pointer hover:text-purple-500 transition" />
            <FaTwitter className="text-xl cursor-pointer hover:text-purple-500 transition" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-purple-500 transition" />
            <FaYoutube className="text-xl cursor-pointer hover:text-purple-500 transition" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Partners</li>
            <li className="hover:text-white cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Data Processing</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>© 2025 GetGigs. All rights reserved.</p>
      </div>
    </footer>
  );
}
