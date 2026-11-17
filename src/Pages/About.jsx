
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGift,
  FaHeart,
  FaStar,
  FaSmile,
  FaArrowRight,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* Page Heading */}
      <section className="about-hero">
        <span className="about-label">GET TO KNOW US</span>
        <h1>Our Story, Your Happiness</h1>
        <p>
          We believe every gift carries a little love, a beautiful memory,
          and a story worth sharing.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=900"
            alt="Beautifully wrapped gifts"
          />
        </div>

        <div className="about-story-content">
          <span className="about-label">A LITTLE ABOUT GIFTORA</span>
          <h2>Making Every Moment Special</h2>
          <p>
            Welcome to Giftora, a place where thoughtful gifting meets
            creativity. We believe that the best gifts are not always the
            biggest or most expensive ones, but the ones chosen with love.
          </p>
          <p>
            From birthdays and anniversaries to little everyday surprises,
            we bring together beautiful gift ideas to help you make your
            favourite people feel special.
          </p>
          <Link to="/explore" className="about-button">
            Explore Gifts <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="purpose-card">
          <div className="purpose-icon"><FaHeart /></div>
          <h3>Our Mission</h3>
          <p>
            To make gifting simple, joyful, and meaningful by helping
            everyone find something special for the people they love.
          </p>
        </div>

        <div className="purpose-card">
          <div className="purpose-icon"><FaStar /></div>
          <h3>Our Vision</h3>
          <p>
            To become a place where every celebration feels more beautiful
            and every thoughtful gesture creates a lasting memory.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="about-section-heading">
          <span className="about-label">WHY GIFTORA?</span>
          <h2>A Little More Love in Every Gift</h2>
          <p>Because every special person deserves a thoughtful surprise.</p>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <FaGift />
            <h3>Thoughtful Choices</h3>
            <p>Gift ideas for every occasion and every special person.</p>
          </div>

          <div className="about-feature">
            <FaHeart />
            <h3>Made with Love</h3>
            <p>Beautiful inspiration to make your gifts feel personal.</p>
          </div>

          <div className="about-feature">
            <FaSmile />
            <h3>Happy Moments</h3>
            <p>Helping you turn ordinary days into lovely memories.</p>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="about-closing">
        <h2>Spread Love, One Gift at a Time 💗</h2>
        <p>Find something lovely. Make someone smile.</p>
        <Link to="/categories" className="about-button">
          Discover Categories <FaArrowRight />
        </Link>
      </section>

    </main>
  );
}

export default About;
