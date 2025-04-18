import React, { ReactNode, memo, useEffect, useRef } from "react";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface ClickAwayListenerInterface {
  children: ReactNode;
  onClickAway: () => void;
  className?: ClassValue;
}

function ClickAwayListener({
  children,
  className,
  onClickAway,
}: ClickAwayListenerInterface) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    )
      onClickAway();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      {children}
    </div>
  );
}

export default memo(ClickAwayListener);
