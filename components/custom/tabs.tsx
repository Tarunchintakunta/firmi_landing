import React, { FC, Fragment, PropsWithChildren, ReactNode, memo } from "react";

import { cn } from "@/lib/utils";

import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export interface TabsOptions {
  name: string | ReactNode;
  value: string;
  error?: boolean;
}

interface TabsContentOptionsInterface {
  value: string;
  tabsContent: ReactNode;
}

interface TabsContentInterface {
  tabsContent: TabsContentOptionsInterface[];
  className?: string;
}

interface CustomTabsProps {
  defaultValue: string;
  tabs: TabsOptions[];
  value?: string;
  className?: string;
  extraOptions?: ReactNode;
  tabsClassName?: string;
  triggerClassName?: string;
  tabsListClassName?: string;
  tabsWrapperClassName?: string;
  onValueChange?: (tab: string) => void;
}

const CustomTabs = ({
  tabs,
  value,
  children,
  className,
  defaultValue,
  onValueChange,
  tabsClassName,
  extraOptions,
  triggerClassName,
  tabsListClassName,
  tabsWrapperClassName,
}: PropsWithChildren<CustomTabsProps>) => (
  <Tabs
    value={value}
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    className={cn("rounded-md", tabsClassName)}
  >
    <div
      className={cn(
        "w-full flex items-center rounded-full justify-start gap-1",
        tabsWrapperClassName
      )}
    >
      <TabsList className={cn(tabsListClassName)}>
        {tabs.map(({ name, value, error }) => (
          <TabsTrigger
            value={value}
            key={`tabs-${value}`}
            className={cn(
              "data-[state=active]:font-medium text-text-inverse-default rounded-md h-full",
              triggerClassName,
              error && "text-destructive data-[state=active]:text-destructive"
            )}
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      {extraOptions}
    </div>
    <ScrollArea className={cn("w-full", className)}>{children}</ScrollArea>
  </Tabs>
);

export default memo(CustomTabs);

export const TabsContentList: FC<PropsWithChildren<TabsContentInterface>> = ({
  children,
  className,
  tabsContent,
}) =>
  tabsContent.map(({ value, tabsContent }) => (
    <Fragment key={`tabs-content-${value}`}>
      <TabsContent
        asChild
        value={value}
        className={cn(className)}
        key={`tabs-content-${value}`}
      >
        {tabsContent}
      </TabsContent>
      {children}
    </Fragment>
  ));
