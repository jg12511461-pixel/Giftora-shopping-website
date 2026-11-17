
import {
  FaHeart, FaShoppingCart, FaSearch,
  FaChevronDown, FaBars
} from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCartWishlist } from "../CartWishlistContext";

function Navbar() {
  const { wishlistCount, cartCount } = useCartWishlist();

  return (
    <>
      <div className="announcement">
        ✨ 🎀 A little something special is waiting for you!
        &nbsp; Free delivery on orders above ₹999 &nbsp; ♡
      </div>

      <nav className="giftora-nav">
        <div className="nav-container">

          <a href="/" className="brand">
            🎀 <span>Giftora</span> ♡
          </a>

          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <FaBars />
          </label>

          <div className="nav-content">
            <ul className="nav-links">
              <li><NavLink to="/">Home <FaChevronDown /></NavLink></li>
              <li>
                <NavLink to="/explore">Explore Gifts <FaChevronDown /></NavLink>
              </li>
              <li>
                <NavLink to="/categories">Categories <FaChevronDown /></NavLink>
              </li>
              <li><NavLink to="/about">About Us</NavLink></li>
            </ul>

            <div className="nav-search">
              <FaSearch />
              <input type="text" placeholder="Search gifts..." />
            </div>

            <div className="nav-actions">
              <NavLink to="/wishlist" aria-label="Wishlist">
                <FaHeart />
                <span className="nav-count">{wishlistCount}</span>
              </NavLink>
              <NavLink to="/cart" aria-label="Shopping cart">
                <FaShoppingCart />
                <span className="nav-count">{cartCount}</span>
              </NavLink>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
