import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaTrash
} from "react-icons/fa";
import { useCartWishlist } from "../CartWishlistContext";
import "./Cart.css";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCartWishlist();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = subtotal > 999 ? 0 : subtotal > 0 ? 50 : 0;
  const total = subtotal + delivery;

  return (
    <main className="cart-page">
      <section className="cart-heading">
        <h1>My Shopping Cart</h1>
        <p>Your lovely gifts are waiting for you!</p>
      </section>

      {cart.length > 0 ? (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="cart-quantity">
                    <span>Quantity</span>
                    <div className="cart-quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <strong className="cart-item-total">
                  ₹{item.price * item.quantity}
                </strong>
                <button
                  type="button"
                  className="cart-delete"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </article>
            ))}

            <Link to="/explore" className="continue-shopping">
              Continue Shopping <FaArrowRight />
            </Link>
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
            <p className="delivery-note">
              {delivery === 0
                ? "Your order qualifies for free delivery."
                : "Free delivery on orders above ₹999."}
            </p>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button type="button" className="checkout-btn">
              Proceed to Checkout
            </button>
            <p>Thank you for shopping with Giftora 💗</p>
          </aside>
        </div>
      ) : (
        <div className="cart-empty">
          <FaShoppingBag />
          <h2>Your cart is waiting for something lovely!</h2>
          <p>Looks like you haven't added any gifts yet.</p>
          <Link to="/explore">Continue Shopping</Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
