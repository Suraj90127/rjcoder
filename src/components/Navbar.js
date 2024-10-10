import React, { useState } from "react";

import { NavLink, useLocation, Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 fixed w-full">
        <div className=" w-[90%] mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            {/* <img
              src="https://your-logo-url.com/logo.png"
              alt="Logo"
              className="h-10 w-10 mr-2"
            /> */}
            <div>
              <h1 className="text-xl font-bold text-orange-400">rjcoder.</h1>
              {/* <span className="text-orange-400">Technical</span> */}
            </div>
          </div>

          {/* Links Section for larger screens */}
          <div className="hidden md:flex space-x-6 roboto-regular">
            <NavLink
              to="/"
              className={
                location.pathname === "/"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/source-code"
              className={
                location.pathname === "/source-code"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Source Code
            </NavLink>
            <NavLink
              to="/blogs"
              className={
                location.pathname === "/blogs"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/courses"
              className={
                location.pathname === "/courses"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={
                location.pathname === "/login"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={
                location.pathname === "/signup"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
              className="mobile-menu-button text-white"
            >
              {/* Icon for menu (hamburger) */}
              <div className="text-3xl">
                <span>{isOpen ? <MdOutlineClose /> : <HiMenuAlt3 />}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {/* Mobile Menu Links */}
        {isOpen && (
          <div
            className={`md:hidden flex flex-col space-y-5 items-center text-lg mt-4 bg-gray-800 p-4 roboto-regular
    ${isOpen ? "animate-slideIn" : "animate-slideOut"}`}
          >
            <NavLink
              to="/"
              className={
                location.pathname === "/"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/source-code"
              className={
                location.pathname === "/source-code"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Source Code
            </NavLink>
            <NavLink
              to="/blogs"
              className={
                location.pathname === "/blogs"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/courses"
              className={
                location.pathname === "/courses"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={
                location.pathname === "/login"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={
                location.pathname === "/signup"
                  ? "text-orange-400"
                  : "hover:text-orange-400 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Signup
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
