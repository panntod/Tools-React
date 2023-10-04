import React from "react";
import Contact from "../components/contact";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <section className="container home">
        <div className="home-content">
          <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">About This Content</h1>
          <div>
            <p>
              This is a simple tools project made with React.js. There are 3
              main tools in this project: Todo List, Note, and Expense Tracker.
              It's not a perfect app, but it's a good starting point for
              learning React.js. This is my first experience with React.js, and
              I hope you enjoy using this app. If you encounter any bugs contact
              me!, I'll do my best to fix them.
            </p>
          </div>
        </div>

        <div className="img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </div>
      </section>
      <h1 className="section-header text-5xl font-bold">Contact Me</h1>
      <section className="contact" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
