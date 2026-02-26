import React from "react";
import { profile } from "../data/profile";

const Experience: React.FC = () => (
  <div>
    <h2 style={{ color: "#3b82f6", marginBottom: "25px" }}>Experience</h2>

    {profile.experience.map((exp, i) => (
      <div key={i} style={{ marginBottom: "35px" }}>
        <h3 style={{ color: "#ef4444", marginBottom: "6px" }}>{exp.role}</h3>
        <h4 style={{ color: "#3b82f6", marginTop: 0 }}>{exp.company}</h4>

        <p style={{ color: "#9e9e9e", margin: "6px 0 12px 0" }}>
          {exp.date} • {exp.location}
        </p>

        <ul style={{ margin: 0, paddingLeft: "18px" }}>
          {exp.bullets.map((b, j) => (
            <li
              key={j}
              style={{
                color: "#e6e6e6",
                marginBottom: "8px",
                lineHeight: "1.5",
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Experience;
