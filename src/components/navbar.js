import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          React Tools
        </a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#contact">Contact</a>
          <a href="/todos">Todos</a>
          <a href="/notes">Notes</a>
          <a href="/expense">Expense Tracker</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
