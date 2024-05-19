"use client";

import { ReactNode, useEffect } from "react";
import { Gradient } from "../assets/gradient"; // Adjust the path as necessary
import { useTheme } from "next-themes";
interface CanvasProps {
  children: ReactNode;
}

const Background: React.FC<CanvasProps> = ({ children }) => {
  const { theme } = useTheme();
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, [theme]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {theme == "dark" ? (
        <canvas id="gradient-canvas" data-transition-in />
      ) : (
        <canvas id="gradient-canvas" data-transition-in />
      )}
      <div style={{ zIndex: 10 }}>{children}</div>
    </div>
  );
};

export default Background;
