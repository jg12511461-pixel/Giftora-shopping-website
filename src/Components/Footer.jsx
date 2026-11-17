
import React from "react";
import {
  FaInstagram, FaPinterest, FaFacebook,
  FaYoutube, FaHeart
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="giftora-footer" id="about">
      <div className="container">

        <div className="row g-4">

          <div className="col-12 col-md-3">
            <h2 className="footer-logo">🎀 Giftora ♡</h2>
            <p className="footer-tagline">
              Every Gift Tells a Story.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h5>Quick Links</h5>
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="col-6 col-md-3">
            <h5>Explore</h5>
            <a href="#categories">Birthday Gifts</a>
            <a href="#categories">Gifts for Her</a>
            <a href="#categories">Gifts for Friends</a>
            <a href="#categories">Personalized Gifts</a>
          </div>

          <div className="col-12 col-md-2">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#pinterest" aria-label="Pinterest"><FaPinterest /></a>
              <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="col-12 col-md-2 footer-love">
            <p>Made with <FaHeart /> </p>
            <p>and a little bit of pink magic.</p>
            <span>♡ 〰 ♡</span>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Giftora. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
