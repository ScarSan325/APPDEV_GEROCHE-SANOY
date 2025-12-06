import React from "react";
import { Box, Chip, Typography } from "@mui/material";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "Blender", "Php", "Medibang", "Figma"];
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Skills
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} color="primary" />
        ))}
      </Box>
    </Box>
  );
}
