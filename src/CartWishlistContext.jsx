import { createContext, useContext, useEffect, useState } from "react";

const CartWishlistContext = createContext(null);
const CART_STORAGE_KEY = "giftora-cart";
const WISHLIST_STORAGE_KEY = "giftora-wishlist";

function readStorage(key, validate) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.filter(validate) : [];
  } catch (error) {
    console.warn(`Ignoring invalid ${key} data in localStorage.`, error);
    return [];
  }
}

function isProduct(item) {
  return (
    item !== null &&
    typeof item === "object" &&
    (typeof item.id === "number" || typeof item.id === "string") &&
    typeof item.name === "string" &&
    Number.isFinite(item.price) &&
    typeof item.image === "string"
  );
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Unable to save ${key} to localStorage.`, error);
  }
}

export function CartWishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() =>
    readStorage(WISHLIST_STORAGE_KEY, isProduct)
  );
  const [cart, setCart] = useState(() =>
    readStorage(
      CART_STORAGE_KEY,
      (item) =>
        isProduct(item) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
    )
  );

  useEffect(() => {
    saveStorage(WISHLIST_STORAGE_KEY, wishlist);
  }, [wishlist]);

  useEffect(() => {
    saveStorage(CART_STORAGE_KEY, cart);
  }, [cart]);

  const toggleWishlist = (product) => {
    setWishlist((items) =>
      items.some((item) => item.id === product.id)
        ? items.filter((item) => item.id !== product.id)
        : [...items, product]
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlist((items) => items.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing
        ? items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, change) => {
    setCart((items) =>
      items.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((items) => items.filter((item) => item.id !== productId));
  };

  const value = {
    wishlist,
    cart,
    wishlistCount: wishlist.length,
    cartCount: cart.reduce((count, item) => count + item.quantity, 0),
    toggleWishlist,
    removeFromWishlist,
    addToCart,
    updateQuantity,
    removeFromCart
  };

  return (
    <CartWishlistContext.Provider value={value}>
      {children}
    </CartWishlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartWishlist() {
  const context = useContext(CartWishlistContext);
  if (!context) {
    throw new Error("useCartWishlist must be used within CartWishlistProvider");
  }
  return context;
}
