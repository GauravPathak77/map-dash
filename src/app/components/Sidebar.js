import React from "react";

const Sidebar = ({ elements, onElementClick }) => {
  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        maxHeight: "100vh", // Ensure the sidebar respects the viewport height
        backgroundColor: "#333", // Dark background for contrast
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
        overflowY: "auto", // Makes the sidebar scrollable
        color: "#fff", // White text for readability
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h2 style={{ margin: "0 0 20px", textAlign: "center", fontSize: "20px" }}>
        Shopping Mall
      </h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "16px" }}>
        {elements.map((element, index) => (
          <li
            key={index}
            style={{
              padding: "12px 15px",
              margin: "10px 0",
              cursor: "pointer",
              backgroundColor: "#444", // Slightly lighter shade for contrast
              border: "1px solid #555",
              borderRadius: "8px",
              textAlign: "center",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onClick={() => onElementClick(index)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#555"; // Highlight on hover
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#444";
              e.target.style.transform = "scale(1)";
            }}
          >
            {element.Object} {element.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
