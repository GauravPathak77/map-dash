"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

export default function Home() {
  const [elements, setElements] = useState([]);
  const [circles, setCircles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getData");
        const data = await response.json();
        setElements(data);

        // const cameraPos = [{}] 

        // Generate positions for distinct CameraID circles
        const uniqueCameraIDs = [...new Set(data.map((item) => item.CameraID))];
        const generatedCircles = uniqueCameraIDs.map((cameraID) => ({
          cameraID,
          x: Math.random() * (window.innerWidth * 0.7 - 100),
          y: Math.random() * (window.innerHeight - 100),
        }));
        setCircles(generatedCircles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleElementClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar elements={elements} onElementClick={handleElementClick} />
        <MainSection
          elements={elements}
          circles={circles}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
}
