"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HeaderWithTags() {
  return (
    <header className="bg-gray-800 shadow-md w-full border-b border-gray-500">
      <div className="py-6 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
            <Link href="/">
              <Image
                src="/images/tru-logo.svg"
                alt="Tru Logo"
                width={93}
                height={46}
                priority
              />
            </Link>
      </div>
    </header>
  );
}
