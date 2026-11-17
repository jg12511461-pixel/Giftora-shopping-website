
import {
  FaHeart, FaShoppingCart, FaStar, FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../CartWishlistContext";
import categories from "../categories.json";
import products from "../products.json";
import "./Home.css";

function Home() {
  const { wishlist, toggleWishlist, addToCart } = useCartWishlist();

  return (
    <main className="giftora-home">

      {/* CATEGORY SECTION */}
      <section className="category-section" id="categories">
        <div className="container">

          <div className="section-title">
            <h2>🎀 A Little Something for Everyone ♡ 🎀</h2>
            <p>Find the perfect surprise for every special person.</p>
          </div>

          <div className="row g-3">
            {categories.filter((category) => category.featured).map((category) => (
              <div className="col-6 col-lg-3" key={category.id}>
                <Link
                  to={`/explore?category=${encodeURIComponent(category.name)}`}
                  className="category-card d-block text-decoration-none text-reset"
                >
                  <img src={category.image} alt={category.name} />
                  <div className="category-details">
                    <h5>{category.name}</h5>
                    <p>{category.description}</p>
                    <span className="category-explore">
                      ♧ Explore <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="trending-section" id="trending">
        <div className="container">

          <div className="section-title">
            <h2>🎀 Currently Crushing On 🎀</h2>
            <p>The little treasures everyone is loving.</p>
          </div>

          <div className="row g-3">
            {products.slice(0, 4).map((product) => (
              <div className="col-6 col-lg-3" key={product.id}>
                <div className="product-card">

                  {product.tag && (
                    <span className="product-tag">{product.tag}</span>
                  )}

                  <button
                    className={`wishlist-btn ${
                      wishlist.some((item) => item.id === product.id) ? "liked" : ""
                    }`}
                    aria-label={
                      wishlist.some((item) => item.id === product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={wishlist.some((item) => item.id === product.id)}
                    onClick={() => toggleWishlist(product)}
                  >
                    <FaHeart />
                  </button>

                  <img src={product.image} alt={product.name} />

                  <div className="product-details">
                    <h5>{product.name}</h5>

                    <div className="rating">
                      <FaStar /> {product.rating} <span>(12)</span>
                    </div>

                    <div className="price">
                      ₹{product.price}
                      <del> ₹{product.oldPrice}</del>
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GIFT FINDER */}
      <section className="gift-finder-section" id="gift-finder">
        <div className="container">
          <div className="gift-finder-content">
            <div className="gift-finder-image">
              🎁
            </div>

            <div className="gift-finder-text">
              <span>♡ YOUR PERSONAL GIFT ASSISTANT ♡</span>
              <h2>Not Sure What to Gift? 🎀</h2>
              <p>
                Tell us a little about your person, and we'll
                help you find something they'll absolutely love.
              </p>
            </div>

            <a href="#categories" className="finder-btn">
              Find Their Perfect Gift <FaHeart />
            </a>
          </div>
        </div>
      </section>

      {/* SPECIAL GIFT BOXES */}
      <section className="gift-box-section">
        <div className="container">

          <div className="section-title">
            <h2>🎀 Wrapped With Extra Love 🎀</h2>
          </div>

          <div className="row g-3">
            {products.slice(4, 7).map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="gift-box-card">
                  <img src={product.image} alt={product.name} />

                  <div className="gift-box-details">
                    <h5>{product.name}</h5>
                    <p>A thoughtful surprise for {product.category.toLowerCase()}.</p>
                    <h5>₹{product.price.toLocaleString("en-IN")}</h5>

                    <div className="gift-box-buttons">
                      <button>View Box <FaArrowRight /></button>
                      <button
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="just-because-section">
        <div className="just-because-content">
          <div>
            <h2>Just Because Gifts ♡</h2>
            <p>Sometimes, the best gifts need no occasion.</p>
          </div>

          <a href="#trending">
            Surprise Someone <FaArrowRight />
          </a>

          <span className="promo-bow">🎀</span>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="reviews-section">
        <div className="container">

          <div className="section-title">
            <h2>♡ Sweet Words From Happy Hearts ♡</h2>
          </div>

          <div className="row g-3">
            {[
              {
                name: "Riya S.",
                review: "The cutest gift box ever! Everything looked so beautiful."
              },
              {
                name: "Ananya M.",
                review: "Found the perfect birthday surprise in minutes!"
              },
              {
                name: "Sneha K.",
                review: "The packaging was just as lovely as the gift."
              }
            ].map((review) => (
              <div className="col-md-4" key={review.name}>
                <div className="review-card">
                  <div className="review-avatar">♡</div>

                  <div>
                    <div className="review-stars">★★★★★</div>
                    <p>"{review.review}"</p>
                    <h6>{review.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div>
            <h2>A Little Love in Your Inbox ♡</h2>
            <p>Get gift inspiration, special offers and adorable surprises.</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing! 💗");
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe ♡</button>
          </form>
        </div>
      </section>

    </main>
  );
}

export default Home;
