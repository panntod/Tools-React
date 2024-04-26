import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navOptions = [
  { title: "Beranda", href: "/" },
  { title: "Todo List", href: "/todos" },
  { title: "Note", href: "/notes" },
  { title: "Expense Tracker", href: "/expenses" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent md:bg-gray-800 fixed z-50 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-3xl md:hidden flex justify-end p-5">
          <button
            onClick={toggleMenu}
            className="navbar-toggler border-0 focus:outline-none"
            type="button"
          >
            <span className="text-white">&#8801;</span>
          </button>
        </div>

        {/* Navbar Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right`}
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <h1 className="font-semibold text-gray-800 text-3xl">React Tools</h1>
              </div>
              <div className="-mr-2">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
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
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navOptions.map((navOption) => (
                <Link
                  key={navOption.title}
                  to={navOption.href}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === navOption.href
                      ? "text-white bg-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {navOption.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between h-16">
          <div className="flex flex-shrink-0 items-center">
            <h1 className="font-semibold text-3xl hidden md:block">
              React Tools
            </h1>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex mt-4 space-x-4">
              {navOptions.map((navOption) => (
                <Link
                  to={navOption.href}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname.split("/")[1] ===
                    navOption.href.split("/")[1]
                      ? "bg-gray-900"
                      : ""
                  }`}
                  key={navOption.title}
                >
                  {navOption.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 

export default Navbar;
