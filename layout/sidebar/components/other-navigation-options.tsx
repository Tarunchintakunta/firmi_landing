import { Button } from "@/components/ui/button";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { Tooltip } from "@/components/ui/tooltip";
import { ButtonVariant } from "@/utils/interfaces";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

interface OtherNavigationOptionsProps {
  options: {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    variant: string;
  }[];
}

function OtherNavigationOptions({ options }: OtherNavigationOptionsProps) {
  return (
    <div className="grid gap-1 mb-4">
      {options.map((item, index) => (
        <Tooltip key={index} delayDuration={300}>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="sm"
              variant={item.variant as ButtonVariant}
              className="w-full justify-start text-sm font-medium data-[collapsed=true]:px-2 data-[collapsed=true]:justify-center"
            >
              <Link href={item.url} className="flex items-center">
                {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
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
    </div>
  );
}

export default memo(OtherNavigationOptions);
