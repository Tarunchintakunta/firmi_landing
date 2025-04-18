"use client";

import * as React from "react";
import {
  ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";
import { themes } from "@/lib/themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Apply the saved color theme on mount
  React.useEffect(() => {
    const root = window.document.documentElement;
    const savedColorTheme = localStorage.getItem("color-theme");

    if (
      savedColorTheme &&
      Object.values(themes).some((t) => t.value === savedColorTheme)
    ) {
      // Remove any existing theme classes
      Object.values(themes).forEach((t) => root.classList.remove(t.value));
      // Apply the saved theme
      root.classList.add(savedColorTheme);
    } else {
      // Apply default theme if none saved
      root.classList.add("default");
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
