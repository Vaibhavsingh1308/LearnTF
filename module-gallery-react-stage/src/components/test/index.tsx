"use client";

import { InnerBanner } from "@/components/InnerBanner";

export default function Page(): JSX.Element {
 

   
  return (
    <main className="space-y-10 p-6 bg-[#fff] min-h-screen">
      
    {/* ========== LEFT COLUMN EXAMPLES ========== */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Complete InnerBanner Demo</h2>
      <p className="text-gray-600">All possible combinations and use cases</p>
    </div>

    {/* 1. Default - Orange, Medium Width, Left Column */}
    <InnerBanner
      leftColumnContent={
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">Cook once, eat happy</h2>
          <p className="mb-4">
            Plan breakfasts, lunches, dinners and snacks in one place. Create your perfect meal plan with our easy-to-use tools.
          </p>
          <button className="underline text-white font-medium">Get Started</button>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="purple"
      withBefore="purple"
      width="medium"
      height="full" 
      padding="AllSide"
      borderRadius="none"
      className="min-h-[350px]"
    />
 

    {/* 3. Green, Large Width, Left Column Only */}
    <InnerBanner
       rightColumnContent={
        <div className="text-white space-y-3">
          <h2 className="text-2xl font-semibold">Cook once, eat happy</h2>
          <p className="text-sm">Up to 40% off on popular getaways. Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.Up to 40% off on popular getaways.</p>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="green"
      withBefore="none"
      withAfter="green"
      height="full"
      padding="AllSide"
      className="min-h-[450px]"
    />
   {/* 4. Orange, Medium Width, Left Border Radius, Left Column */}
   <InnerBanner
      leftColumnContent={
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">Orange Left Curved</h2>
          <p className="mb-4">Medium width with left border radius styling.</p>
          <button className="underline text-white font-medium">Discover More</button>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="orange"
      withBefore="orange"
      width="medium"
      height="none"
      padding="LeftSideNone"
      borderRadius="left"
      className="min-h-[350px]"
    />

  


    {/* 6. Orange, Small Width, Right Border Radius, Right Column */}
    <InnerBanner
      rightColumnContent={
        <div className="text-white space-y-3">
          <h2 className="text-2xl font-semibold">Orange Right Panel</h2>
          <p className="text-sm">Small width panel positioned on the right side.</p>
          <button className="underline text-white font-medium text-sm">View Details</button>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="purple"
      withBefore="none"
      withAfter="purple"
      width="small"
      borderRadius="right"
      padding="AllSide"
      className="min-h-[350px]"
    />

  
    {/* ========== BOTH COLUMNS EXAMPLES ========== */}

    {/* 8. Purple, Medium Width, Both Columns */}
    <InnerBanner
      leftColumnContent={
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">Left Side</h2>
          <p className="mb-2">Content on the left side of purple banner.</p>
          <button className="underline text-white font-medium text-sm">Left Action</button>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="green"
      withBefore="none"
      width="medium"
      borderRadius="none"
      padding="AllSide"
      className="min-h-[350px]"
    />

 
    {/* ========== TRANSPARENT/NONE EXAMPLES ========== */}

    {/* 10. No Background Color - Transparent */}
    <InnerBanner
      leftColumnContent={
        <div className="text-white bg-black bg-opacity-60 p-4 rounded">
          <h2 className="text-3xl font-bold mb-2">Transparent Banner</h2>
          <p className="mb-4">No background color overlay, only the background image is visible.</p>
          <button className="bg-white text-gray-800 px-4 py-2 rounded font-medium">Explore</button>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="none"
      withBefore="none"
      withAfter="none"
      width="medium"
      padding="AllSide"
      className="min-h-[350px]"
    />

   
    {/* ========== MIXED COMPLEX EXAMPLES ========== */}

  

 

    {/* 15. Newsletter Signup Banner */}
    <InnerBanner
      leftColumnContent={
        <div className="text-white space-y-4">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-lg">Get the latest news and updates delivered to your inbox.</p>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded text-gray-800"
              />
              <button className="bg-white text-green-800 px-6 py-2 rounded font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      }
      backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oJevd-BH-dwnOgb0XolY0afU2Njkc1Pkug&s"
      color="green"
      withBefore="green"
      width="large"
      height="full"
      padding="AllSide"
      borderRadius="none"
      className="min-h-[350px]"
    />

    <div className="text-center py-8">
      <p className="text-gray-600">
        🎉 These are all the possible combinations of your InnerBanner component! 
        <br />Mix and match properties to create exactly what you need.
      </p>
    </div>

  </main>

  );
}