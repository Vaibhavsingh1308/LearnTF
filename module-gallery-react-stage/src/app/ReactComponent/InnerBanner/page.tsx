'use client';

import React from 'react';
import { InnerBanner } from '@/components/InnerBanner';
import { Button } from '@/components';

export default function HomePage() {
  return (
    <main>
        <div className=" flex-wrap gap-6 mt-10 px-4">
              {/* Desktop View */}
              <h1 className="text-xl font-bold mb-4">Desktop</h1>
              <div className="w-full max-w-[1920px] p-4 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
                <div className="h-full flex items-center">
                  {/* Desktop content goes here */}
                  <InnerBanner
                      backgroundImage="/images/car.jpg"
                      color="purple"
                      withBefore="purple"
                      withAfter="green"
                      padding="AllSide"
                      borderRadius="right"
                      width="medium"
                      leftColumnContent={
                        <div className="text-white space-y-4">
                            <h2 className="text-4xl font-bold">Welcome to Our Platform</h2>
                            <p className="text-lg">Discover amazing deals, explore services, and more.</p>
                            <Button className="bg-white text-black hover:bg-gray-100">Get Started</Button>
                        </div>
                      }
                      rightColumnContent={
                        <div className="text-white text-right space-y-2">
                          <h2 className="text-2xl font-semibold">Special Offer</h2>
                          <p>Only this week – up to 50% off on select items!</p>
                        </div>
                      }
                    />
                </div>
              </div>

              {/* iPad View */}
              <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
              <div className="w-full max-w-[768px] p-4 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
                <div className="h-full bg-gray-100 flex items-center justify-center">
                  {/* iPad content goes here */}
                  <InnerBanner
                      backgroundImage="/images/car.jpg"
                      color="purple"
                      withBefore="purple"
                      withAfter="green"
                      padding="AllSide"
                      borderRadius="right"
                      width="medium"
                      leftColumnContent={
                        <div className="text-white space-y-4">
                          <h2 className="text-4xl font-bold">Welcome to Our Platform</h2>
                          <p className="text-lg">
                            Discover amazing deals, explore services, and more.
                          </p>
                          <Button className="bg-white text-black hover:bg-gray-100">
                            Get Started
                          </Button>
                        </div>
                      }
                      rightColumnContent={
                        <div className="text-white text-right space-y-2">
                          <h2 className="text-2xl font-semibold">Special Offer</h2>
                          <p>Only this week – up to 50% off on select items!</p>
                        </div>
                      }
                    />
                </div>
              </div>

              {/* Mobile View */}
              <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
              <div className="w-full max-w-[480px] p-4 rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
                <div className="h-full bg-gray-100 flex items-center justify-center">
                  {/* Mobile content goes here */}
                  <InnerBanner
                      backgroundImage="/images/car.jpg"
                      color="purple"
                      withBefore="purple"
                      withAfter="green"
                      padding="AllSide"
                      borderRadius="right"
                      width="medium"
                      leftColumnContent={
                        <div className="text-white space-y-4">
                          <h2 className="text-4xl font-bold">Welcome to Our Platform</h2>
                          <p className="text-lg">
                            Discover amazing deals, explore services, and more.
                          </p>
                          <Button className="bg-white text-black hover:bg-gray-100">
                            Get Started
                          </Button>
                        </div>
                      }
                      rightColumnContent={
                        <div className="text-white text-right space-y-2">
                          <h2 className="text-2xl font-semibold">Special Offer</h2>
                          <p>Only this week – up to 50% off on select items!</p>
                        </div>
                      }
                    />
                </div>
              </div>
        </div>
    </main>
  );
}
