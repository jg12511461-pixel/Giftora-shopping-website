import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { useCartWishlist } from "../CartWishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCartWishlist();

  return (
    <main className="wishlist-page">
      <section className="wishlist-heading">
        <FaHeart />
        <h1>My Wishlist</h1>
        <p>Your favourite gifts, all in one lovely place.</p>
      </section>

      {wishlist.length > 0 ? (
        <section className="wishlist-grid" aria-label="Wishlisted gifts">
          {wishlist.map((item) => (
            <article className="wishlist-card" key={item.id}>
              <div className="wishlist-image">
                <img src={item.image} alt={item.name} />
                <button
                  type="button"
                  className="wishlist-remove"
                  aria-label={`Remove ${item.name} from wishlist`}
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrash />
                </button>
              </div>

              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button
                  type="button"
                  className="wishlist-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="wishlist-empty">
          <FaHeart />
          <h2>Your wishlist is waiting for a little love!</h2>
          <p>Save your favourite gifts here and find them anytime.</p>
          <Link to="/explore">Explore Gifts</Link>
        </div>
      )}
    </main>
  );
}

export default Wishlist;
