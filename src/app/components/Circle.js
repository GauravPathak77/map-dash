import React from "react";

const Circle = ({ style }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "green",
        position: "absolute",
        ...style,
      }}
    />
  );
};

export default Circle;
