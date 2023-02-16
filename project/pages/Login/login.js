import React from "react";
import "tailwindcss/tailwind.css";

export default function login() {
  return (
    //     <div className=' flex items-center justify-center mt-32 py-12 px-4 sm:px-6 1g:px-8'>
    //       <div className="max-w-md w-full space-y-8">
    //         <div>
    //           <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-900">
    //             Sign in to your account
    //           </h2>
    //           <p className="mt-2 text-center text-sm text-gray-600">
    //             <a
    //               href="#"
    //               className="font-medium  text-indigo-600  hover:text-indigo-500 px-2"
    //             >
    //               Sign Up
    //             </a>
    //           </p>
    //         </div>
    //         <form className="mt-8 space-y-6">
    //           <div className=" rounded-md shadow-sm -space-y-px">
    //             <div>
    //               <input
    //                 type="email"
    //                 autoComplete="none"
    //                 required
    //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  placeholder-gray-500
    //  text-gray-900 rounded-t-md mb-2 focus:outline-none  focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm"
    //                 placeholder="Email address"
    //               />
    //             </div>
    //             <div>
    //               <input
    //                 type="password"
    //                 autoComplete="none"
    //                 required
    //                 className="appearance-none rounded-none relative block-w-full px-3 py-2 border border-gray-300 Oplaceholder-gray-500
    //  text-gray-900 rounded-b-md mb-2 focus:outline-none  focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm"
    //                 placeholder="password"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex items-center just ify-between">
    //             <div className="flex items-center">
    //               <input
    //                 type="checkbox"
    //                 className="h-4 w-4  text-indigo-600 Ofocus:ring-indigo-500 border-gray-300 rounded"
    //               />
    //               <label className="ml-2 block text-sm  text-gray-900">
    //                 Remember me
    //               </label>
    //             </div>
    //             <div className="text-sm">
    //               <a
    //                 href="#"
    //                 className="font-medium  text-indigo-600 hover:text-indigo-500"
    //               >
    //                 {" "}
    //                 Forgot your password{" "}
    //               </a>
    //             </div>
    //           </div>
    //           <div>
    //             <button
    //               className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-indigo-600  hover:bg-indigo-700
    // focus:outline-none focus: ring-2 focus:ring-offset-2  focus:ring-indigo-500"
    //             >
    //               Sign in
    //             </button>
    //           </div>
    //         </form>
    // </div>
    <div className="h-screen bg-white">
    <div className="flex items-center justify-center py-56">
      <div className="max-w-md w-full space-y-8">
        <h2 className=" mb-auto text-center text-3xl font-extrabold text-[#293165]">
          Cargo Owner
        </h2>
        <div className="flex items-center justify-center ">
          <div class="block p-12 rounded-lg shadow-lg bg-[#293165] max-w-max">
            <form class="w-full max-w-sm">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-[#EBEFF2] font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Email
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-[#D9D9D9] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#D9D9D9] focus:border-black"
                    id="inline-full-name"

                    placeholder="cargoowner@gmail.com"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-[#EBEFF2] font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#D9D9D9] focus:border-black"
                    id="inline-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                  <button
                    class="shadow bg-white hover:bg-[#293165] focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
