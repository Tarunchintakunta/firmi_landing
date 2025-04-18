"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarRail,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { data } from "@/layout/sidebar/utils";
import { Button } from "@/components/ui/button";
import { ButtonVariant } from "@/utils/interfaces";
import { NavUser } from "@/layout/sidebar/components/nav-user";
import { ChatList } from "@/layout/sidebar/components/chat-list";
import { NewChatDialog } from "@/layout/sidebar/components/new-chat-dialog";
import { DeleteHistoryDialog } from "@/layout/sidebar/components/delete-history-dialog";
import OtherNavigationOptions from "@/layout/sidebar/components/other-navigation-options";
import { ClearConversationDialog } from "@/layout/sidebar/components/clear-conversation-dialog";

export function AppSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar
        collapsible="icon"
        className={cn(
          "border-r border-border bg-gradient-to-b from-background to-muted/30 data-[collapsed=true]:px-2",
          className
        )}
        {...props}
      >
        <SidebarHeader className="border-b border-border/50 backdrop-blur-sm">
          <div className="px-4 py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 truncate data-[collapsed=true]:px-0 data-[collapsed=true]:text-center">
            <span className="data-[collapsed=true]:hidden">
              FIRMI Assistant
            </span>
            <span className="hidden data-[collapsed=true]:inline">AI</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 py-4">
          <nav className="grid gap-2">
            <NewChatDialog />
            {data.navMain.map((item, index) => (
              <Tooltip key={index} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant={item.variant as ButtonVariant}
                    size="sm"
                    className={cn(
                      "justify-start text-sm font-medium transition-all",

                      "data-[collapsed=true]:px-2 data-[collapsed=true]:justify-center"
                    )}
                    asChild
                  >
                    <Link
                      href={item.url}
                      className="flex w-full items-center"
                      target="_blank"
                    >
                      {item.icon && (
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                      )}
                      <span className="ml-2 data-[collapsed=true]:hidden">
                        {item.title}
                      </span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="hidden data-[collapsed=true]:block"
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            ))}
            <DeleteHistoryDialog />
            <ClearConversationDialog />
          </nav>

          <ChatList />
        </SidebarContent>

        <SidebarFooter className="border-t border-border/50 p-2 backdrop-blur-sm">
          <OtherNavigationOptions options={data.navBottom} />
          <NavUser user={data.user} />
        </SidebarFooter>

        <SidebarRail className="bg-muted/20 backdrop-blur-sm" />
      </Sidebar>
    </>
  );
}
