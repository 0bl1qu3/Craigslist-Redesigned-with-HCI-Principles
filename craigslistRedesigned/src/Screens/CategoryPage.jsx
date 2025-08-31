import React, { useState } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  InputAdornment,
  Typography,
} from "@mui/material";

// ✅ Icons
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";

// Job-related icons
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // Finance
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Transport
import SchoolIcon from "@mui/icons-material/School"; // Education
import EngineeringIcon from "@mui/icons-material/Engineering"; // Engineering
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // Healthcare

// Services icons
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural"; // Beauty
import GavelIcon from "@mui/icons-material/Gavel"; // Legal
import EditIcon from "@mui/icons-material/Edit"; // Writing
import MenuBookIcon from "@mui/icons-material/MenuBook"; // Tutoring

// Housing icons
import ApartmentIcon from "@mui/icons-material/Apartment"; // Apartments
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"; // Shared Rooms
import SyncAltIcon from "@mui/icons-material/SyncAlt"; // House Swap
import HomeIcon from "@mui/icons-material/Home"; // Rentals

// Community icons
import EventIcon from "@mui/icons-material/Event"; // Events
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"; // Volunteering
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // Activities

// Discussion icons
import ComputerIcon from "@mui/icons-material/Computer"; // Tech
import HowToVoteIcon from "@mui/icons-material/HowToVote"; // Politics
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"; // Lifestyle

// For Sale icons
import ChairIcon from "@mui/icons-material/Chair"; // Furniture
import DevicesIcon from "@mui/icons-material/Devices"; // Electronics
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Vehicles
import KitchenIcon from "@mui/icons-material/Kitchen"; // Appliances

// Gigs icons
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"; // Freelance
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Short-Term
import PublicIcon from "@mui/icons-material/Public"; // Remote

// ✅ Import new icons
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech"; // Government
import SecurityIcon from "@mui/icons-material/Security"; // Security
import CodeIcon from "@mui/icons-material/Code"; // Software
import MovieCreationIcon from "@mui/icons-material/MovieCreation"; // Film / Video
import ConstructionIcon from "@mui/icons-material/Construction"; // Labour
import AgricultureIcon from "@mui/icons-material/Agriculture"; // Farm / Garden
import HandymanIcon from "@mui/icons-material/Handyman"; // Skilled Trade
import BrushIcon from "@mui/icons-material/Brush"; // Creative
import CampaignIcon from "@mui/icons-material/Campaign"; // Politics
import ForumIcon from "@mui/icons-material/Forum"; // Debates
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Raves
import FastfoodIcon from "@mui/icons-material/Fastfood"; // Food
import MosqueIcon from "@mui/icons-material/Mosque"; // Religion
import ScienceIcon from "@mui/icons-material/Science"; // Science
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; // Sports
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // Help
import TravelExploreIcon from "@mui/icons-material/TravelExplore"; // Travel
import FavoriteIcon from "@mui/icons-material/Favorite"; // Beauty / Health
import DiamondIcon from "@mui/icons-material/Diamond"; // Jewellery
import BookIcon from "@mui/icons-material/Book"; // Books
import ToysIcon from "@mui/icons-material/Toys"; // Toys / Games
import TerminalIcon from "@mui/icons-material/Terminal"; // Software (For Sale)
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"; // Heavy Equipment
import GarageIcon from "@mui/icons-material/Garage"; // Garage Sale
import BuildIcon from "@mui/icons-material/Build"; // Auto Parts
import BusinessIcon from "@mui/icons-material/Business"; // Office / Commercial
import HouseIcon from "@mui/icons-material/House"; // SubLets / Temporary


// ✅ Subcategories with updated icons
const subcategories = {
  Jobs: [
    { name: "Accounting / Finance", icon: <AccountBalanceIcon /> },
    { name: "Transport", icon: <LocalShippingIcon /> },
    { name: "Education", icon: <SchoolIcon /> },
    { name: "Engineering", icon: <EngineeringIcon /> },
    { name: "Healthcare", icon: <LocalHospitalIcon /> },
    { name: "Government", icon: <MilitaryTechIcon /> },
    { name: "Housing / Real Estate", icon: <ApartmentIcon /> },
    { name: "Security", icon: <SecurityIcon /> },
    { name: "Software", icon: <CodeIcon /> },
    { name: "Film / Video", icon: <MovieCreationIcon /> },
    { name: "Writing / Editing", icon: <EditIcon /> },
    { name: "Labour", icon: <ConstructionIcon /> },
  ],
  Services: [
    { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
    { name: "Legal", icon: <GavelIcon /> },
    { name: "Tutoring", icon: <MenuBookIcon /> },
    { name: "Writing / Editing", icon: <EditIcon /> },
    { name: "Housing / Real Estate", icon: <ApartmentIcon /> },
    { name: "Transport", icon: <LocalShippingIcon /> },
    { name: "Farm / Garden", icon: <AgricultureIcon /> },
    { name: "Skilled Trade", icon: <HandymanIcon /> },
    { name: "Creative", icon: <BrushIcon /> },
  ],
  Housing: [
    { name: "Apartments", icon: <ApartmentIcon /> },
    { name: "Shared Rooms", icon: <MeetingRoomIcon /> },
    { name: "House Swap", icon: <SyncAltIcon /> },
    { name: "Rentals", icon: <HomeIcon /> },
    { name: "SubLets / Temporary", icon: <HouseIcon /> },
    { name: "Office / Commercial", icon: <BusinessIcon /> },
  ],
  Community: [
    { name: "Events", icon: <EventIcon /> },
    { name: "Volunteering", icon: <VolunteerActivismIcon /> },
    { name: "Activities", icon: <SportsEsportsIcon /> },
    { name: "Classes", icon: <SchoolIcon /> },
    { name: "Politics", icon: <CampaignIcon /> },
    { name: "Debates", icon: <ForumIcon /> },
    { name: "Raves", icon: <MusicNoteIcon /> },
  ],
  Discussion: [
    { name: "Technology", icon: <ComputerIcon /> },
    { name: "Politics", icon: <HowToVoteIcon /> },
    { name: "Lifestyle", icon: <SelfImprovementIcon /> },
    { name: "Food", icon: <FastfoodIcon /> },
    { name: "Religion", icon: <MosqueIcon /> },
    { name: "Science", icon: <ScienceIcon /> },
    { name: "Gaming", icon: <SportsEsportsIcon /> },
    { name: "Sports", icon: <SportsSoccerIcon /> },
    { name: "Jobs", icon: <WorkOutlineIcon /> },
    { name: "Help", icon: <HelpOutlineIcon /> },
    { name: "Travel", icon: <TravelExploreIcon /> },
  ],
  "For Sale": [
    { name: "Furniture", icon: <ChairIcon /> },
    { name: "Electronics", icon: <DevicesIcon /> },
    { name: "Vehicles", icon: <DirectionsCarIcon /> },
    { name: "Appliances", icon: <KitchenIcon /> },
    { name: "Beauty / Health", icon: <FavoriteIcon /> },
    { name: "Jewellery", icon: <DiamondIcon /> },
    { name: "Books", icon: <BookIcon /> },
    { name: "Toys / Games", icon: <ToysIcon /> },
    { name: "Software", icon: <TerminalIcon /> },
    { name: "Heavy Equipment", icon: <PrecisionManufacturingIcon /> },
    { name: "Garage Sale", icon: <GarageIcon /> },
    { name: "Auto Parts", icon: <BuildIcon /> },
  ],
  Gigs: [
    { name: "Freelance", icon: <WorkOutlineIcon /> },
    { name: "Short-Term", icon: <AccessTimeIcon /> },
    { name: "Remote", icon: <PublicIcon /> },

  ]
};


// ✅ Category options for dropdown (with "All")
const categoryOptions = ["All", ...Object.keys(subcategories)];

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const category = name || "Category";
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <ResponsiveAppBar />

      {/* Main Section */}
      <div
        style={{
          textAlign: "center",
          padding: "100px",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        {/* ✅ Category Heading */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Find everything related to {category}.
        </Typography>

        {/* ✅ Search + Category Selector */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            margin: "30px 0",
          }}
        >
          {/* Search Box */}
          <TextField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            label="Search"
            variant="outlined"
            sx={{ width: 400, backgroundColor: "white", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Category Selector */}
          <Autocomplete
            disablePortal
            value={categoryOptions.includes(category) ? category : "All"}
            onChange={(event, newValue) => {
              if (newValue === "All") {
                navigate("/"); // ✅ Go back to Home if "All" selected
              } else if (newValue) {
                navigate(`/category/${newValue}`);
              }
            }}
            options={categoryOptions}
            sx={{ width: 300, backgroundColor: "white", borderRadius: 1 }}
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
        </Box>

        {/* ✅ Subcategories Grid with unique icons */}
        {subcategories[category] && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 3,
              marginTop: "30px",
              maxWidth: "1000px",
              marginX: "auto",
            }}
          >
            {subcategories[category].map((sub, index) => (
              <Button
                key={index}
                component={Link}
                to={`/category/${category}/${encodeURIComponent(sub.name)}`}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 3,
                  padding: "15px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: 2,
                  "&:hover": {
                    backgroundColor: "#ffd700",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {sub.icon}
                {sub.name}
                {sub.icon}
              </Button>
            ))}
          </Box>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
