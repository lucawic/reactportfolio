import React from "react";
import { projects } from "../data";

//React component to export this file to the APP
export default function Projects () {
    return (
        <section id="projects" className="text-gray-700 bg-green-50 body-font my-16 mb-48">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-20 mx-auto inline-block w-10 mb-4 text-black" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
</svg>
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                Apps I've Built
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 bg-green-50">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative shadow-2xl">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-indigo-300 bg-purple-50 opacity-0 hover:opacity-90">
                      <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-black mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed text-gray-700">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}