import React from "react";

interface TabsProps {
  tabs: string[];
  active: number;
  onChange: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange }) => {
  return (
    <div className="tabs-container" style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = active === index;
        return (
          <button
            key={index}
            onClick={() => onChange(index)}
            style={{
              ...styles.tab,
              ...(isActive ? styles.active : {}),
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "15px 0",
    background: "#2a2a2a",
  },
  tab: {
    border: "1px solid #444",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#171717",
    color: "#e2e2e2",
    fontSize: "15px",
    transition: "all 0.2s ease",
  },
  active: {
    borderColor: "#3b82f6",
    color: "#3b82f6",
    background: "#111",
    fontWeight: 600,
  },
};
