import React, { useState } from "react";
import { Box, Typography, Slider, TextField } from "@mui/material";

export default function PriceFilter({ onChange }) {
  const [value, setValue] = useState([0, 9999]); // default range: 0 - 10,000

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleInputChange = (index, newVal) => {
    const updated = [...value];
    updated[index] = Number(newVal) || 0;
    setValue(updated);
    if (onChange) onChange(updated);
  };

  return (
    <Box sx={{ mb: 3 }}>
      {/* Title */}
      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: "bold" }}>
        PRICE
      </Typography>

      {/* Input fields for min and max */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <TextField
          size="small"
          variant="outlined"
          value={value[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          InputProps={{
            startAdornment: <Typography sx={{ mr: 0.5 }}>R</Typography>,
          }}
          placeholder="min"
          sx={{ width: "80px", mr: 1 }}
        />
        <Typography sx={{ mx: 1 }}>-</Typography>
        <TextField
          size="small"
          variant="outlined"
          value={value[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          InputProps={{
            startAdornment: <Typography sx={{ mr: 0.5 }}>R</Typography>,
          }}
          placeholder="max"
          sx={{ width: "80px", ml: 1 }}
        />
      </Box>

      {/* Slider */}
      <Slider
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={9999}
        disableSwap
        sx={{
          color: "#1976d2",
          "& .MuiSlider-thumb": { borderRadius: "4px" },
        }}
      />
    </Box>
  );
}
