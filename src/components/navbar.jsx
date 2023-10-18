import React from "react";
import "../css/navbar.css";

function NavItem({ href, text }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      aria-current="page"
    >
      {text}
    </a>
  );
}

function MobileMenu() {
  return (
    <div className="mobile-hidden sm:hidden" id="mobile-menu">
      <div className="flex flex-col text-center space-x-1 px-2 pb-3 pt-2">
        <NavItem href="/" text="Home" />
        <NavItem href="/todos" text="Todo List" />
        <NavItem href="/notes" text="Notes" />
        <NavItem href="/expanse" text="Expanse Tracker" />
      </div>
    </div>
  );
}


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
      <nav className="bg-gray-800 fixed z-50 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="text-3xl d-flex ms-5 md:hidden">
              <button
                className="navbar-toggler border-0"
                onClick={removeNavbar}
                type="button"
                id="navbarToggle"
              >
                <span className="text-white">&#8801;</span>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="font-semibold text-3xl">React Tools</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavItem href="/" text="Home" />
                  <NavItem href="/todos" text="Todo List" />
                  <NavItem href="/notes" text="Notes" />
                  <NavItem href="/expanse" text="Expanse Tracker" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu />
      </nav>
    </>
  );
};

export default Navbar;
