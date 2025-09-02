import React from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
export default function TextContainer() {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Text Component</h1>
            <p className="text-[15px] mb-4">The Text Component allows authors to add and format content using a rich text editor. It supports various text styles, links, lists, and other inline formatting options, providing full flexibility for creating engaging and accessible content blocks.</p>
            <p className="text-[15px] mb-4">
              This component is ideal for paragraphs, headings, inline links, and other text-based content sections across the site.</p>
            <p className="text-[15px] mb-4">
              <strong>Note:</strong> The rich text editor supports basic HTML and formatting tools such as bold, italic, underline, bullet/numbered lists, hyperlinks, and more, depending on the configuration.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/TextEditFiled.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/TextEditFiled.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper mt-10">
        <div className="mb-8">
          <h3 className="text-2xl font-sans font-extrabold mb-3">Contact Us</h3>
          <p className="text-body font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </main>
  );
}
