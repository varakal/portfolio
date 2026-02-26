import React from "react";
import { profile } from "../data/profile";

const Hero: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.name}>{profile.name}</h1>
      <h2 style={styles.title}>{profile.title}</h2>
      <p style={styles.location}>{profile.location}</p>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    textAlign: "center",
    padding: "50px 20px 30px",
  },
  name: {
    fontSize: "42px",
    fontWeight: 800,
    margin: 0,
    background: "linear-gradient(90deg, #ef4444, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: {
    fontSize: "18px",
    marginTop: "12px",
    color: "#c8c8c8",
  },
  location: {
    marginTop: "10px",
    fontSize: "15px",
    color: "#9e9e9e",
  },
};

export default Hero;
