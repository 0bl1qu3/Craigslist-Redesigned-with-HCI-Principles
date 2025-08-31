import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Autocomplete,
  InputAdornment,
  Button,
  FormControlLabel,
  Checkbox,
  Collapse,
  IconButton,
} from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import CategoryIcon from "@mui/icons-material/Category";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import PriceFilter from "../Components/PriceFilter";

// ✅ Import star icon
import StarIcon from "@mui/icons-material/Star";

const mockItems = [
  {
    id: 1,
    title: "Item #1",
    price: "R1200",
    location: "Johannesburg",
    date: "8/20",
    image: "/assets/item1.jpg",
  },
  {
    id: 2,
    title: "Item #2",
    price: "R3400",
    location: "Cape Town",
    date: "8/21",
    image: "/assets/item2.jpg",
  },
  {
    id: 3,
    title: "Item #3",
    price: "R560",
    location: "Durban",
    date: "8/22",
    image: "/assets/item3.jpg",
  },
  {
    id: 4,
    title: "Item #4",
    price: "R7800",
    location: "Pretoria",
    date: "8/23",
    image: "/assets/item4.jpg",
  },
  {
    id: 5,
    title: "Item #5",
    price: "R950",
    location: "Florida",
    date: "8/24",
    image: "/assets/item5.jpg",
  },
  {
    id: 6,
    title: "Item #6",
    price: "R4300",
    location: "Johannesburg",
    date: "8/25",
    image: "/assets/item6.jpg",
  },
  {
    id: 7,
    title: "Item #7",
    price: "R2100",
    location: "Cape Town",
    date: "8/26",
    image: "/assets/item7.jpg",
  },
  {
    id: 8,
    title: "Item #8",
    price: "R670",
    location: "Durban",
    date: "8/27",
    image: "/assets/item8.jpg",
  },
  {
    id: 9,
    title: "Item #9",
    price: "R8900",
    location: "Pretoria",
    date: "8/28",
    image: "/assets/item9.jpg",
  },
  {
    id: 10,
    title: "Item #10",
    price: "R2500",
    location: "Florida",
    date: "8/29",
    image: "/assets/item10.jpg",
  },
  {
    id: 11,
    title: "Item #11",
    price: "R1750",
    location: "Johannesburg",
    date: "8/21",
    image: "/assets/item11.jpg",
  },
  {
    id: 12,
    title: "Item #12",
    price: "R6400",
    location: "Cape Town",
    date: "8/22",
    image: "/assets/item12.jpg",
  },
  {
    id: 13,
    title: "Item #13",
    price: "R980",
    location: "Durban",
    date: "8/23",
    image: "/assets/item13.jpg",
  },
  {
    id: 14,
    title: "Item #14",
    price: "R7200",
    location: "Pretoria",
    date: "8/24",
    image: "/assets/item14.jpg",
  },
  {
    id: 15,
    title: "Item #15",
    price: "R3100",
    location: "Florida",
    date: "8/25",
    image: "/assets/item15.jpg",
  },
  {
    id: 16,
    title: "Item #16",
    price: "R850",
    location: "Johannesburg",
    date: "8/26",
    image: "/assets/item16.jpg",
  },
  {
    id: 17,
    title: "Item #17",
    price: "R4600",
    location: "Cape Town",
    date: "8/27",
    image: "/assets/item17.jpg",
  },
  {
    id: 18,
    title: "Item #18",
    price: "R2999",
    location: "Durban",
    date: "8/28",
    image: "/assets/item18.jpg",
  },
  {
    id: 19,
    title: "Item #19",
    price: "R780",
    location: "Pretoria",
    date: "8/29",
    image: "/assets/item19.jpg",
  },
  {
    id: 20,
    title: "Item #20",
    price: "R5200",
    location: "Florida",
    date: "8/30",
    image: "/assets/item20.jpg",
  },
];


const categoryOptions = [
  "Jobs",
  "Services",
  "Housing",
  "Discussion",
  "Community",
  "For Sale",
  "Gigs",
  "All",
];

const subCategoryOptions = {
  Jobs: [
    "Accounting / Finance",
    "Transport",
    "Education",
    "Engineering",
    "Healthcare",
    "Government",
    "Housing / Real Estate",
    "Security",
    "Software",
    "Film / Video",
    "Writing / Editing",
    "Labour",
  ],
  Services: [
    "Beauty",
    "Legal",
    "Tutoring",
    "Writing / Editing",
    "Housing / Real Estate",
    "Transport",
    "Farm / Garden",
    "Skilled Trade",
    "Creative",
  ],
  Housing: [
    "Apartments",
    "Shared Rooms",
    "House Swap",
    "Rentals",
    "SubLets / Temporary",
    "Office / Commercial",
  ],
  Community: [
    "Events",
    "Volunteering",
    "Activities",
    "Classes",
    "Politics",
    "Debates",
    "Raves",
  ],
  Discussion: [
    "Technology",
    "Politics",
    "Lifestyle",
    "Food",
    "Religion",
    "Science",
    "Gaming",
    "Sports",
    "Jobs",
    "Help",
    "Travel",
  ],
  "For Sale": [
    "Furniture",
    "Electronics",
    "Vehicles",
    "Appliances",
    "Beauty / Health",
    "Jewellery",
    "Books",
    "Toys / Games",
    "Software",
    "Heavy Equipment",
    "Garage Sale",
    "Auto Parts",
  ],
  Gigs: ["Freelance", "Short-Term", "Remote"],
  All: [],
};


const locations = ["Johannesburg", "Durban", "Cape Town", "Pretoria", "Florida"];

// Universal checkbox filter options
const ratingOptions = ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"];
const dateOptions = ["Last 24 hours", "Last 7 days", "Last 30 days"];
const brandOptions = ["Samsung", "Apple", "Sony", "LG"];

export default function SubCategoryPage() {
  const { name, sub } = useParams();
  const navigate = useNavigate();
  const drawerWidth = 260;

  // States
  const [view, setView] = useState("grid");
  const [location, setLocation] = useState("Johannesburg");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [openConditions, setOpenConditions] = useState(true);
  const [openDates, setOpenDates] = useState(true);
  const [openBrands, setOpenBrands] = useState(false);

  const handleToggle = (setter) => setter((prev) => !prev);

  const handleCheckboxChange = (value, selectedState, setState) => {
    if (selectedState.includes(value)) {
      setState(selectedState.filter((item) => item !== value));
    } else {
      setState([...selectedState, value]);
    }
  };

  const handleViewChange = (event, nextView) => {
    if (nextView !== null) setView(nextView);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveAppBar />

      {/* Drawer for Filters */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: "77px",
            height: "calc(100% - 77px)",
            display: "flex",
            flexDirection: "column",
            p: 2,
          },
        }}
      >
        <Box sx={{flexGrow: 1,}}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
          Filters
        </Typography>
        <Divider />

        {/* Location Selector */}
        <Box sx={{ mt: 2 }}>
          <Autocomplete
            disablePortal
            options={locations}
            value={location}
            onChange={(e, newValue) => setLocation(newValue)}
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
        </Box>

        {/* Price Range Filter */}
        <Box sx={{ mt: 3 }}>
          <PriceFilter value={priceRange} onChange={setPriceRange} />
        </Box>

        {/* ⭐ Star Rating Filter */}
        <Box sx={{ mt: 3 }}>
        <Box
            sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
            onClick={() => handleToggle(setOpenConditions)}
        >
            <Typography variant="subtitle1">Star Rating</Typography>
            <IconButton size="small">
            {openConditions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </Box>
        <Collapse in={openConditions}>
            {ratingOptions.map((option) => (
            <FormControlLabel
                key={option}
                control={
                <Checkbox
                    checked={selectedConditions.includes(option)}
                    onChange={() =>
                    handleCheckboxChange(option, selectedConditions, setSelectedConditions)
                    }
                />
                }
                label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography>{option}</Typography>
                    <StarIcon sx={{ color: "#FFD700" }} />
                </Box>
                }
            />
            ))}
        </Collapse>
        </Box>

        {/* Date Posted Filter */}
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
            onClick={() => handleToggle(setOpenDates)}
          >
            <Typography variant="subtitle1">Date Posted</Typography>
            <IconButton size="small">
              {openDates ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={openDates}>
            {dateOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedDates.includes(option)}
                    onChange={() =>
                      handleCheckboxChange(option, selectedDates, setSelectedDates)
                    }
                  />
                }
                label={option}
              />
            ))}
          </Collapse>
        </Box>

        {/* Brand Filter */}
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
            onClick={() => handleToggle(setOpenBrands)}
          >
            <Typography variant="subtitle1">Brand</Typography>
            <IconButton size="small">
              {openBrands ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={openBrands}>
            {brandOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(option)}
                    onChange={() =>
                      handleCheckboxChange(option, selectedBrands, setSelectedBrands)
                    }
                  />
                }
                label={option}
              />
            ))}
          </Collapse>
        </Box>

        {/* Apply Filters Button */}
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" fullWidth>
            Apply Filters
          </Button>
        </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          p: 3,
          mt: "64px",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        {/* Category + Subcategory + Layout Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <Typography variant="h5" sx={{ minWidth: "fit-content" }}>
            {name} in {sub}
          </Typography>

          {/* Category Selector */}
          <Autocomplete
            disablePortal
            defaultValue={name || "All"}
            options={categoryOptions}
            onChange={(event, newValue) => {
              if (newValue === "All") {
                navigate("/");
              } else if (newValue) {
                navigate(`/category/${newValue}`);
              }
            }}
            sx={{ width: 250 }}
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

          {/* Subcategory Selector */}
          <Autocomplete
            disablePortal
            defaultValue={sub || ""}
            options={subCategoryOptions[name] || []}
            onChange={(event, newValue) => {
              if (newValue && name) {
                navigate(`/category/${name}/${encodeURIComponent(newValue)}`);
              }
            }}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Subcategory"
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

          {/* Layout Toggle */}
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
            sx={{ ml: "auto" }}
          >
            <ToggleButton value="grid" aria-label="grid view">
              <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list view">
              <ViewListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Items Display */}
        {view === "grid" ? (
<Grid container spacing={2}>
  {mockItems.map((item) => (
    <Grid item xs={12} sm={6} md={2.4} key={item.id}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",        // ✅ Make all cards equal height
          minHeight: 250,        // ✅ Optional: set base height
          boxSizing: "border-box",
          width: '220px'
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ height: 140, objectFit: "cover" }} // ✅ Consistent image height
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" noWrap>
            {item.title}
          </Typography>
          <Typography variant="body2">{item.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.location}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {mockItems.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", alignItems: "center", p: 1, width: '1180px' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 150,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.price}</Typography>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.date} • {item.location}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
