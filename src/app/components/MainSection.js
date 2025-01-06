import React from "react";
import Circle from "./Circle";
import DialogBox from "./DialogBox";

const MainSection = ({ elements, circles, activeIndex }) => {
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
          <Circle style={{ top: circle.y, left: circle.x }} />
          <DialogBox
            isVisible={
              activeIndex !== null &&
              elements[activeIndex]?.CameraID === circle.cameraID
            }
            data={elements[activeIndex]}
            style={{ top: circle.y + 20, left: circle.x }}
          />
        </div>
      ))}
    </div>
  );
};

export default MainSection;
