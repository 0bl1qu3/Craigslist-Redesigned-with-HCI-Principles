import React from 'react';
import "../Styles/Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1>Johannesburg Craigslist</h1>
        <div className="search-bar">
          <input type="text" placeholder="search craigslist" />
          <button>post an ad</button>
        </div>
        <div className="language-select">
          <select>
            <option value="english">english</option>
          </select>
          <select>
            <option value="south-africa">south africa</option>
            <option value="cape-town">cape town</option>
            <option value="durban">durban</option>
            <option value="johannesburg">johannesburg</option>
            <option value="pretoria">pretoria</option>
            <option value="worldwide">worldwide</option>
          </select>
        </div>
      </header>

      <main>
        {/* Calendar placeholder */}
        <div className="calendar">
          <div>event calendar</div>
        </div>

        {/* Categories Wrapper */}
        <div className="categories">
  <div className="category featured jobs-category">
    <h2>Jobs</h2>
    <p>Find jobs in finance, admin, engineering, design, science, and more.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category services-category">
    <h2>Services</h2>
    <p>Find local services from beauty to legal to writing.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category housing-category">
    <h2>Housing</h2>
    <p>Browse homes, rentals, swaps, and shared spaces.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category discussion-category">
    <h2>Discussion</h2>
    <p>Join conversations on technology, politics, and more.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category community-category">
    <h2>Community</h2>
    <p>Discover events, activities, and volunteer opportunities.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category for-sale-category">
    <h2>For Sale</h2>
    <p>Find appliances, furniture, electronics, and more.</p>
    <button className="view-all">View All</button>
  </div>

  <div className="category gigs-category">
    <h2>Gigs</h2>
    <p>Explore short-term and freelance opportunities.</p>
    <button className="view-all">View All</button>
  </div>


</div>

      </main>

      <footer>
        <p>© 2025 craigslist | help | safety | privacy | terms | about | app | sitemap</p>
      </footer>
    </div>
  );
};

export default HomePage;
