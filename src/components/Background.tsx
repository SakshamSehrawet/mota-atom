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
    <div className="relative min-h-screen min-w-[350px]" style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
      <canvas id="gradient-canvas" className="fixed inset-0 w-full h-full" data-transition-in />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
