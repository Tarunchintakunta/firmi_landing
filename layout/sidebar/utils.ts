import { Clock, Bookmark, PieChart, BookOpen, Settings2 } from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Recent Chats",
      url: "/chat/recent",
      icon: Clock,
      variant: "ghost",
    },
    {
      title: "Saved Chats",
      url: "/chat/saved",
      icon: Bookmark,
      variant: "ghost",
    },
  ],
  navBottom: [
    {
      title: "Tables",
      url: "/secure/tables",
      icon: PieChart,
      variant: "ghost",
    },
    {
      title: "Files",
      url: "/secure/files",
      icon: BookOpen,
      variant: "ghost",
    },
    {
      title: "Settings",
      url: "/secure/settings",
      icon: Settings2,
      variant: "ghost",
    },
  ],
};
