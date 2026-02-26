import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TabContent: React.FC<Props> = ({ children }) => {
  return (
    <div style={styles.wrapper}>
      <div className="tab-card" style={styles.card}>
        {children}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 0",
  },
  card: {
    background: "#0f0f0f",
    borderRadius: "12px",
    border: "1px solid #333",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
  },
};
