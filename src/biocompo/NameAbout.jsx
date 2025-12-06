import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

export default function NameAbout() {
  return (
    <Box sx={{ textAlign: "center", mb: 3 }}>
     
      <Avatar
        alt="Ma. Scarlette P. Sanoy"
        src="src/assets/sanoy.png"  
        sx={{ width: 130, height: 130, mx: "auto", mb: 2 }}
      />

   
      <Typography variant="h4" fontWeight="bold">
        Ma. Scarlette P. Sanoy
      </Typography>

   
      <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
  A passionate Digital Artist currently immersed in my studies, 
  but my true ambition lies in the world of game development.
  I'm relentlessly pursuing the skills and knowledge needed to not only succeed as a Game Developer.
</Typography>

    </Box>
  );
}
