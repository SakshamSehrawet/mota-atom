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
    <div className="min-h-screen" style={{ width: "100%", height: "100%", minWidth: "350px",minHeight: "100vh" }}>
      {theme == "dark" ? (
        <canvas id="gradient-canvas" style={{ minWidth: "350px",minHeight: "100vh"}} data-transition-in />
      ) : (
        <canvas id="gradient-canvas" style={{ minWidth: "350px",minHeight: "100vh"}} data-transition-in />
      )}
      <div style={{ zIndex: 10 }}>{children}</div>
    </div>
  );
};

export default Background;
