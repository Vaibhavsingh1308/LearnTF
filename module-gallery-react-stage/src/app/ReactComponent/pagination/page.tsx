"use client";

import React, { useMemo, useState } from "react";
import { PaginationProvider, Pagination } from "@/components/Pagination";

// Dummy data
const allItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const Page = () => {
  const [desktopPage, setDesktopPage] = useState(1);
  const [ipadPage, setIpadPage] = useState(1);
  const [mobilePage, setMobilePage] = useState(1);
  const pageSize = 5;

  const getPaginatedItems = (page: number) => {
    const start = (page - 1) * pageSize;
    return allItems.slice(start, start + pageSize);
  };

  const desktopItems = useMemo(
    () => getPaginatedItems(desktopPage),
    [desktopPage]
  );
  const ipadItems = useMemo(() => getPaginatedItems(ipadPage), [ipadPage]);
  const mobileItems = useMemo(
    () => getPaginatedItems(mobilePage),
    [mobilePage]
  );
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Pagination Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">
          This codebase provides a context-driven pagination system for React
          applications. It separates the logic (pagination calculations, page
          management) from the UI (page navigation buttons), making it scalable
          and reusable across various data-driven components such as product
          listings, tables, search results, etc.
        </p>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-4">Desktop</h4>
        <div className="w-full max-w-[1920px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
          <div className="h-full flex items-center">
            {/* Desktop content goes here */}
            <div className="w-full p-4 rounded">
              <PaginationProvider
                totalCount={allItems.length}
                pageSize={pageSize}
                currentPage={desktopPage}
                onPageChange={(page) => setDesktopPage(page)}
              >
                  <h2 className="text-base mb-4">Paginated Items</h2>
                <ul className="space-y-2">
                  {desktopItems.map((item, index) => (
                    <li key={index} className="p-3 bg-gray-100 rounded-md">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pagination Component */}
                <Pagination className="mt-6" desktop="desktop" />
              </PaginationProvider>
            </div>
          </div>
        </div>

        {/* iPad View */}
        <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
        <div className="w-full max-w-[768px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
          <div className="col-span-5 p-4 rounded">
            <PaginationProvider
              totalCount={allItems.length}
              pageSize={pageSize}
              currentPage={ipadPage}
              onPageChange={(page) => setIpadPage(page)}
            >
              
                <h2 className="text-base mb-4">Paginated Items</h2>
              <ul className="space-y-2">
                {ipadItems.map((item, index) => (
                  <li key={index} className="p-3 bg-gray-100 rounded-md">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pagination Component */}
              <Pagination className="mt-6" />
            </PaginationProvider>
          </div>
        </div>

        {/* Mobile View */}
        <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
        <div className="w-full max-w-[480px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
          <div className="col-span-5 p-4 rounded">
            <PaginationProvider
              totalCount={allItems.length}
              pageSize={pageSize}
              currentPage={mobilePage}
              onPageChange={(page) => setMobilePage(page)}
            >
              <div className="max-w-xl">
                <h2 className="text-base mb-4">Paginated Items</h2>
                <ul className="space-y-2">
                  {mobileItems.map((item, index) => (
                    <li key={index} className="p-3 bg-gray-100 rounded-md">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pagination Component */}
                <Pagination className="mt-6" />
              </div>
            </PaginationProvider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
