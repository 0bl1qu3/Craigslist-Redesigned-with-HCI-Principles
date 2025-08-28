import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Homepage.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Button from '@mui/material/Button';

// ✅ Icons
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { Calendar } from "@mantine/dates";

// ✅ Import the AppBar component
import ResponsiveAppBar from "../Components/ResponsiveAppBar";

const categoryOptions = ["sandy", "mandy", "charles"];
const locationOptions = ["South Africa", "Cape Town", "Durban", "Johannesburg", "Pretoria", "Worldwide"];

const HomePage = () => {
  const [location, setLocation] = useState("Worldwide");

  return (
    <>
    <ResponsiveAppBar />

    <div className="homepage-container">
      {/* ✅ Add App Bar at the very top */}

      <header>
        <div className="header-top">
          <h1>Location: {location}</h1>

          <Button variant="contained" endIcon={<ShoppingCartIcon />}>
            Post an Ad
          </Button>
        </div>

        <div className="language-select">
          <TextField
            fullWidth
            id="outlined-search"
            label="Search Craigslist"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Location Select with Icon */}
            <Autocomplete
              disablePortal
              value={location}
              onChange={(event, newValue) => {
                if (newValue) setLocation(newValue);
              }}
              options={locationOptions}
              sx={{ width: 500, height: "auto" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Location"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />

          {/* Category Autocomplete with Icon */}
          <Autocomplete
            disablePortal
            defaultValue={"All"}
            options={categoryOptions}
            sx={{ width: 400, height: "auto" }}
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
            <Link to="/category/jobs" className="view-all">View All</Link>
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
    </>
  );
};

export default HomePage;
