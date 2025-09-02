"use client";
import React, { createContext, useContext, ReactNode } from "react";
import Link from "next/link";

// Breadcrumb Context for separator
export interface BreadcrumbContextValue {
  separator: ReactNode;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue | undefined>(
  undefined
);

// Breadcrumb Root Component
export interface BreadcrumbProps {
  children: ReactNode;
  className?: string;
}

const Breadcrumb = ({ children, className="" }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className={className}>
    {children}
  </nav>
);

// Breadcrumb List
export interface BreadcrumbListProps {
  children: ReactNode;
  className?: string;
}

const BreadcrumbList = ({ children, className="" }: BreadcrumbListProps) => (
  <ol className={`flex items-center [&>span]:text-[14px] ${className}`}>{children}</ol>
);

// Breadcrumb Item
export interface BreadcrumbItemProps {
  children: ReactNode;
  className?: string;
}

const BreadcrumbItem = ({ children, className="" }: BreadcrumbItemProps) => (
  <li className={`flex items-center [&>a]:underline [&>a]:text-brandBlack  [&>span]:text-brandBlack [&>a]:text-[14px] [&>span]:text-[14px] ${className}`}>{children}</li>
);

// Breadcrumb Link
export interface BreadcrumbLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const BreadcrumbLink = ({ href, children, className="" }: BreadcrumbLinkProps) => (
  <Link href={href} className={`text-blue-600 hover:underline ${className}`}>
    {children}
  </Link>
);

// Breadcrumb Page (for current page)
export interface BreadcrumbPageProps {
  children: ReactNode;
  className?: string;
}

const BreadcrumbPage = ({ children, className="" }: BreadcrumbPageProps) => (
  <span className={`font-semibold ${className}`} aria-current="page">
    {children}
  </span>
);

// Breadcrumb Separator
export interface BreadcrumbSeparatorProps {
  className?: string;
}

const BreadcrumbSeparator = ({ className="" }: BreadcrumbSeparatorProps) => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("BreadcrumbSeparator must be used within a BreadcrumbProvider");
  }
  return <span className={`mx-1 text-brandBlack font-normal ${className}`}>{context.separator}</span>;
};

// Breadcrumb Provider
export interface BreadcrumbProviderProps {
  children: ReactNode;
  separator?: ReactNode;
}

const BreadcrumbProvider = ({
  children,
  separator = "/",
}: BreadcrumbProviderProps) => (
  <BreadcrumbContext.Provider value={{ separator }}>
    {children}
  </BreadcrumbContext.Provider>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbProvider,
};
