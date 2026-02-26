import React from "react";
import { profile } from "../data/profile";

const Contact: React.FC = () => (
  <div>
    <h2 style={{ color: "#3b82f6", marginBottom: "20px" }}>Contact</h2>

    <p style={{ color: "#e6e6e6", marginBottom: "12px" }}>
      Email: <b style={{ color: "#ef4444" }}>{profile.email}</b>
    </p>

    <p style={{ color: "#e6e6e6" }}>
      LinkedIn:{" "}
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#3b82f6",
          textDecoration: "underline",
          fontWeight: 500,
        }}
      >
        {profile.linkedin}
      </a>
    </p>
  </div>
);

export default Contact;
