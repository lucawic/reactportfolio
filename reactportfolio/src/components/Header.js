import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

//React component to export this file to the APP
export default function Testimonials () {
    return (
    <section id="testimonials">
      <div className="container px-1 py-10 mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-80 inline-block text-blue-300 justify-center" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
        <div className="flex flex-wrap m-4">
        <div>
              <h1 className="text-gray-900 bg-purple-50 shadow-2xl p-5 w-full text-5xl m-10"> Lucas Wick <span className="text-7xl ">|||</span>  <span className="text-2xl ml-2 font-bold">Web Developer</span></h1>
          </div>
          {testimonials.map((testimonial) => (
            <div className="p-4 w-full">
              <div className="h-full bg-blue-200 shadow-2xl bg-opacity-40 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="block w-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
                <p className="leading-relaxed mb-6 text-gray-600">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-20 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-blue-900">
                      {testimonial.name}
                    </span>
                    <span className="text-blue-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}