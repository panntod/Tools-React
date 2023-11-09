import React from "react";
import "../css/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Based In</p>
      <p className="footer-subtitle">Malang, Jawa Timur, Indonesia</p>
      <div className="footer-social">
        <a href="https://www.instagram.com/pandhuu._" className="sosmed-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://github.com/panntod" className="sosmed-icon">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/pandhu.munjalindra"
          className="sosmed-icon"
        >
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <a href="https://panntod.github.io/" className="font-semibold my-4">Back To Portfolio <i className="fa fa-arrow-right"></i></a>
      <p className="footer-copy">&copy; 2023 Pandhu Arya</p>
    </footer>
  );
};

export default Footer;
