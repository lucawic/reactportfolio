import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar() {
    return (
        <header className="bg-blue-50 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-black mb-4 md-mb-0">
                    <a className="inline-flex pt-6">
                    <img src="./GitHublogo.png" className="ml-3 text-xl"/>
                    </a>
                    <a href="https://github.com/lucawic" target="_blank" className="ml-3 text-xl">
                        lucawic
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Apps I've Built
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#about" className="mr-5 hover:text-white">
                    About
                    </a>
                </nav>
                <a
                href="#contact" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-black hover;text-white rounded text-base mt-4 md:mt-0 shadow-lg">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
    }