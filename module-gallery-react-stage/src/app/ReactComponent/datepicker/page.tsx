// For app directory (Next.js 13+)
'use client';

import { DatePicker } from '@/components';
import React from 'react';

const Page = () => {
  const handleDateChange = (selectedDate: {
    startDate: Date | null;
    endDate: Date | null;
    startDateStr: string;
    endDateStr: string;
    timeZone: string;
  }) => {
    console.log("Selected Date:", selectedDate);
  };
  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2 flex items-center">DatePicker Component</h1>
        <p className="text-[15px]">The DatePicker is a versatile, accessible, and fully interactive React component designed for selecting either a single date or a date range—including weekly ranges. It's designed with flexibility, accessibility, and ease of integration in mind, featuring custom styles, dynamic behavior, and responsive handling.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features Implemented</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><mark className="ml-2 bg-red-50">Flexible Date Selection Modes</mark></li>
          <li><mark className="ml-2 bg-red-50">Customizable Styling Props</mark></li>
          <li><mark className="ml-2 bg-red-50">Time Zone Aware</mark></li>
          <li><mark className="ml-2 bg-red-50">Accessible & Keyboard-Friendly</mark></li>
          <li><mark className="ml-2 bg-red-50">Responsive and Interactive UI</mark></li>
          <li><mark className="ml-2 bg-red-50">Smart Date Rendering</mark></li>
          <li><mark className="ml-2 bg-red-50">Clearable Selection</mark></li>
        </ul>
      </div>

          <h2 className="text-1xl font-bold mb-4">Custom Date Picker</h2>
          <DatePicker
            range="weekly"
            onDateChange={handleDateChange}
            defaultDate={new Date()}
          />
    </div>
  );
};

export default Page;
