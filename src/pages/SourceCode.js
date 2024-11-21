import React from 'react'
import banner from '../Assets/source-code.avif'
import Bootstrap from '../Assets/bootstrap.avif'
import html from '../Assets/htmlcssjs.avif'
import next from '../Assets/nextjs.avif'
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
  ]
const SourceCode = () => {
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
        <p className="text-3xl font-bold mb-4"> 39:47:13</p>
        <ul className="space-y-2 mb-6">
          <li>HTML Complete Code - 2025</li>
          <li>CSS Complete Code - 2025</li>
          <li>JavaScript Complete Code</li>
          <li>Bootstrap 5 Complete Code</li>
          <li>Dynamic Website (PHP, MySQL)</li>
          <li>Complete Responsive Website</li>
          <li>React Course with 5 Projects - 2025</li>
          <li>NodeJS & ExpressJS Complete Code</li>
          <li>Next.js Project Code</li>
          <li>MongoDB Complete Code - 2025</li>
          <li>Dynamic Website (Node, MongoDB)</li>
          <li>Complete MERN Stack with Admin Panel Code - 2025</li>
          <li>Bonus Source Code Also Included</li>
        </ul>
        <button className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Get Source Code - 199₹
        </button>
        <button className="w-full mt-4 py-2 px-4 bg-[#6f3d2e] text-white font-semibold rounded-md shadow-md hover:bg-[#6f3d2e] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
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
              <img src={card.img} alt="img" />
              </div>
              <div className="p-4 ">
                <h3 className="text-lg font-bold text-center">{card.title}</h3>
                <p className="text-sm text-center mt-2">{card.description}</p>
                <button className="mt-4 w-full px-4 py-2 rounded-md bg-green-600 hover:bg-green-700">Download</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default SourceCode
