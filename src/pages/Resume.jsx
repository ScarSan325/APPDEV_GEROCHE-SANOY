import React from "react";
import { Divider } from "@mui/material";
import "../pages/Resume.css";
import NameAbout from "../biocompo/NameAbout";
import Skills from "../biocompo/Skills";
import Interest from "../biocompo/Interest";
import ProfessionalProfile from "../biocompo/ProfessionalProfile";
import Experience from "../biocompo/Experience";
import Education from "../biocompo/Education";
import FeatureProjects from "../biocompo/FeatureProjects";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="left-column">
        <NameAbout />
        <Divider sx={{ my: 2 }} />
        <Skills />
        <Divider sx={{ my: 2 }} />
        <Interest />
      </div>

      <div className="right-column">
        <ProfessionalProfile />
        <Divider sx={{ my: 2 }} />
        <Experience />
        <Divider sx={{ my: 2 }} />
        <Education />
        <Divider sx={{ my: 2 }} />
        <FeatureProjects />
      </div>
    </div>
  );
}
