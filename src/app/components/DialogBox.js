import React from "react";
import Image from "next/image";

const DialogBox = ({ isVisible, data, style }) => {
  if (!isVisible) return null;

  const imageUrl = data.Image.trim();

  return (
    <div
      style={{
        position: "absolute",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        color: "black",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "row",
        
        ...style,
      }}
    >
      <div
      style= {{
        padding: "10px"
      }}>
        <div>Cam {data.CameraID}</div>
        <div>Detected {data.Object}</div>
        <div>Name: {data.Name}</div>
        <div>Time: {data.Time}</div>
        <div>Date: {data.Date}</div>
      </div>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={imageUrl}
            alt="Centered Image"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              // borderRadius: "50%",
            }}
          />
        </div>
    </div>
  );
};

export default DialogBox;
