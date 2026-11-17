
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import categories from "../categories.json";
import "./Categories.css";

function Categories() {
  return (
    <main className="categories-page">
      <section className="categories-heading">
        <span className="categories-eyebrow">A LITTLE SOMETHING FOR EVERYONE</span>
        <h1>Explore Our Categories</h1>
        <p>
          Find the perfect gift for every person, every occasion and every
          beautiful moment.
        </p>
      </section>

      <section className="categories-grid">
        {categories.map((category, index) => (
          <article className="category-card" key={category.id}>
            <div className="category-image">
              <img src={category.image} alt={category.name} loading="lazy" />
              <span className="category-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="category-info">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>

              <Link
                to={`/explore?category=${encodeURIComponent(category.name)}`}
                className="category-link"
              >
                Explore <FaArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="categories-bottom">
        <h2>Every gift tells a story 💗</h2>
        <p>Make someone's day a little more special with Giftora.</p>
        <Link to="/explore" className="categories-shop-btn">
          Shop All Gifts
        </Link>
      </section>
    </main>
  );
}

export default Categories;
