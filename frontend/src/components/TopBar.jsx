import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <nav class="bg-white dark:bg-gray-800  shadow ">
          <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
              <div class="w-full justify-between flex items-center">
                <Link class="flex-shrink-0" to="/">
                  <h4>News Website</h4>
                </Link>
                <div class="hidden md:block">
                  <div class="flex items-baseline ml-10 space-x-4">
                    <Link
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/topheadline"
                    >
                      Top headline
                    </Link>
                    <Link
                      class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/business"
                    >
                      Business
                    </Link>
                    <Link
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/india"
                    >
                      India
                    </Link>
                    <Link
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/it"
                    >
                      IT
                    </Link>
                    <Link
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/politics"
                    >
                      Politics
                    </Link>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="flex items-center ml-4 md:ml-6"></div>
              </div>
              <div class="flex-mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div class="md:hidden">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/#"
                >
                  Home
                </a>
                <a
                  class="text-gray-300 hover:text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/#"
                >
                  Gallery
                </a>
                <a
                  class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/#"
                >
                  Business
                </a>
                <a
                  class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href="/#"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
