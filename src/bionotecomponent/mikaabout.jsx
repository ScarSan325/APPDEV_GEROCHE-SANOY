import { Box, Typography } from "@mui/material";

function mikaabout() {
  return (
    <Box mb={4} sx={{ maxWidth: 600 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I am an artist and IT student from Cebu Technological University with a 
        passion for digital arts, design, and frontend web development. I enjoy 
        creating meaningful visuals and building responsive user interfaces.
      </Typography>
    </Box>
  );
}

export default mikaabout;