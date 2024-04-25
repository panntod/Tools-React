import React from "react";
import { Link, useLocation } from "react-router-dom";

const navOptions = [
  { title: "Beranda", href: "/" },
  { title: "Todo List", href: "/todos" },
  { title: "Note", href: "/notes" },
  { title: "Expense Tracker", href: "/expenses" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 fixed z-50 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="text-3xl d-flex ms-5 md:hidden">
            <button className="navbar-toggler border-0" type="button">
              <span className="text-white">&#8801;</span>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="font-semibold text-3xl">React Tools</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
