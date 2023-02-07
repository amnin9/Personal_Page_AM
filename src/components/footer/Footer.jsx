import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer footer__blob">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#quotations" className="footer__link">
              Quotati<span className="footer__link-color">ons</span>
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/alenmkhitaryan9/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/alenm9/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/alen9501"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AlenMkhitaryan. All rights reserved.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
