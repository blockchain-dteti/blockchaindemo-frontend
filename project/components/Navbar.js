import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full z-10 flex items-center ">
        <div className="flex items-center h-20 w-full ">
          <div className=" mx-32 w-full">
            <div className="flex items-center justify-between">
              <div className="space-x-6">
                <Link
                  href="/cargo-owner/dashboard"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer font-bold hover:text-blue-400 text-black py-2 rounded-md text-sm "
                >
                  DASHBOARD
                </Link>
                <Link
                  href="/cargo-owner/create"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 text-black py-2 rounded-md text-sm font-bold"
                >
                  CREATE REQUEST
                </Link>

                <Link
                  href="/cargo-owner/list"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 text-black py-2 rounded-md text-sm font-bold"
                >
                  REQUEST LIST
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="/cargo-owner/notif"
                  className="py-2"
                >
                  <svg
                    width="28"
                    height="25"
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75556 9.872V8.61343C4.75556 4.40865 8.89444 1 14 1C19.1055 1 23.2444 4.40864 23.2444 8.61343V9.872C23.2444 12.6085 24.2049 15.2866 26.01 17.5841L27 18.844H1L1.99001 17.584C3.79517 15.2866 4.75556 12.6085 4.75556 9.872Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5555 23.4702C13.3275 24.1766 14.6725 24.1766 15.4444 23.4702"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  smooth={true}
                  offset={50}
                  duration={500}
                  href="/cargo-owner/login"
                  className="cursor-pointer inline-block border-2 border-[#293165] leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out  bg-white text-[#293165] px-3 py-2 rounded-md text-sm hover:bg-[#293165] hover:text-white font-bold"
                >
                  LOGOUT
                </Link>
              </div>
            </div>
          </div>
          <div className="mr-10 flex md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="Link"
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
                  href="/cargo-owner/dashboard"
                  activeClass="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  DASHBOARD
                </Link>
                <Link
                  href="/cargo-owner/create"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CREATE REQUEST
                </Link>

                <Link
                  href="/cargo-owner/list"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  REQUEST LIST
                </Link>
                <Link
                  href="/cargo-owner/login"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  LOGOUT
                </Link>

                <Link
                  href="/cargo-owner/login"
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
