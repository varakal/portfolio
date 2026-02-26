import React from "react";
import { profile } from "../data/profile";

const Skills: React.FC = () => (
  <div>
    <h2 style={{ color: "#3b82f6", marginBottom: "20px" }}>Skills</h2>

    <ul
      className="skills-grid"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        padding: 0,
        margin: 0,
      }}
    >
      {profile.skills.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
