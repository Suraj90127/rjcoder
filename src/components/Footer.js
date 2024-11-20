import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 px-4">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6 md:px-10 sm:px-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-white">
              Thapa <span className="text-orange-400">Technical</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="space-y-10">
            <div className="flex justify-center space-x-4 text-gray-400 text-lg">
              <Link
                to="/news"
                className="hover:text-white transition duration-300"
              >
                News
              </Link>
              <Link
                to="/blogs"
                className="hover:text-white transition duration-300"
              >
                Blogs
              </Link>
              <Link
                to="/videos"
                className="hover:text-white transition duration-300"
              >
                Videos
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-center space-x-4 text-gray-400 text-lg ">
              <Link
                to="/disclaimer"
                className="hover:text-white transition duration-300"
              >
                Disclaimer
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition duration-300"
              >
                Terms And Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <p className="text-gray-500 mt-2 text-center">
            © Copyright 2024, All rights reserved!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
