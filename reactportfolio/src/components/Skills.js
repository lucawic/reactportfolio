import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

//React component to export this file to the APP
export default function Skills() {
  return (
    <section id="skills" className="pb-96">
      <div className="container px-5 py-10 mx-auto border-8 border-indigo-50 shadow-2xl">
        <div className="text-center mb-20">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 inline-block mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>

          <p className="text-5xl leading-snug xl:w-2/4 lg:w-3/4 mx-auto">
            Skills & Tecnologies
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-yellow-100 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-gray-700 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-gray-500">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
