import React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export const CircularProgress = ({ classNames }: { classNames?: string }) => (
  <Loader2 className={cn("animate-spin m-auto", classNames)} />
);
