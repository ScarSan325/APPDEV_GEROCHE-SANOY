import { Box, Container, Typography } from "@mui/material";
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
    <Box 
    sx={{
        display: "flex",          
        flexDirection: "column",  
        justifyContent: "center", 
        alignItems: "center",     
        minHeight: "100vh",       
        width: "100%",            
        px: 2,                    
        textAlign: "center",      
      }}

      >
      <Mikaname />
      <Mikaabout />
      <Mikaskills />
      <Mikainterest />
      <Mikaprofile />
      <Mikaexperience />
      <Mikaeducation />
      <Mikafeaturedprojects />

    </Box>
  );
}

export default App1;
