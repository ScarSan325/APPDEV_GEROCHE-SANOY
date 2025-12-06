import React from "react";
import { Box, Typography } from "@mui/material";

export default function Interest() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Interests
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0 }}>
        <li>
          <Typography variant="body2">
            <strong>Digital Art:</strong> A deep passion for creating visual content, including character design, environments, textures, and UI/UX for digital mediums.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Game Development (Game Dev):</strong> A primary career goal and area of study/focus, encompassing the entire creative and technical process of building video games.
          </Typography>
        </li>
      </Box>
    </Box>
  );
}
