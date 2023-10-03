import React, { useEffect } from "react";
import "../css/contact.css";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxGfA8DJox2zVLcD4JAi5bc9KGMz41oqvxg552--CFf8K9YkbiczLDjQhSW9877zRMBlg/exec";

  useEffect(() => {
    const form = document.forms["contact-form"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          alert("Message Succesfully Send!");
          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }, []);

  return (
    <>
      <div className="contact-container">
        <h2 className="section-title">
          Fill The Form. <br /> It's Easy.
        </h2>
        <form
          method="post"
          id="contact-form"
          name="contact-form"
          className="px-m form-shadow"
        >
          <input type="hidden" name="from" value="Todolist web"></input>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
              autocomplete="off"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              autocomplete="off"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              autocomplete="off"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              id="message"
              cols="30"
              rows="7"
              placeholder="Message"
              autocomplete="off"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="contact-container">
        <div className="side-contact">
          <h1 className="side-text">Let's Talk About Everything.</h1>
          <div className="contact-sosmed">
            <a href="https://www.facebook.com/pandhu.munjalindra" >
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/pandhuu._/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="github.com/panntod">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/pandhu-arya-munjalindra-b9834b294">
              <i className="fa fa-linkedin"></i>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
