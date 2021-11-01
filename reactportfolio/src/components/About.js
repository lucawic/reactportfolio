import React from "react";

//React component to export this file to the APP
export default function About () {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            I am a greenhorn in the IT and Web Developement world. However, I have begun my first 1-year contract as a quality assurance tester, and have been ecstatic to get the ball rolling 
            as far as my career is concerned. Born and raised in Tucson, AZ. Living in the desert and still having family spread over the country/globe has offered a unique perspective on life. 
            There is more fluidity to the way I go about my interactions, because of this uniqueness. It is much easier to see the perspective of others,
            or rather take a non-objective view of a situational matter, and analyze it to its very core. These skills and attention to detail have been important to me thus far
            in my young professional career, and I certainly have imported these characteristics into my work as a Web Developer. 

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-200 shadow-md border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-blue-300 shadow-md border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center shadow-2xl rounded"
            alt="hero"
            src="./baileydoge.png"          />
        </div>
      </div>
    </section>
  );
}

