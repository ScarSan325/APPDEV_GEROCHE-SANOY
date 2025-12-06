import { Box, Typography, Chip, Stack } from "@mui/material";

function mikaskills() {
  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="HTML" />
        <Chip label="CSS" />
        <Chip label="JavaScript" />
        <Chip label="React" />
        <Chip label="Digital Art" />
        <Chip label="UI/UX Design" />
      </Stack>
    </Box>
  );
}

export default mikaskills;
