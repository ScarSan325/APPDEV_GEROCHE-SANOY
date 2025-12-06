import { Box, Typography, Card, CardContent } from "@mui/material";

 function mikafeaturedprojects() {
  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Featured Projects
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Hotel Management System</Typography>
          <Typography>
            Group project built using ASP.NET Web Forms with session-based authentication, 
            booking system, admin dashboards, and notification components.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Farm Management Web App</Typography>
          <Typography>
            A React project that tracks farm records, uses modals, tables, 
            dynamic components, and responsive layouts.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default mikafeaturedprojects;