import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../act3/Header";
import Footer from "../act3/Footer";
import ProfileCard from "../act3/ProfileCard";

export default function Home() {
  return (
    <>
      <Header />

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My BioNote
        </Typography>

        <ProfileCard title="Name" content="Your Full Name Here" />
        <ProfileCard title="About" content="Short introduction about yourself." />
        <ProfileCard title="Skills" content="• HTML • CSS • React • MUI etc." />
        <ProfileCard title="Interests" content="Your hobbies and passions." />

        <ProfileCard
          title="Professional Profile"
          content={
            <>
              <strong>Experience:</strong> Describe your experience. <br />
              <strong>Education:</strong> Your educational background. <br />
              <strong>Featured Projects:</strong> Group work or personal projects.
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}
