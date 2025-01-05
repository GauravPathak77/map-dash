import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <span>Cameras:</span>
      <ul style={{ display: "flex", marginLeft: "20px", listStyle: "none", gap: "15px" }}>
        <li>Camera 1</li>
        <li>Camera 2</li>
        <li>Camera 3</li>
      </ul>
    </div>
  );
};

export default Header;