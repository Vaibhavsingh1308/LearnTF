"use client";
import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@/components/Dialog";
import { Button } from "@/components";

const Page = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <div className="p-10">
    <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Dialog Component</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Dialog</mark> component is a fully accessible, flexible, and customizable <b>modal window</b> used to display content over a page without navigating away. It's ideal for alerts, confirmations, forms, or interactive overlays. It includes focus management, escape key handling, and supports optional overlay interactions.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Accessible</li>
          <li>Focus Management</li>
          <li>Keyboard Support</li>
          <li>Portal Rendering</li>
          <li>Style Customization</li>
          <li>Composable API</li>
          <li>Overlay Interaction</li>
          <li>Responsive</li>
        </ul>
      </div>
      <Button onClick={() => setIsDialogOpen(true)} variant="primary">Open Dialog</Button>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} closeOnOverlayClick={true}>
        <DialogHeader>
          <h2 className="text-lg font-semibold">Dialog Title</h2>
          <button onClick={() => setIsDialogOpen(false)} className="text-gray-500 absolute right-5 top-[15px] z-[99]">✕</button>
        </DialogHeader>
        <DialogBody>
          <p>This is the content of the modal.</p>
        </DialogBody>
        <DialogFooter className=" space-x-2">
          <Button onClick={() => setIsDialogOpen(false)} variant="danger">Cancel</Button>
          <Button onClick={() => {setIsDialogOpen(false);}} variant="primary">Submit</Button>
        </DialogFooter>
      </Dialog>
    </div>
    </>
  );
};

export default Page;
