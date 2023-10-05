import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  
  const removeNavbar = (event) => {
    event.preventDefault();
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenu) {
      mobileMenu.classList.toggle("mobile-hidden");
    }
  };  

  return (
    <>
      <nav class="bg-gray-800 fixed z-50 w-full">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="text-3xl d-flex ms-5 md:hidden">
              <button
                class="navbar-toggler border-0"
                onClick= {removeNavbar}
                type="button"
                id="navbarToggle"
              >
                <span className="text-white">&#8801;</span>
              </button>
            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div class="flex flex-shrink-0 items-center">
                <h1 className="font-semibold text-3xl">React Tools</h1>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    href="/"
                    class="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="/todos"
                    class="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Todo List
                  </a>
                  <a
                    href="/notes"
                    class="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Notes
                  </a>
                  <a
                    href="expanse"
                    class="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Expanse Tracker
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-hidden sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/todos"
              class="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Todo List
            </a>
            <a
              href="/notes"
              class="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Notes
            </a>
            <a
              href="/expanse"
              class="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Expanse Tracker
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
