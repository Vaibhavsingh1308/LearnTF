'use client';

import React, { useState } from 'react';
import { Toast } from '@/components/Toast';
import { Button } from '@/components';

const ToastDemoPage = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <div className="p-10">
        <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Toast Component</h1>
        <p className="text-[15px] mb-4">The Toast component is a lightweight and fully customizable notification system built with React and styled using Tailwind CSS. Designed for delivering real-time feedback to users—such as success messages, errors, and warnings—it leverages utility-first styling for quick integration and a consistent visual experience across the application.</p>            
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Position Variants</li>
          <li>Color Variants</li>
          <li>Auto-Close Timer</li>
          <li>Custom Close Button</li>
          <li>Accessible</li>
          <li>Composable Layout</li>
        </ul>
      </div>
      <div className="p-1 max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Toast Notification Demo</h2>
          <Button onClick={handleShowToast} variant="primary">Show Toast</Button>

          {showToast && (
            <Toast
              message="This is a toast message!"
              bgColor="success"
              position="topRight"
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
    </div>
  );
};

export default ToastDemoPage;
