
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaSearch,
  FaGift,
  FaSlidersH,
  FaTimes
} from "react-icons/fa";
import { useCartWishlist } from "../CartWishlistContext";
import categories from "../categories.json";
import products from "../products.json";

import "./ExploreGifts.css";

function ExploreGifts() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All Gifts";
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [message, setMessage] = useState("");
  const {
    wishlist,
    wishlistCount,
    cartCount,
    toggleWishlist,
    addToCart
  } = useCartWishlist();

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Gifts" || product.category === category;

      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under500" && product.price < 500) ||
        (priceRange === "500to1000" &&
          product.price >= 500 && product.price <= 1000) ||
        (priceRange === "above1000" && product.price > 1000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, priceRange, sort]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to your cart! ♡`);

    setTimeout(() => setMessage(""), 2500);
  };

  const clearFilters = () => {
    setSearch("");
    setSearchParams(new URLSearchParams());
    setPriceRange("all");
    setSort("featured");
  };

  const selectCategory = (selectedCategory) => {
    const nextParams = new URLSearchParams(searchParams);
    if (selectedCategory === "All Gifts") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", selectedCategory);
    }
    setSearchParams(nextParams);
  };

  return (
    <main className="explore-page">

      {/* PAGE BANNER */}
      <section className="explore-banner">
        <div className="explore-banner-content">
          <span>♡ A LITTLE HAPPINESS AWAITS ♡</span>
          <h1>Explore Our Gifts 🎀</h1>
          <p>
            Thoughtful little surprises, made to create
            beautiful memories.
          </p>
          <div className="explore-breadcrumb">
            Home <span>/</span> Explore Gifts
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="explore-container container">

        <div className="explore-heading">
          <div>
            <h2>Find Your Perfect Gift ♡</h2>
            <p>Something special for every special person.</p>
          </div>

          <div className="explore-cart-count">
            <FaHeart /> {wishlistCount}
            <FaShoppingCart /> {cartCount}
          </div>
        </div>

        <div className="explore-toolbar">

          <div className="explore-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search for gifts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button onClick={() => setSearch("")}>
                <FaTimes />
              </button>
            )}
          </div>

          <div className="explore-selects">

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under500">Under ₹500</option>
              <option value="500to1000">₹500 - ₹1000</option>
              <option value="above1000">Above ₹1000</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="explore-categories">
          {["All Gifts", ...categories.map((item) => item.name)].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => selectCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRODUCT COUNT */}
        <div className="explore-result-heading">
          <div>
            <h3>Our Lovely Collection</h3>
            <p>{filteredProducts.length} beautiful gifts found ♡</p>
          </div>

          <button className="clear-filter" onClick={clearFilters}>
            <FaSlidersH /> Clear Filters
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="row g-4">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-6 col-md-4 col-lg-3" key={product.id}>

                <div className="explore-product-card">

                  {product.tag && (
                    <span className="explore-product-tag">
                      {product.tag}
                    </span>
                  )}

                  <button
                    className={`explore-heart ${
                      wishlist.some((item) => item.id === product.id) ? "liked" : ""
                    }`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={
                      wishlist.some((item) => item.id === product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={wishlist.some((item) => item.id === product.id)}
                  >
                    <FaHeart />
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="explore-product-image"
                    />
                  </Link>

                  <div className="explore-product-info">

                    <span className="explore-product-category">
                      {product.category}
                    </span>

                    <h4>
                      <Link
                        to={`/product/${product.id}`}
                        className="product-title-link"
                      >
                        {product.name}
                      </Link>
                    </h4>

                    <div className="explore-rating">
                      <FaStar /> {product.rating}
                      <span> (Reviews)</span>
                    </div>

                    <div className="explore-price">
                      ₹{product.price}
                      <del>₹{product.oldPrice}</del>
                    </div>

                    <button
                      className="explore-add-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <FaGift />
              <h3>No gifts found! ♡</h3>
              <p>Try another search or category.</p>
              <button onClick={clearFilters}>Explore All Gifts</button>
            </div>
          )}

        </div>

        {/* CART MESSAGE */}
        {message && (
          <div className="explore-toast">
            ♡ {message}
          </div>
        )}

      </section>
    </main>
  );
}

export default ExploreGifts;
