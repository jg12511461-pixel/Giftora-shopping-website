import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ExploreGifts from "./Pages/ExploreGifts";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import { CartWishlistProvider } from "./CartWishlistContext";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <CartWishlistProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route path="/explore" element={<ExploreGifts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartWishlistProvider>
  );
}

export default App;