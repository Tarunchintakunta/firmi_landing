"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/layout/header/components/theme-switcher";
import { ColorSchemeSwitcher } from "@/layout/header/components/color-scheme-switcher";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  showMobileMenu?: boolean;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "flex h-16 items-center border-b px-4 sticky top-0 z-30 bg-background",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="h-6" />
        <span className="font-medium">AI Chat Assistant</span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <ColorSchemeSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
