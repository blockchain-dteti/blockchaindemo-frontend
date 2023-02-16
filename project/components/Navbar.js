import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
// import Image from "next/image";
// import Logo from "../public/streamlineLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="ml-11 hidden md:block">
                <div className="mr-1 flex items-baseline space-x-4">
                  <button
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    href="cargo-owner/dashboard"
                    className="cursor-pointer font-bold hover:text-blue-400 text-black  px-3 py-2 rounded-md text-sm "
                  >
                    DASHBOARD
                  </button>
                  <button
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-400 text-black  px-3 py-2 rounded-md text-sm font-bold"
                  >
                    CREATE REQUEST
                  </button>

                  <button
                    activeClass="Services"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-blue-400 text-black  px-3 py-2 rounded-md text-sm font-bold"
                  >
                    REQUEST LIST
                  </button>
                  

                  <button
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer inline-block border-2 border-[#293165] leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out  bg-white text-[#293165] px-3 py-2 rounded-md text-sm hover:bg-[#293165] hover:text-white font-bold"
                  >
                    LOGOUT
                  </button>

                  <button
                    activeClass="Notif"
                    to="notif"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    REQUEST LIST
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#293165] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
