import React from "react";

const Blog = () => {
  const blogs = [
    {
      category: "Web Development",
      title: "Host A MERN Stack App On A VPS",
      image: "https://via.placeholder.com/300x200.png?text=Hostinger",
      description: "Learn to host a full-stack MERN application on a VPS.",
    },
    {
      category: "Web Development",
      title: "How To Create A Blog App Using React.Js?",
      image: "https://via.placeholder.com/300x200.png?text=React+JS",
      description: "Step-by-step guide to creating a blog with React.js.",
    },
    {
      category: "Web Designing",
      title: "What Is Good Web Design? 8 Principles To Follow",
      image: "https://via.placeholder.com/300x200.png?text=Web+Design",
    },
  ];
  const BlogCard = ({ blog }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-orange-400 uppercase text-sm">{blog.category}</p>
          <h3 className="text-white font-bold text-lg mb-2">{blog.title}</h3>
          <button className="text-orange-400 hover:text-orange-500 mt-4">
            View More
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-gray-900 text-white py-12">
        <div className=" px-4 md:px-8  md:w-[80%] sm:w-full mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-orange-400 uppercase tracking-wide">Popular</p>
            <h2 className="text-4xl font-bold mb-4">Blogs</h2>
            <div className="flex sm:flex-col md:flex-row justify-between">
              <div className="flex items-center space-x-4 text-sm mb-6">
                <button className="text-orange-400 hover:text-orange-500">
                  All
                </button>
                <button className="hover:text-orange-500">
                  Web Development
                </button>
                <button className="hover:text-orange-500">Web Designing</button>
              </div>
              {/* Search Bar */}
              <div className="">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-gray-800 p-2 rounded-lg w-full md:w-full mb-8 outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
