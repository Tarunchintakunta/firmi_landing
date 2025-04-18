"use client";

import * as React from "react";
import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/lib/themes";

export function ColorSchemeSwitcher() {
  const [currentTheme, setCurrentTheme] = React.useState("default");

  const handleThemeChange = (theme: string) => {
    const root = window.document.documentElement;
    // Remove all theme classes
    Object.values(themes).forEach((t) => root.classList.remove(t.value));
    // Add new theme class
    root.classList.add(theme);
    setCurrentTheme(theme);

    // Store the preference in localStorage
    localStorage.setItem("color-theme", theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {Object.values(themes).map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex items-center justify-between"
          >
            <span>{theme.name}</span>
            {currentTheme === theme.value && (
              <span className="h-4 w-4 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
