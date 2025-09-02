import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function CategoryPage() {
  const categories = [
    { title: 'Browse', Desc: 'Over 70 appetizing trays', image: '/images/Browse-icon.svg' },
    { title: 'Order & Pay online & Deli', Desc: 'With no minimum', image: '/images/Cart-icon.svg' },
    { title: 'Pick up in-store', Desc: 'In as little as 24 hours', image: '/images/pick-up-in_store.svg' },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-top">
        <div className="w-full md:w-1/2 p-4">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Icon Card Component</h1>
            <p className="text-[15px] mb-5">
              The Icon Card Component is a flexible and visually engaging content block that allows authors to display a group of icon-based cards in a customizable layout. It is ideal for highlighting key features, services, or values in a compact format.</p>

            <h2 className='mb-2'> <strong>Header Section Configuration </strong></h2>
            <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>Heading – The main title of the icon card section</li>
              <li>Description – Introductory text to provide context or description for the card set</li>
              <li>Columns per Row – Define the number of cards to display per row (selectable between 2 to 5 columns)</li>
            </ul>

            <h2 className='mb-2'> <strong>Card Repeater Configuration </strong></h2>
            <p className="text-[15px] mb-4">Authors can add multiple cards using the Add button. Each card includes:</p>

            <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>Icon – Select or upload an icon/image to represent the card visually</li>
              <li>Image Alt Text – Descriptive text for the icon to ensure accessibility</li>
              <li>Heading Text – Title for the individual card</li>
              <li>Description – Supporting text for each card</li>
              <li>Sub Icons – Option to add one or more supplementary icons beneath the description (for ratings, tags, etc.)</li>
            </ul>

            <h2 className='mb-2'> <strong>Bottom Section Configuration</strong></h2>
            <p className="text-[15px] mb-4">An optional bottom section allows authors to add follow-up content or a call-to-action:</p>

            <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>Bottom Heading – Additional title displayed below the cards</li>
              <li>Bottom Description – Supporting text or summary</li>
              <li>Link Title – CTA label text</li>
              <li>Link to Page – URL or internal page link, with an option to open in a new tab</li>
              <li>Link ARIA Label – Optional accessibility label to describe the purpose of the link</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/IconCard.jpeg"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/IconCard.jpeg"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Grid */}

      <div className="text-center mt-10">
        <h2 className='font-bold text-2xl mb-2'>Easy entertaining</h2>
        <p>Choose a wide variety of freshly prepared trays, order & pay online. Your order will be ready for pick up in-store in 24 hours.</p>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-[16px] overflow-x-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="mb-[8px] lg:mb-[42px] py-10 rounded-[10px] bg-[#f4f4f4]"
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
              <h2 className='opensans font-bold text-xl mt-4'>{cat.title}</h2>
              <p className="text-[#313131] text-[14px]  mx-auto max-w-[65%] text-center w-full">
                {cat.Desc}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className='font-bold text-2xl mb-2'>Don't Have 24 Hours? Find delicious, ready-to-serve options in-store</h2>
        <p>or orders of 10 trays or more, please contact the store directly<br></br>
          if the trays must be ready in less than 48 hours.<br></br>
          You can also visit or call the Deli department in your local to place an order.</p>
      </div>
    </div>
  );
}
