import React, { useState } from "react";

const Contect = () => {
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
    <div>
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

export default Contect;
