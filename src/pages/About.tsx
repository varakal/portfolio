import React from "react";
import { profile } from "../data/profile";

const About: React.FC = () => (
  <div>
    <h2 style={{ color: "#3b82f6", marginBottom: "20px" }}>About Me</h2>
    <p style={{ color: "#e6e6e6", lineHeight: "1.6", fontSize: "16px" }}>
      {profile.summary}
    </p>
  </div>
);

export default About;
