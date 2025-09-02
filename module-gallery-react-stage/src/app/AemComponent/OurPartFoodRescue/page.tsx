import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function CategoryPage() {
  const categories = [
    { title: 'Refrigeration', image: '/images/category3.svg' },
    { title: 'Freezing', image: '/images/category1.svg' },
    { title: 'Canning', image: '/images/category4.svg' },
    { title: 'Portions', image: '/images/category2.svg' },
    { title: 'Storage', image: '/images/category5.svg' },
    { title: 'Dehydration', image: '/images/pantry.svg' },
    // { title: 'Beverages', image: '/images/dairy.svg' },
    // { title: 'Pantry Essentials', image: '/images/plant.svg' },
  ];

  return (
    <div className="px-10 py-6">
      <div className="flex flex-wrap items-center">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Our Part Food Rescue Component </h1>
            <p className="text-[15px] mb-4">The Our Part Food Rescue Component is designed to highlight organizations, initiatives, or categories involved in food rescue efforts. It combines descriptive content with a repeatable logo or image list, each linking to relevant resources or partners, ensuring accessibility and ease of navigation.</p>
          </div>

          <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2"><b>Component Configuration Options</b> Content Section</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Heading Text</b> – Main title of the section to introduce the food rescue initiative</li>
                <li><b>Description</b> – Rich text editor for adding detailed content or messaging about the program</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>List Section (Repeatable)</b> Authors can add multiple list items using the Add button. Each list item includes:</h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Label</b> – Name or title of the organization, category, or resource</li>
                <li><b>Image</b> – Logo or representative image</li>
                <li><b>Image Alt Text</b> – Descriptive text for screen readers</li>
                <li><b>Link to Page</b> – URL for redirection (with an option to open in a new tab)</li>
                <li><b>Link ARIA Label</b> – Optional accessibility label to describe the link’s purpose</li>
              </ul>
            </div>
           
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/OurPartFoodRescue.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/OurPartFoodRescue.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Grid */}

     <div className="wrapper">
     <div className="text-center mt-20">
        <h2 className='font-bold text-2xl mb-4'>Together, We Can Do OurPart™ to Rescue Food</h2>
        <p className='mb-6'>At Tru, we are a family nurturing families. Meaning we're committed to doing OurPart™ to rescue food; to help prevent food waste and help redirect<br></br>
        food surplus to communities across Canada who experience food insecurity.</p>

        <p>And there’s so much to share, whether it’s keeping the rind for later or reorganizing the fridge:<br></br>
        using our tips and tricks can help extend the life of food. So, discover our food rescue tips below and join #FoodRescue movement.</p>
      </div>
      <div className="grid grid-cols-6 mt-10 gap-[16px] overflow-x-auto max-w-[65%] mx-auto">
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
      <div className="text-center mt-0">
        <b>Click an icon to find out how you can rescue food at home!</b>
      </div>
     </div>
    </div>
  );
}
