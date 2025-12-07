import { Box, Typography, Chip, Stack } from "@mui/material";

function mikaskills() {
  return (
    <Box mb={4}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip
          label="HTML"
          sx={{ backgroundColor: "white", color: "black", border: "1px solid #ccc" }}
        />
        <Chip
          label="CSS"
          sx={{ backgroundColor: "white", color: "black", border: "1px solid #ccc" }}
        />
        <Chip
          label="JavaScript"
          sx={{ backgroundColor: "white", color: "black", border: "1px solid #ccc" }}
        />
        <Chip
          label="Digital Art"
          sx={{ backgroundColor: "white", color: "black", border: "1px solid #ccc" }}
        />
        <Chip
          label="UI/UX Design"
          sx={{ backgroundColor: "white", color: "black", border: "1px solid #ccc" }}
        />
      </Stack>
    </Box>
  );
}

export default mikaskills;
