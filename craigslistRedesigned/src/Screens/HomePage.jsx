import React from 'react';
import "../Styles/Homepage.css";

const HomePage = () => {
  
  const categories = [
    { name: 'community', subcategories: ['activities', 'events', 'volunteers'] },
    { name: 'housing', subcategories: ['housing/real estate', 'housing swap', 'rooms/shared'] },
    { name: 'jobs', subcategories: ['accounting/finance', 'customer service', 'temp jobs'] },
    { name: 'for sale', subcategories: ['appliances', 'furniture', 'toys/games'] },
    { name: 'services', subcategories: ['beauty', 'legal', 'writing/editing'] },
    { name: 'discussion forums', subcategories: ['apple', 'philosophy', 'politics'] }
  ];

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
        <div className="calendar">
          {/* Simple calendar placeholder */}
          <div>event calendar</div>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h2>{category.name}</h2>
              <ul>
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{sub}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>© 2025 craigslist | help | safety | privacy | terms | about | app | sitemap</p>
      </footer>
    </div>
  );
};

export default HomePage;