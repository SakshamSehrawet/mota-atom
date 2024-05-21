"use client";
import * as React from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const enabled = theme === "dark";

  const toggleTheme = () => {
    const newTheme = enabled ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      <Toggle
        pressed={enabled}
        onPressedChange={toggleTheme}
        variant={"outline"}
        className="rounded-full h-10 w-10 hover:bg-background dark:hover:bg-background data-[state=on]:bg-transparent"
      >
        <SunMoon strokeWidth={1} className="h-8 w-8" />
      </Toggle>
    </div>
  );
}
