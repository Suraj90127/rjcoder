import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  const teamMembers = [
    {
      name: "Vinod Bahadur Thapa",
      title: "FOUNDER/CEO",
      image: "./images/thapatechnical1.png", // Replace with actual image URL
      socials: [
        { icon: "youtube", url: "https://youtube.com" },
        { icon: "github", url: "https://github.com" },
        { icon: "instagram", url: "https://instagram.com" },
        { icon: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Binamra Lamsal",
      title: "CTO",
      image: "./images/binamra.png", // Replace with actual image URL
      socials: [
        { icon: "github", url: "https://github.com" },
        { icon: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Anil Rajole",
      title: "CIO",
      image: "./images/anil.jpeg", // Replace with actual image URL
      socials: [
        { icon: "github", url: "https://github.com" },
        { icon: "twitter", url: "https://twitter.com" },
      ],
    },
  ];

  return (
    <div>
      <div className="relative bg-gray-900">
        {/* Background Banner */}
        <div
          className=""
          style={{
            backgroundImage: `url('./images/aboutbanner.jpeg')`, // Replace with your background image URL
          }}
        >
          {/* Overlay for dark effect */}
          <div className=" "></div>

          {/* Go Back and Breadcrumb */}
          <div className=" containe mx-auto md:px-52 sm:px-0 md:py-20 sm:py-10 text-white bg-black opacity-50 inset-0 sm:pl-20 md:pl-52">
            <button className="text-sm mb-4 cursor-pointer">GO BACK</button>
            <div className="text-xs text-gray-400">
              <span className="mr-2">HOME</span> -{" "}
              <span className="ml-2">ABOUT</span>
            </div>

            {/* Title Section */}
            <h1 className="text-4xl md:text-6xl font-bold mt-10">
              Who is Thapa Technical?
            </h1>
            <p className="mt-4 text-gray-400">March 5, 2023</p>
          </div>
        </div>

        {/* Content Section */}
        <div className=" mx-auto px-4 md:py-16 sm:pt-10 bg-gray-900 text-white md:w-[70%] sm:w-[94%] text-[15px] roboto-medium tracking-wide ">
          <p className=" tracking-wide">
            ThapaTechnical is all about Website Development, Technical, Tips and
            Tricks, Designs Principle and Programming videos in the Hindi
            Language.
          </p>
          <p className="mt-8">
            At Thapa Technical, we cover a wide range of website development
            languages such as HTML, CSS, JavaScript, React, Node, Express,
            MongoDB, Next.js, and more. We aim to make these topics easily
            accessible and understandable for everyone, regardless of your level
            of experience.
          </p>
          <p className="mt-8">
            With over 600K subscribers on our YouTube channel, Thapa Technical
            has become a popular destination for those looking to learn more
            about website development and programming. Our videos are designed
            to be engaging and informative, and we strive to create a supportive
            community where you can connect with other learners and share your
            knowledge.
          </p>
          <p className="mt-8">
            Vinod Bahadur Thapa, the founder of Thapa Technical, completed his
            Master's degree in Computer Science and has been sharing his
            knowledge and expertise with others ever since. He is passionate
            about helping others learn and grow in the field of technology, and
            his commitment to providing free and accessible education has made
            Thapa Technical a well-respected and trusted resource in the
            community.
          </p>
          <p className="mt-8">
            Thank you for visiting Thapa Technical. We hope you find our content
            helpful and informative, and we look forward to helping you achieve
            your goals in website development and programming. If you have any
            questions or feedback, please don't hesitate to contact us.
          </p>
          <div className="mt-8 mx-auto">
            <img
              className="md:w-[70%] sm:w-[90%] mx-auto"
              src="./images/thapa_about.png"
              alt=""
            />
          </div>

          <div>
            <div className="bg-gray-900 text-white md:py-16 sm:py-10 px-4">
              {/* Header */}
              <div className="text-center mb-16">
                <p className="text-sm text-orange-400 uppercase">
                  We Are The Developer
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Our Awesome Team Members
                </h2>
              </div>

              {/* Team Members */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.title}</p>
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4 mt-4">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-500"
                        >
                          <i className={`fab fa-${social.icon} text-lg`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="text-center mt-16 md:w-[100%] sm:w-[100%] mx-auto bg-gray-700 md:px-[25%] py-10 rounded-lg sm:px-2">
                <p className="text-sm text-orange-400 uppercase mb-2">
                  Get In Touch
                </p>
                <p className="sm:text-xl md:text-2xl mb-8">
                  Yes, that's all about me. There is no better time to connect
                  with me via socials or filling the contact form.
                </p>
                <button className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700">
                  Let's Talk
                </button>

                <div className="flex gap-5 text-lg justify-center mt-5 sm:flex-col md:flex-row">
                  <p>Or</p>
                  <a
                    href="mailto:surajsingh26574@gmail.com"
                    className="text-orange-400 hover:text-orange-500 cursor-pointer"
                  >
                    surajsingh26574@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
