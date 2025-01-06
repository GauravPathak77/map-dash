import React from "react";

const Sidebar = ({ elements, onElementClick }) => {
  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        maxHeight: "100vh",
        backgroundColor: "#333",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
        overflowY: "auto",
        color: "#fff",
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
              backgroundColor: "#444",
              border: "1px solid #555",
              borderRadius: "8px",
              textAlign: "center",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onClick={() => onElementClick(index)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#555";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#444";
              e.target.style.transform = "scale(1)";
            }}
          >
            {element.Object} {element.Name} {element.Time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
