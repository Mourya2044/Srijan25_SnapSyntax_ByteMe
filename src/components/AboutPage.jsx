import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col items-center text-white">
      {/* Heading with arrow */}
      <div className="flex items-center justify-between w-full max-w-4xl mb-6">
        <h1 className="text-3xl font-bold ">About Me</h1>
        <span className="text-3xl ">&rarr;</span>
      </div>

      {/* Content box */}
      <div className="flex flex-col sm:flex-row p-6 w-full">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-full sm:w-1/3 flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="My Photo"
            className="rounded-lg object-cover h-40 w-40"
          />
        </div>

        {/* Paragraph and button */}
        <div className="flex flex-col justify-between w-full sm:w-2/3">
          <p className="text-justify mb-4">
            Hi! I'm Jayaditya Mondal, a Computer Science student at Jadavpur University. I'm passionate about building projects, exploring new technologies, and solving real-world problems through code.
          </p>
          <div>
            <button className="bg-purple-900 text-white px-5 py-2 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;