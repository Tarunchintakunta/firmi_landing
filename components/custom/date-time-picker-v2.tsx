import * as React from "react";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { format, parse } from "date-fns";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface DateTimePickerProps {
  onChange: (value: number | null) => void;
  error?: string;
  value?: number;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  inputClassName?: string;
  errorClassName?: string;
  popoverClassName?: string;
  calendarClassName?: string;
  containerClassName?: string;
  dateType?: "date" | "time" | "date_time";
}

export default function DateTimePicker({
  value = Date.now(),
  error,
  onChange,
  className,
  placeholder,
  inputClassName,
  errorClassName,
  popoverClassName,
  disabled = false,
  calendarClassName,
  containerClassName,
  dateType = "date_time",
}: DateTimePickerProps) {
  const initialDate = new Date(value);

  const [time, setTime] = React.useState<string>(
    dateType !== "date" ? format(initialDate, "HH:mm") : ""
  );
  const [date, setDate] = React.useState<Date | undefined>(
    dateType !== "time" ? initialDate : undefined
  );

  const handlePlaceholder = () => {
    if (placeholder) return placeholder;
    return dateType === "date"
      ? "Select Date"
      : dateType === "time"
      ? "Select Time"
      : "Select Date and Time";
  };

  const formatDateTime = (date: Date | undefined, time: string) => {
    if (!date && !time) return handlePlaceholder();
    if (dateType === "date" && date) return format(date, "PPP");
    if (dateType === "time" && time) return time;
    if (dateType === "date_time" && date && time)
      return `${format(date, "PPP")} ${time}`;
    return handlePlaceholder();
  };

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      if (dateType === "date_time" && time) {
        const [hours, minutes] = time.split(":");
        newDate.setHours(parseInt(hours), parseInt(minutes));
      }
      setDate(newDate);
      onChange(newDate.getTime());
    } else if (dateType === "time" && time) {
      onChange(parse(time, "HH:mm", new Date()).getTime());
    } else {
      onChange(null);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTime(newTime);

    if (newTime) {
      if (dateType === "date_time" && date) {
        const newDateTime = new Date(date);
        const [hours, minutes] = newTime.split(":");
        newDateTime.setHours(parseInt(hours), parseInt(minutes));
        onChange(newDateTime.getTime());
      } else onChange(parse(newTime, "HH:mm", new Date()).getTime());
    } else if (dateType === "date" && date) onChange(date.getTime());
    else onChange(null);
  };

  React.useEffect(() => {
    if (dateType === "date") setDate(date || new Date());
    else if (dateType === "time") setTime(time || format(new Date(), "HH:mm"));
    else {
      setDate(date || new Date());
      setTime(time || format(initialDate, "HH:mm"));
    }
  }, [dateType]);

  return (
    <div className={cn("space-y-2", containerClassName)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-start text-left font-normal bg-input-container rounded-xl hover:bg-input-container",
              !date && !time && "text-muted-foreground",
              inputClassName
            )}
          >
            {dateType !== "time" && <CalendarIcon className="w-4 h-4 mr-2" />}
            {dateType !== "date" && <ClockIcon className="w-4 h-4 mr-2" />}
            {formatDateTime(date, time)}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("w-auto p-0", popoverClassName)}
          align="start"
        >
          {dateType !== "time" ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
              className={calendarClassName}
            />
          ) : null}
          {dateType !== "date" ? (
            <div className="flex flex-col p-3 space-y-2 border-t">
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4" />
                <Input
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  className={cn("w-[120px]", className)}
                />
              </div>
            </div>
          ) : null}
        </PopoverContent>
      </Popover>
      {error ? (
        <p
          className={cn("text-xs font-medium text-destructive", errorClassName)}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
