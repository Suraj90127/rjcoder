import React, { useEffect, useState } from 'react'
import banner from '../assets/source-code.avif'
import Bootstrap from '../assets/bootstrap.avif'
import html from '../assets/htmlcssjs.avif'
import next from '../assets/nextjs.avif'
import { FaCircleArrowRight } from 'react-icons/fa6'
const projectCards = [
  {
    title: "BOOTSTRAP5 WEBSITE",
    img: Bootstrap,
    description: "Complete Bootstrap v5.3 Tutorial Source Code",
  },
  {
    title: "FULLSTACK NEXT.JS",
    img: next,
    description: "Next.js 13.4 FullStack website source code",
  },
  {
    title: "PROFESSIONAL WEBSITE",
    img: html,
    description: "Typing Speed Test website using HTML, CSS and JavaScript",
  },
];
const SourceCode = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setDate(now.getDate() + 1);
      nextMidnight.setHours(0, 0, 0, 0); // Midnight

      const timeDiff = nextMidnight - now;

      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setShowFields(true); // Show the input fields
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`);
    // You can integrate backend API to handle the form submission here
  };

  return (
    <div>
    <div>
        <img src={banner} className='w-full object-cover h-auto' alt="" />
    </div>
    <div className="flex min-h-screen bg-gray-900 flex-col md:flex-row text-white font-sans justify-center">
      <div className="flex-1 p-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Diwali Source Code Sale at 199rs Only</h1>
        <p className="mb-4">Happy Diwali 🎉 Are you looking for high-quality, ready-to-use website source code? Look no further! Our collection of more than 10+ projects & websites has everything you need to get started on your next project.</p>
        <p className="mb-4">With responsive design, user-friendly navigation, and a range of powerful features and tools, these websites are sure to impress. And the best part? You can get access to the entire collection for just ₹199 wow.</p>
        <p className="mb-4">But that's not all. Not only do you get the source code for these amazing websites, all the videos are already uploaded on my youtube channel, so that you can learn and actually understand it. If you have any questions or need help getting started, just let us know and we'll be happy to assist.</p>
        <p className="mb-4">So why wait? Get the source code for these top-quality projects & websites now and take the first step towards creating something amazing. Order now and start building today!</p>
      </div>
      <div className="flex-1 p-8 bg-gray-800 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Path to Full-Stack Success with Thapa Technical</h2>
        <p className="text-xl mb-4">Time Remaining:</p>
        <p className="text-3xl font-bold mb-4">{timeRemaining}</p>
        <ul className="space-y-2 mb-6">
          <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>HTML Complete Code - 2025</li>
          <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>CSS Complete Code - 2025</li>
          <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>JavaScript Complete Code</li>
          <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Bootstrap 5 Complete Code</li>
          <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Dynamic Website (PHP, MySQL)</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Complete Responsive Website</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>React Course with 5 Projects - 2025</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>NodeJS & ExpressJS Complete Code</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Next.js Project Code</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>MongoDB Complete Code - 2025</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Dynamic Website (Node, MongoDB)</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Complete MERN Stack with Admin Panel Code - 2025</li>
                <li className='flex items-center gap-1'><span><FaCircleArrowRight /> </span>Bonus Source Code Also Included</li>
        </ul>
        {showFields && (
            <div className="mb-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          )}

          {!showFields && (
            <button
              onClick={handleButtonClick}
              className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
              Get Source Code - 199₹
            </button>
          )}
          <button className="w-full mt-4 py-2 px-4 bg-[#6f3d2e] text-white font-semibold rounded-md shadow-md hover:bg-[#6f3d2e]">
            View on Youtube
          </button>
      </div>
    </div>
    <div className="bg-gray-900 text-white p-8 ">
      <header className="mb-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className='w-full md:w-[70%]'>
            <h1 className="text-xl font-bold">India's Best Hosting and Domain</h1>
            <p className="mt-2">
              At Hostinger, we believe that hosting must be for everyone. That's why we provide the best services at the most affordable price. Get started now with the given link to get up to <span className="font-bold">85% discount</span> <span role="img" aria-label="pointer">👉</span>
            </p>
            <p className="mt-2">
              Don't forget to use <span className="font-bold">THAPA7</span> promo code to get an extra <span className="font-bold">10% discount</span> on existing discount.
            </p>
          </div>
          <button className="bg-[#6f3d2e] hover:bg-[#6f3d2e] px-4 py-2 rounded-md">Checkout Now</button>
        </div>
      </header>

      <section className='max-w-6xl mx-auto'>
        <h2 className="text-2xl font-bold mb-6">Get Awesome Project Codes for Free</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectCards.map((card) => (
            <div key={card.title} className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between hover:border-[1px] border-orange-500">
              <div className="w-full h-auto text-center py-2 rounded-t-lg">
              <img src={card.img} alt="img" className='mb-2'/>
                <h3 className="text-lg font-bold text-center">{card.title}</h3>
                <p className="text-sm text-center mt-2">{card.description}</p>
              </div>
              <div className="p-4 ">
                <button className="mt-4 w-full px-4 py-2 rounded-md bg-green-600 hover:bg-green-700">Download</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default SourceCode;
