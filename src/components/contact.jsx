import { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxGfA8DJox2zVLcD4JAi5bc9KGMz41oqvxg552--CFf8K9YkbiczLDjQhSW9877zRMBlg/exec";

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const form = document.forms["contact-form"];
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      if (response.ok) {
        alert("Message Succesfully Send!");
        form.reset();
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="section-title">
          Fill The Form. <br /> It's Easy.
        </h2>
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          id="contact-form"
          name="contact-form"
          className="pr-4 md:pr-12 md:border-r md:border-r-black"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
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
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control focus:outline-none"
              id="message"
              cols="30"
              rows="7"
              placeholder="Message"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`mt-4 w-36 h-12 bg-blue-500 hover:bg-blue-300 rounded-full ${
              loading ? "bg-blue-300" : ""
            }`}
            disabled={loading}
          >
            <span className="text-white whitespace-nowrap font-semibold">
              {loading ? "Loading..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>

      <div className="hidden sm:hidden md:flex contact-container">
        <div className="side-contact">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Let's Talk About Everything.
          </h1>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/pandhu.munjalindra"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:shadow-md hover:text-blue-500"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/pandhuu._/"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:shadow-md hover:text-blue-500"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="github.com/panntod"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:shadow-md hover:text-blue-500"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pandhu-arya-munjalindra-b9834b294"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:shadow-md hover:text-blue-500"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
