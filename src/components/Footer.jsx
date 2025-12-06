import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,               
        mt: "300px",          
        background: "#f5f5f5",
      }}
    >
      <Typography
        variant="body1"       
        sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}
      >
        © {year} • Created by Mecah Geroche and Scarlette Sanoy
      </Typography>
    </Box>
  );
}
