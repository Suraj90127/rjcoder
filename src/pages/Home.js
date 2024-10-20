import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className=" py-20 text-white flex flex-col justify-between px-8">
        <div className="md:w-[90%] mx-auto flex sm:flex-col md:flex-row justify-between">
          {/* Text Section */}
          <div className="md:w-[45%] sm:w-full  space-y-6">
            <h3 className="text-orange-400 uppercase tracking-wider">
              Hello and Welcome
            </h3>
            <h1 className="sm:text-2xl md:text-5xl font-semibold leading-[60px]">
              I am <span className="text-orange-400">Suraj Singh </span> <br />{" "}
              aka rjcoder.
            </h1>
            <p className="text-gray-300 text-lg roboto-regular leading-10 tracking-widest">
              This platform is dedicated to Website Development, Technical
              Insights, Tips and Tricks, Design Principles, Source Code Sales,
              and Programming Tutorials, all available in the Hindi language.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              <button className="bg-orange-400 px-6 py-2 rounded-full text-white hover:bg-orange-500 transition">
                See My Works
              </button>
              <button className="border border-orange-400 px-6 py-2 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition">
                Visit YouTube
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-[55%] sm:w-full mb-8 lg:mb-0">
            <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-orange-400">
              <img
                src="https://via.placeholder.com/300" // Replace with your image URL
                alt="Vinod Bahadur Thapa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full mt-20 flex justify-around">
          <div className="cursor-pointer">
            <p>Keep Scrolling</p>
          </div>
          <div className="flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-orange-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Discord
            </a>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="bg-gray-800 text-white py-16 px-8">
        <div className="md:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Text */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-orange-400 uppercase tracking-wide">
              About Me
            </h3>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-relaxed">
              I am RJ Coder, a passionate Web Developer and content creator. My
              goal is to help others by sharing knowledge on Web Development,
              Technical Tips, and programming tricks through practical videos.
            </h1>
            <p className="text-gray-300">
              Follow me on: Facebook, Instagram, LinkedIn
            </p>
            <p className="text-gray-300">Subscribe to my Channel: YouTube</p>
            <p className="text-gray-300">Join: Discord</p>
          </div>

          {/* Right Section - Image */}
          <div className="relative mt-12 lg:mt-0">
            <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-orange-400">
              <img
                src="https://via.placeholder.com/300" // Replace with your image URL
                alt="RJ Coder"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional Arrow */}
            <div className="absolute -top-6 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="orange"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
