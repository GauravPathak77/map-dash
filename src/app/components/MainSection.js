import React from "react";
import Circle from "./Circle";
import DialogBox from "./DialogBox";

const MainSection = ({ elements, circles, activeIndex, onCircleClick }) => {
  return (
    <div
      style={{
        width: "75%",
        height: "100%",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {circles.map((circle, index) => (
        <div key={index}>
          <Circle
            onClick={() => onCircleClick(index)}
            style={{ top: circle.y, left: circle.x }}
          />
          <DialogBox
            isVisible={activeIndex === index}
            data={elements[index]}
            style={{ top: circle.y + 20, left: circle.x }}
          />
        </div>
      ))}
    </div>
  );
};

export default MainSection;
