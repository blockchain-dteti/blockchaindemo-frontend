import React from "react";

export default function login() {
  return (
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
