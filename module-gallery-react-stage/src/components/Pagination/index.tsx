'use client';
import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { cn } from "../utils";

type PaginationContextType = {
  paginationRange: (number | string)[];
  lastPage: number;
  activePage: number;
  handlePageChange: (page: number) => void;
};

const PaginationContext = createContext<PaginationContextType | null>(null);

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, idx) => idx + start);

const getPaginationRange = (
  totalCount: number,
  pageSize: number,
  siblingCount: number,
  currentPage: number
): (number | string)[] => {
  const DOTS = "...";
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    return [...range(1, 3 + siblingCount), DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    return [firstPageIndex, DOTS, ...range(totalPageCount - (3 + siblingCount) + 1, totalPageCount)];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    return [firstPageIndex, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, lastPageIndex];
  }

  return [];
};

interface PaginationProviderProps {
  children: ReactNode;
  totalCount: number;
  pageSize: number;
  currentPage?: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children,
  totalCount,
  pageSize,
  currentPage = 1,
  siblingCount = 1,
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const paginationRange = useMemo(
    () => getPaginationRange(totalCount, pageSize, siblingCount, activePage),
    [totalCount, pageSize, siblingCount, activePage]
  );

  const lastPage = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page !== activePage && page >= 1 && page <= lastPage) {
      setActivePage(page);
      onPageChange(page);
    }
  };

  const contextValue: PaginationContextType = {
    paginationRange,
    lastPage,
    activePage,
    handlePageChange,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = (): PaginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePaginationContext must be used within a PaginationProvider");
  }
  return context;
};

interface PaginationProps {
  prevText?: React.ReactNode;
  nextText?: React.ReactNode;
  className?: string;
  desktop?:string
}

export const Pagination: React.FC<PaginationProps> = ({
  prevText = "<",
  nextText = ">",
  className = "",

}) => {
  const { paginationRange, lastPage, activePage, handlePageChange } = usePaginationContext();

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      handlePageChange(page);
    }
  };

  return (
    <div className={cn(`flex justify-center items-center mt-4 ${className}`)}>
      <ul className="flex space-x-2">
        {/* Prev Button */}
        <li className={`w-10 h-10 text-[30px] flex items-center justify-center border-[1px] border-[#003d2a] rounded-full cursor-pointer md:text-base ${activePage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => activePage > 1 && handlePageClick(activePage - 1)}>{prevText}</li>

        {/* Page Numbers and Dots */}
        {paginationRange.map((page, index) =>
          page === "..." ? (
            <li key={`dots-${index}`} className="px-1 py-2 text-grey500 cursor-default xm:text-sm">...</li>
          ) : (
            <li key={page} className={`px-3 py-2 cursor-pointer rounded ${page === activePage ? "text-blue font-bold" : "hover:bg-grey100"}`} onClick={() => handlePageClick(page)}>
              {page}
            </li>
          )
        )}

        {/* Next Button */}
        <li className={`w-10 h-10 border-[1px] border-[#003d2a] flex items-center justify-center border rounded-full cursor-pointer ${activePage === lastPage ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => activePage < lastPage && handlePageClick(activePage + 1)}>
          {nextText}
        </li>
      </ul>
    </div>
  );
};
