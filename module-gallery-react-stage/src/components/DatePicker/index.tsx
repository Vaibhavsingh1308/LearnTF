"use client";
 
import React, { useState, useEffect, useRef } from "react";
import { FcCalendar } from "react-icons/fc";
 
interface DatePickerProps {
  range?: boolean | "weekly";
  onDateChange?: (selectedDate: {
    
    startDate: Date | null;
    endDate: Date | null;
    startDateStr: string;
    endDateStr: string;
    timeZone: string;
  }) => void;
  timeZone?: string;
  icon?: React.ReactNode;
  datePickerClassName?: string;
  className?: string;
  HeaderClass?: string;
  DaysClass?: string;
  BodyClass?: string;
  defaultDate?: Date; 
}
 
const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th"; // Covers 4-20 (special case)
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};
 
const formatDate = (date: Date | null) => {
  if (!date) return "";
  const month = date.toLocaleString("en-US", { month: "short" }); // "Feb"
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
};
 
const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
 
// Utility function to get the start and end of the week
const getWeekRange = (date: Date) => {
  const start = new Date(date);
  const end = new Date(date);
  
  // Set start to the previous Monday
  const day = date.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day; // Sunday becomes -6, Monday becomes 0, etc.
  start.setDate(date.getDate() + diffToMonday);

  // Set end to the following Sunday
  const diffToSunday = day === 0 ? 0 : 7 - day;
  end.setDate(date.getDate() + diffToSunday);
  
  return { start, end };
};
 
export const DatePicker: React.FC<DatePickerProps> = ({
  range = true,
  onDateChange,
  // timeZone,
  // icon,
  className,
  datePickerClassName,
  HeaderClass,
  DaysClass,
  BodyClass,
  defaultDate
}) => {
const initialStartDate = defaultDate ? new Date(defaultDate) : null;
const initialEndDate =
  defaultDate && range === "weekly" ? getWeekRange(new Date(defaultDate)).end : null;



  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCloseIcon, setShowCloseIcon] = useState(false); // 👈 Add this state
  
  const datePickerRef = useRef<HTMLDivElement>(null);

  const displayText = () => {
    if (startDate) {
      if (range) {
        return `${formatDate(startDate)}${endDate ? ` - ${formatDate(endDate)}` : ""}`;
      }
      return formatDate(startDate);
    }
  
    // Handling when defaultDate is NOT provided
    if (range === "weekly" || range === true) {
      return "Select Date Range";
    }
    return "Select Date";
  };
  
 
  const clearSelection = () => {
    setStartDate(null);
    setEndDate(null);
    onDateChange?.({
      startDate: null,
      endDate: null,
      startDateStr: "",
      endDateStr: "",
      timeZone: getTimeZone(),
    });
  };

  useEffect(() => {
  if (defaultDate && range === "weekly") {
    const { start, end } = getWeekRange(new Date(defaultDate));
    setStartDate(start);
    setEndDate(end);
    onDateChange?.({
      startDate: start,
      endDate: end,
      startDateStr: formatDate(start),
      endDateStr: formatDate(end),
      timeZone: getTimeZone(),
    });
  }
}, [defaultDate, range, onDateChange]);
 
  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
 
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
 
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
 
  const handleDateClick = (date: Date) => {
    let newStartDate = startDate;
    let newEndDate = endDate;
  
    if (!range) {
      newStartDate = date;
      newEndDate = null;
      setIsOpen(false); // Close popup immediately after selection
    }
    else if (range === "weekly") {
      const { start, end } = getWeekRange(date);
      newStartDate = start;
      newEndDate = end;
      setIsOpen(false); // Close the date picker after selecting the week
    }
    else {
      if (!newStartDate || newEndDate) {
        newStartDate = date;
        newEndDate = null;
      } else if (newStartDate && !newEndDate) {
        if (date >= newStartDate) {
          newEndDate = date;
        } else {
          newStartDate = date;
          newEndDate = null;
        }
      }
  
      if (newStartDate && newEndDate) {
        setIsOpen(false);
      }
    }
  
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  
    onDateChange?.({
      startDate: newStartDate,
      endDate: newEndDate,
      startDateStr: formatDate(newStartDate),
      endDateStr: newEndDate ? formatDate(newEndDate) : "",
      timeZone: getTimeZone(),
    });
  };
  
  const renderCalendar = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    // const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const firstDay = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() + 6) % 7;


    const daysArray = Array.from({ length: daysInMonth }, (_, i) => new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1));
    return (
      <div className={`bg-brandWhite shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-lg absolute top-full w-full z-10 ${className || ""}`}>
        {/* Month Navigation */}
        <div className={`flex justify-between items-center mb-2 p-2 border-b border-solid border-[#d3cccc] ${HeaderClass || ""}`}>
          <button
            className="bg-grey150 rounded-full h-10 w-10 flex items-center justify-center"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_22010_13606" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_22010_13606)">
                <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#191919"/>
              </g>
            </svg>
          </button>
          <span className="text-lg">{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</span>
          <button
            className="bg-grey150 rounded-full h-10 w-10 flex items-center justify-center"  
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_22010_12781" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_22010_12781)">
                <path d="M10 18L16 12L10 6L8.6 7.4L13.2 12L8.6 16.6L10 18Z" fill="#191919"/>
              </g>
            </svg>
          </button>
        </div>
        
        {/* Days of the Week */}
        <div className={`grid grid-cols-7 text-center text-sm mb-2 ${DaysClass || ""}`}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => <div key={i} className="text-sm text-[#868D9D]">{d}</div>)}
        </div>
 
        {/* Calendar Grid */}
        <div className={`grid grid-cols-7 gap-y-[2px] p-1 ${BodyClass || ""}`}>
          {Array.from({ length: firstDay }).map((_, i) => <div key={i} />)}
 
          {daysArray.map(day => {
            const isStart = startDate && day.toDateString() === startDate.toDateString();
            const isEnd = endDate && day.toDateString() === endDate.toDateString();
            const isInRange = startDate && endDate && day > startDate && day < endDate;
 
            return (
              <button
                key={day.toString()}
                onClick={() => handleDateClick(day)}
                className={`h-8 w-full text-center transition rounded-lg
                  ${isStart ? "date-start bg-[#1E1E1E] text-brandWhite rounded-r-[0px]" : ""}
                  ${isEnd ? "date-end bg-[#1E1E1E] text-brandWhite rounded-l-[0px]" : ""}
                  ${isInRange ? "selected bg-[#1E1E1E] text-brandWhite rounded-none" : ""}
                  ${!isStart && !isEnd && !isInRange ? "hover:bg-slate-200" : ""}
                  ${range == false ? "rounded-r-lg" : ""}
                  `}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  
  const ChevronDownIcon = FcCalendar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
  
  return (
    <div ref={datePickerRef} className={`relative w-full min-w-[320px] max-w-sm  ${datePickerClassName || ""}`}>
     <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShowCloseIcon(true)}
        onMouseLeave={() => setShowCloseIcon(false)}
        className="flex items-center gap-2 border h-[56px] rounded-[4px] border-grey350 w-full justify-between p-4"
      >
        <span>{displayText()}</span>
        
        {startDate || endDate ? (
          showCloseIcon ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="demo-icon icon-close text-brandBlack text-[8px] w-6 h-6 flex items-center justify-center bg-grey100 rounded-full"
            />
          ) : (
            <ChevronDownIcon className="demo-icon icon-month-calendar w-6 h-6 text-[18px]"/>
          )
        ) : (
          <ChevronDownIcon className="demo-icon icon-month-calendar w-6 h-6 text-[18px]"/>
        )}
      </button>
      {isOpen && renderCalendar()}
    </div>
  );
};