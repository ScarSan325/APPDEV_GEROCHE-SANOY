import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ textAlign: "center", py: 2, mt: 5, background: "#f5f5f5" }}>
      <Typography variant="body2">
        © {year} • Created by Your Name
      </Typography>
    </Box>
  );
}
