import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          minHeight: { xs: 80, sm: 90, md: 100 },
          px: { xs: 1, sm: 2, md: 3 }           
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          My BioNote
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
