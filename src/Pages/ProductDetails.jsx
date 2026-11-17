
import { Link, useParams } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaArrowLeft
} from "react-icons/fa";

import products from "../products.json";
import { useCartWishlist } from "../CartWishlistContext";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const {
    wishlist,
    toggleWishlist,
    addToCart
  } = useCartWishlist();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Oops! Gift not found ♡</h2>
        <Link to="/explore">Back to Explore Gifts</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <main className="product-details-page">

      <div className="product-back">
        <Link to="/explore">
          <FaArrowLeft /> Back to Explore Gifts
        </Link>
      </div>

      <div className="product-details-container">

        {/* Product Image */}
        <div className="product-image-box">
          {product.tag && (
            <span className="details-product-tag">
              {product.tag}
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="details-main-image"
          />
        </div>

        {/* Product Information */}
        <div className="product-information">

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-rating">
            <FaStar />
            <span>{product.rating}</span>
            <span className="details-reviews">
              Customer rating
            </span>
          </div>

          <div className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
            <del>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>
          </div>

          <p className="details-description">
            Make every occasion memorable with our beautiful{" "}
            {product.name.toLowerCase()}. Thoughtfully selected
            to bring happiness and make your loved ones feel special.
            A lovely choice for gifting and celebrating special moments.
          </p>

          <div className="details-highlights">
            <h3>Product Highlights</h3>
            <p>♡ Beautifully presented gift</p>
            <p>♡ Perfect for {product.category.toLowerCase()}</p>
            <p>♡ A thoughtful surprise for someone special</p>
          </div>

          <div className="details-buttons">

            <button
              className="details-cart-btn"
              onClick={() => addToCart(product)}
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button
              className={`details-wishlist-btn ${
                isWishlisted ? "active" : ""
              }`}
              onClick={() => toggleWishlist(product)}
            >
              <FaHeart />
              {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
            </button>

          </div>

        </div>
      </div>

      {/* Related Products */}
      <section className="details-related">
        <h2>You May Also Like ♡</h2>
        <p>Discover more lovely gifts from Giftora.</p>

        <div className="details-related-grid">
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <Link
                to={`/product/${item.id}`}
                className="details-related-card"
                key={item.id}
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <span>
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </Link>
            ))}
        </div>
      </section>

    </main>
  );
}

export default ProductDetails;
