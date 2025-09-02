import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function CategoryPage() {
  const categories = [
    { title: 'Bread & Bakery', image: '/images/category3.svg' },
    { title: 'Cheese & Deli', image: '/images/category1.svg' },
    { title: 'Meat', image: '/images/category4.svg' },
    { title: 'Fruits & Vegetables', image: '/images/category2.svg' },
    { title: 'Frozen Foods', image: '/images/category5.svg' },
    { title: 'Snacks', image: '/images/pantry.svg' },
    { title: 'Beverages', image: '/images/dairy.svg' },
    { title: 'Pantry Essentials', image: '/images/plant.svg' },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 p-4">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Categories Component</h1>
            <p className="text-[15px] mb-4">To update Categories click on the configure icon then a dialog box will open.  Where you can see fields like Categories title for Heading, View All Title for View all link, View All Link for view all redirection link and Categories List [].
              In categories List you can add label, categories icon, alt text and link, To add multiple categories you need to click on add button. And to update the changes click on Done button.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/category.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/category.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Grid */}
      <div className="grid grid-cols-8 mt-10 gap-[16px] overflow-x-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="mb-[8px] lg:mb-[42px]"
            tabIndex={-1}
            style={{ width: '100%', display: 'inline-block' }}
          >
            <Link href="#" className="flex flex-col items-center justify-center gap-[8px]">
              <Image
                src={cat.image}
                alt={cat.title}
                width={96}
                height={96}
                className="mobImageCat"
                style={{ color: 'transparent' }}
              />
              <p className="text-[#313131] text-[16px] opensans font-bold mx-auto max-w-[65%] text-center w-full">
                {cat.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
