import React from "react";

//React component to export this file to the APP
export default function About () {
    return (
        
        <section id="about"><div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
              <h1 className="text-yellow-900 text-4xl m-8 font-bold"> Lucas Wick  <span className="text-2xl ml-2">Web Developer</span></h1>
          </div>
          <p className="mb-8 leading-relaxed">
           This is a collection of my work and collaborations.
           I have chosen projects that I believe best displays my skills as a Web Developer, 
           and I have presented them in a way that can demonstrate my progress as I learn and grow my trade over time. 
           Some of this may be of interest to you. It can also be a resource to those willing to learn.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-50 bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-50 bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded border-solid border-4 border-green-900 shadow-xl"
            alt="hero"
            src="./baileydoge.png"
          />
        </div>
      </div>
</section>
    )
}