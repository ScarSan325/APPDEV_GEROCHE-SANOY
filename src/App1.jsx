import { Box, Container, Typography, Card, Divider } from "@mui/material";
import Mikaname from "./bionotecomponent/mikaname.jsx";
import Mikaabout from "./bionotecomponent/mikaabout.jsx";
import Mikaskills from "./bionotecomponent/mikaskills.jsx";
import Mikainterest from "./bionotecomponent/mikainterest.jsx";
import Mikaprofile from "./bionotecomponent/mikaprofile.jsx";
import Mikaexperience from "./bionotecomponent/mikaexperience.jsx";
import Mikaeducation from "./bionotecomponent/mikaeducation.jsx";
import Mikafeaturedprojects from "./bionotecomponent/mikafeaturedprojects.jsx";

function App1() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", 
        gap: 4,
        py: 5,
        minHeight: "100vh",
      }}
    >
      {/* LEFT SIDE */}
      <Card
        sx={{
          flex: 1.2, 
          maxWidth: "800px",
          backgroundColor: "#644054ff",
          color: "white",
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Mikaname />

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 1)" }} />

        <Mikaabout />

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 1)" }} />

        <Mikaskills />

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 1)" }} />

        <Mikainterest />
      </Card>

      {/* RIGHT SIDE */}
      <Box
      sx={{
        flex: 1.2,
        backgroundColor: "white",
        p: 4,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",       
      }}
    >

        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Mikaprofile />
        </Box>

        <Divider sx={{ width: "100%", my: 1 }} />

        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Mikaexperience />
        </Box>
        <Divider sx={{ width: "100%", my: 1 }} />
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Mikaeducation />
        </Box>
        <Divider sx={{ width: "100%", my: 1 }} />
        <Box sx={{ textAlign: "center" }}>
          <Mikafeaturedprojects />
        </Box>
      </Box>
    </Container>
  );
}

export default App1;
