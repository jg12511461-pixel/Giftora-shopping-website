
import React from "react";
import { FaGift, FaMagic, FaArrowRight, FaHeart } from "react-icons/fa";
import "./Header.css";

const slides = [
  {
    label: "♡ MADE WITH LOVE ♡",
    title: <>Little Gifts,<br />Big Feelings. ♡</>,
    description: "Discover adorable surprises and thoughtful gifts that make every moment unforgettable.",
    image: "./images/slide2.png"
  },
  {
    label: "♡ SPECIAL MOMENTS ♡",
    title: <>Make Every<br />Moment Magical.</>,
    description: "Beautiful surprises for the people who make your world special.",
    image: "./images/slide1.jpg"
  },
  {
    label: "♡ JUST BECAUSE ♡",
    title: <>Surprise Someone<br />With Love.</>,
    description: "Sometimes the sweetest gifts need no occasion.",
    image: "./images/slide3.jpg"
  }
];

function Header() {
  const [active, setActive] = React.useState(0);

  const next = () => setActive((active + 1) % slides.length);
  const prev = () => setActive((active - 1 + slides.length) % slides.length);

  const slide = slides[active];

  return (
    <header className="giftora-header">

      <button className="slider-arrow left" onClick={prev}>
        ‹
      </button>

      <div className="header-background"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(255,222,235,.96), rgba(255,222,235,.2)), url(${slide.image})` }}>

        <div className="header-content" key={active}>
          <span className="header-label">{slide.label}</span>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="header-buttons">
            <a href="#trending" className="header-primary">
              <FaGift /> Explore Gifts <FaArrowRight />
            </a>

            <a href="#gift-finder" className="header-secondary">
              <FaMagic /> Find Your Perfect Gift <FaHeart />
            </a>
          </div>

          <div className="header-tagline">
            Made for your favorite people, with love. ♡
          </div>
        </div>
      </div>

      <button className="slider-arrow right" onClick={next}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((item, index) => (
          <button
            key={index}
            className={active === index ? "selected" : ""}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </header>
  );
}

export default Header;
