import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import App from '../App.jsx'
import ProfileCard from "../components/ProfileCard.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <App/>
      <Footer />
    </>
  );
}
