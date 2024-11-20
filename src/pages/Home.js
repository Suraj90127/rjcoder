import React, { useState } from "react";
import "./style.css";
import bgImage from "../Assets/youtube1.png";
import ytphone from "../Assets/ytmobile.png";

const Home = () => {
  const videos = [
    {
      id: "lpsLAP4x-tk",
      title: "Learn Complete JavaScript In One Video With 10+ Projects",
      tags: "Javascript, Html, Css",
    },
    {
      id: "lpsLAP4x-tk",
      title: "Learn Complete Next.JS 13.4 In One Video By Creating A Website",
      tags: "Next.Js, React, MongoDB",
    },
    {
      id: "lpsLAP4x-tk",
      title: "Complete React JS Tutorial In Hindi With 5 Projects In 2023",
      tags: "ReactJS, HTML, Styled-Comp, Javascript",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Reset form after submission (optional)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-900">
      <div className="md:py-20 sm:py-0 text-white flex flex-col justify-between md:px-8 sm:px-0">
        <div className="bg-gray-800 text-white py-16 px-8">
          <div className="md:w-[90%] sm:w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section - Text */}
            <div className="md:w-[45%] sm:w-full  space-y-6">
              <h3 className="text-orange-400 uppercase tracking-wider">
                Hello and Welcome
              </h3>
              <h1 className="sm:text-2xl md:text-5xl font-semibold leading-[60px]">
                I am <span className="text-orange-400">Suraj Singh </span>{" "}
                <br /> aka rjcoder.
              </h1>
              <p className="text-gray-300 text-lg roboto-regular md:leading-10 sm:leading-8 md:tracking-widest sm:tracking-wide">
                This platform is dedicated to Website Development, Technical
                Insights, Tips and Tricks, Design Principles, Source Code Sales,
                and Programming Tutorials, all available in the Hindi language.
              </p>

              {/* Buttons */}
              <div className="flex sm:flex-col md:flex-row justify-center lg:justify-start gap-5">
                <button className="bg-orange-400 px-6 py-2 rounded-full text-white hover:bg-orange-500 transition">
                  See My Works
                </button>
                <button className="border border-orange-400 px-6 py-2 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition">
                  Visit YouTube
                </button>
              </div>
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
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full sm:my-10 md:py-0 flex sm:flex-col md:flex-row justify-around sm:space-y-5 md:space-y-0">
          <div className="cursor-pointer text-center md:w-[50%] sm:w-full">
            <p>Keep Scrolling</p>
          </div>
          <div className="flex text-gray-400 md:w-[50%] sm:w-[90%] mx-auto text-center justify-center gap-5">
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
            <h1 className="sm:text-2xl md:text-3xl  leading-relaxed inter-main">
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

      {/* third section */}

      <div className="bg-gray-900 text-white py-20 px-8">
        <div className="md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-[40%] sm:w-full space-y-6">
            <h3 className="text-orange-400 uppercase tracking-wide">
              Services
            </h3>
            <h1 className="text-4xl font-bold">What I Do</h1>
            <p className="text-gray-300 leading-relaxed">
              We offer comprehensive digital services including web design,
              UI/UX design, app development, and web development. Our expertise
              spans visually captivating websites, intuitive user interfaces,
              feature-rich mobile apps, and tailored web solutions.
            </p>
          </div>

          {/* Right Section - Services List */}
          <div className="md:w-[40%] sm:w-full space-y-6 sm:mt-5">
            {[
              "WEB DESIGN",
              "UI/UX DESIGN",
              "APP DEVELOPMENT",
              "WEB DEVELOPMENT",
            ].map((service, index) => (
              <h2
                key={index}
                className="text-3xl md:text-end sm:text-start font-semibold border-b-2 border-transparent hover:border-orange-400 transition"
              >
                {service}
              </h2>
            ))}
          </div>
        </div>
        {/* Technologies Section */}
        <div className=" md:w-[80%] mx-auto flex flex-wrap mt-10">
          {[
            "HTML",
            "CSS",
            "SASS",
            "JAVASCRIPT",
            "NEXT.JS",
            "REACTJS",
            "NODE.JS",
            "EXPRESS.JS",
            "PHP",
          ].map((tech, index) => (
            <span
              key={index}
              className="text-orange-400 text-lg font-semibold mr-6 mb-4 cursor-pointer "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* fourth section */}

      <div className="bg-gray-900 text-white md:py-20 sm:py-0 md:px-8 sm:px-0">
        <div className="md:w-[70%] sm:w-full mx-auto rounded-lg shadow-lg bg-gray-800 py-10 relative">
          {/* Glow effect on the border */}
          <div className="absolute inset-0 rounded-lg border border-transparent hover:border-orange-500 transition duration-300 blur-sm"></div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="px-10">
              <h3 className="text-orange-400 uppercase tracking-wide mb-2">
                Services Counter
              </h3>
              <p className="sm:text-2xl md:text-4xl font-semibold mb-8 md:w-[80%] lineHieght">
                I have a 10 years of work experience and done lots of projects,
                freelancing, and designing works.
              </p>
            </div>

            {/* Counter Section */}
            <div className="flex  justify-between md:mt-20 sm:mt-10 md:px-10">
              <Counter value="120+" label="Projects" />
              <Counter value="80+" label="Clients" />
              <Counter value="10+" label="Collaborations" />
            </div>
          </div>
        </div>
      </div>
      {/* youtube section */}
      <div className="w-[100%] mx-auto">
        <div
          className="relative w-[90%] md:h-[600px] sm:h-auto py-5 mx-auto  rounded-xl overflow-hidden bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-950 bg-opacity-30"></div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full md:px-6 w-[90%] mx-auto">
            {/* Left Side: Text Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-orange-400 uppercase tracking-wide text-sm mb-4">
                Thapa Technical
              </h2>
              <h1 className="text-white sm:text-2xl md:text-3xl font-medium leading-snug mb-6">
                Start Learning with me by <br /> Subscribing to this Channel
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
                Join me on my YouTube channel dedicated to web development,
                where you can start your learning journey by subscribing.
                Explore valuable tutorials, tips, and tricks to enhance your web
                development skills and stay updated with the latest trends.
              </p>
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
                Check My YouTube
              </button>
            </div>
            {/* Right Side: Mobile Phone Mockup */}
            <div className="mt-10 md:mt-0 md:w-1/2 sm:hidden md:flex justify-center">
              <img
                src={ytphone}
                alt="YouTube Mobile View"
                className="w-80 h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* playlist section */}
      <div className="bg-gray-900 py-10 px-5">
        {/* Stats Section */}
        <div className="flex justify-around text-center mb-10 text-white">
          <div>
            <h2 className="text-3xl font-bold">600K+</h2>
            <p className="text-gray-400">Subscribers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">10m+</h2>
            <p className="text-gray-400">Views</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">1Lakh+</h2>
            <p className="text-gray-400">Videos</p>
          </div>
        </div>

        {/* Playlist Section */}
        <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl border border-orange-600 shadow-lg p-5 md:flex">
          {/* Left: YouTube Video Embed */}
          <div className="md:w-1/2">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg"
              src="https://www.youtube.com/embed/your-video-id?controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right: Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center md:pl-10 mt-5 md:mt-0 text-white">
            <h3 className="text-lg text-orange-400 mb-2 uppercase">
              Youtube Playlist
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Check out the latest{" "}
              <span className="text-orange-500">MERN Series Website</span>{" "}
              tutorial in Hindi
            </h2>

            <button className="mt-5 w-52 bg-orange-700 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
              Open Playlist
            </button>
          </div>
        </div>
      </div>
      {/* populor video section */}
      <div className="bg-gray-900 py-16 md:px-6 md:w-[80%] sm:w-[90%] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-orange-400 uppercase tracking-widest text-sm">
              Videos
            </p>
            <h1 className="text-white md:text-3xl sm:text-xl font-bold mt-5">
              Popular Videos on Youtube
            </h1>
          </div>
          <button className="text-orange-400 hover:underline">
            View All Videos
          </button>
        </div>

        {/* Video Cards Section */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:border-2"
            >
              {/* Embedded YouTube Video */}
              <div className="relative overflow-hidden pb-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Details */}
              <div className=" text-white mt-10">
                <p className="text-gray-400 text-sm mb-1">{video.tags}</p>
                <h2 className="text-lg font-semibold leading-snug">
                  {video.title}
                </h2>
              </div>
              {/* butoon */}

              <div className="mt-5">
                <button className="mt-5 w-52 bg-orange-700 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects & Source Codes */}

      <div className="md:w-[80%] sm:w-[90%] mx-auto">
        <div className="bg-gray-900 py-16 md:px-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-orange-400 uppercase tracking-widest text-sm">
                Projects
              </p>
              <h1 className="text-white sm:text-2xl md:text-4xl font-bold mt-5">
                Projects & Source Codes
              </h1>
            </div>
            <button className="text-orange-400 hover:underline">
              View All Projects
            </button>
          </div>

          {/* Project Card Section */}
          <div className="bg-gray-800 rounded-xl md:p-8 sm:p-4 shadow-lg flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Source Code Sale"
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow">
              <h2 className="text-white text-2xl font-bold">
                Thapa Source Code Sale
              </h2>
              <div className="flex sm:flex-col md:flex-row justify-between">
                <div>
                  <p className="text-gray-300 mt-4">
                    Are you looking for high-quality, ready-to-use website
                    source code? Look no further! Our collection of more than
                    10+ projects & websites has everything you need to get
                    started on your next project.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition">
                      Buy Source Code
                    </button>
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/4 flex-shrink-0 mt-6 lg:mt-0 lg:ml-10">
                  <ul className="text-gray-400 md:space-y-2 text-xl flex flex-wrap gap-3">
                    <li className="font-semibold">React JS</li>
                    <li className="font-semibold">Express JS</li>
                    <li className="font-semibold">Node JS</li>
                    <li className="font-semibold">Mongo DB</li>
                  </ul>
                </div>
              </div>

              {/* Buttons */}
            </div>

            {/* Tech Stack Section */}
          </div>
        </div>
      </div>

      {/* form data */}

      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-2">
              Contact Us
            </p>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Have a <span className="text-orange-400">Project</span> or want to{" "}
              <span className="text-orange-400">Collaborate</span>?
            </h1>
            <p className="text-gray-300 mb-8">
              We would love to hear from you. Drop a message.
            </p>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-gray-400 mb-1">Location</p>
              <h2 className="text-white text-lg font-semibold">
                Pune, Maharashtra
              </h2>
              <p className="text-gray-400 mt-4 mb-1">Mail at</p>
              <h2 className="text-white text-lg font-semibold">
                vinodthapavlog@gmail.com
              </h2>
              <p className="text-gray-400 mt-4 mb-1">Follow on</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-orange-400 hover:underline">
                  Facebook
                </a>
                <a href="#" className="text-orange-400 hover:underline">
                  Instagram
                </a>
                <a href="#" className="text-orange-400 hover:underline">
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-white text-2xl font-semibold mb-6">
                Send a message
              </h2>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name."
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email. "
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="I need help!"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-1" htmlFor="message">
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition w-full lg:w-auto"
              >
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Counter = ({ value, label }) => (
  <div className="text-center sm:text-left sm:mx-4 mb-6 sm:mb-0">
    <h2 className="sm:text-[40px] md:text-8xl font-bold text-gray-600">
      {value}
    </h2>
    <p className="text-sm font-semibold uppercase text-white tracking-wider md:ml-5 ml-0">
      {label}
    </p>
  </div>
);

export default Home;
