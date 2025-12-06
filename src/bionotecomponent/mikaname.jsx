import { Typography, Box, Avatar } from "@mui/material";
import profilePic from "../assets/mikaprofilepic.png";

function mikaname() {
  return (
    <Box textAlign="center" mb={4} sx={{ maxWidth: 500 }}>
      {/* Profile Picture */}
      <Avatar
        src={profilePic}
        alt="Profile Picture"
        sx={{
          width: 130,
          height: 130,
          margin: "0 auto",
          mb: 2,
          border: "4px solid #ff90ecff",
          boxShadow: 3
        }}
      />

      <Typography variant="h3" fontWeight="bold">
        Mecah May Nicole Geroche
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Artist • IT Student • Web Developer
      </Typography>
    </Box>
  );
}

export default mikaname;
