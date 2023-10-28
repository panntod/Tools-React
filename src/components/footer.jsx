import React from "react";
import "../css/footer.css"
const Footer = () => {
  return (
    <footer class="footer">
      <p class="footer-title">Based In</p>
      <p class="footer-subtitle">Malang, Jawa Timur, Indonesia</p>
      <div class="footer-social">
        <a href="https://www.instagram.com/pandhuu._" class="sosmed-icon">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="https://github.com/panntod" class="sosmed-icon">
          <i class="fa fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/pandhu.munjalindra"
          class="sosmed-icon"
        >
          <i class="fa fa-facebook"></i>
        </a>
      </div>
      <a href="panntod.github.io" className="font-semibold">Back To Portfolio <i className="fa fa-arrow-right"></i></a>
      <p class="footer-copy">&copy; 2023 Pandhu Arya</p>
    </footer>
  );
};

export default Footer;
