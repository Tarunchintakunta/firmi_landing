import React, { memo, ReactNode } from "react";
import { MdOutlineInfo } from "react-icons/md";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip";

interface TooltipProps {
  content: string;
  triggerTitle?: string | ReactNode;
  align?: "center" | "end" | "start";
  toolTipSide?: "top" | "bottom" | "left" | "right";
}

const CustomTooltip = ({
  align,
  content,
  toolTipSide,
  triggerTitle,
}: TooltipProps) => (
  <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger asChild className="hover:cursor-pointer">
        <div>{triggerTitle ?? <MdOutlineInfo size={12} />}</div>
      </TooltipTrigger>
      <TooltipContent
        align={align}
        side={toolTipSide}
        className="text-xs font-normal text-text-inverse-default text-wrap max-w-80 h-max hover:cursor-pointer bg-surface-container-default px-3 py-2"
      >
        <p className="break-after-auto">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default memo(CustomTooltip);
