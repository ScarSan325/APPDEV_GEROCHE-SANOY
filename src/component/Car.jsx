import React from "react";
import { Paper, Typography } from "@mui/material";

function Car() {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h6">Car Component</Typography>
      <Typography variant="body2">
        This is a sample content inside a Paper component.
      </Typography>
    </Paper>
  );
}

export default Car;
