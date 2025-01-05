import React from "react";

const Circle = ({ style, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "green",
        position: "absolute",
        cursor: "pointer",
        ...style,
      }}
    />
  );
};

export default Circle;
