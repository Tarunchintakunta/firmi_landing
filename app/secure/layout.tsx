"use client";

import * as React from "react";
import { AppSidebar } from "@/layout/sidebar";
import { SiteHeader } from "@/layout/header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="w-full">
          <SiteHeader />
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
