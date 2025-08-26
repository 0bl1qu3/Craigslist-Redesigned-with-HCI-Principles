import React, { useState } from "react";
import "../Styles/Homepage.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

// ✅ Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";

import { Calendar } from "@mantine/dates";

const autocompleteOptions = ["sandy", "mandy", "charles"];

const HomePage = () => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

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
            <option value="south-africa">south africa</option>
            <option value="cape-town">cape town</option>
            <option value="durban">durban</option>
            <option value="johannesburg">johannesburg</option>
            <option value="pretoria">pretoria</option>
            <option value="worldwide">worldwide</option>
          </select>

          {/* Location Select with Icon */}
          <FormControl fullWidth sx={{ width: 300 }}>
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value={location}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              }
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {/* Category Autocomplete with Icon */}
          <Autocomplete
            disablePortal
            options={autocompleteOptions}
            sx={{ width: 300, height: 'auto' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Category"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
      </header>

      <main>
        {/* Calendar placeholder */}
        <div className="calendar">
          <Calendar size="xs" />
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
