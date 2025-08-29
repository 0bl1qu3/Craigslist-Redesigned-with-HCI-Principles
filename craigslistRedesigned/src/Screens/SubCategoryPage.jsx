import React from "react";
import { useParams } from "react-router-dom";
import { Box, Drawer, Typography, Divider, List, ListItem, ListItemText, Grid, Card, CardContent, CardMedia } from "@mui/material";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";

// Example mock data
const mockItems = [
  { id: 1, title: "Upgraded Classic Army PX9 Airsoft Gun", price: "R5600", location: "Van Dyk Park", date: "8/26", image: "/assets/airsoft.jpg" },
  { id: 2, title: "6 PIECE DINING ROOM SUITE", price: "R6500", location: "Johannesburg", date: "8/26", image: "/assets/dining.jpg" },
  { id: 3, title: "TP-Link Archer MR-600 Router", price: "R700", location: "Florida", date: "8/24", image: "/assets/router.jpg" },
];

export default function SubCategoryPage() {
  const { category, subcategory } = useParams();

  const drawerWidth = 240;

  return (
    <>
    <Box sx={{ display: "flex" }}>
      {/* Filter Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", p: 2 },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Filters
        </Typography>
        <Divider />
        <List>
          <ListItem><ListItemText primary="Price Range" /></ListItem>
          <ListItem><ListItemText primary="Condition" /></ListItem>
          <ListItem><ListItemText primary="Location" /></ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {subcategory} in {category}
        </Typography>
        <Grid container spacing={2}>
          {mockItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6">{item.price}</Typography>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.date} • {item.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </>
  );
}
