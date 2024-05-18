"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = React.useState(theme === "dark")

  React.useEffect(() => {
    setEnabled(theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    const newTheme = enabled ? "light" : "dark"
    setTheme(newTheme)
    setEnabled(!enabled)
  }

  return (
    <div className="flex items-center">
      <Toggle
        pressed={enabled}
        onPressedChange={toggleTheme}
        variant={"outline"}
        className="rounded-full h-10 w-10 data-[state=on]:bg-transparent">
        <span>
          {enabled ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </span>
      </Toggle>
    </div>
  )
}
