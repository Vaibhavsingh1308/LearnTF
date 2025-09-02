import { Box } from '@/components/Box';
import CarouselWrapper from '@/components/Carousel/Index';

const ProductPage = () => {
  const images = [
    '/images/car.jpg',
    '/images/car.jpg',
    '/images/car.jpg',
  ];

  return (
    <div className='p-10'>
        <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2"> Image Magnifier Component</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">StaticImageMagnifier</mark> component provides a clean and responsive layout for displaying a zoomed-in version of an image alongside its static thumbnail. This is particularly useful for product detail pages or gallery views where users need a closer look at an image without interactive zoom behavior like mouse-over or lens tracking.</p>
        <ul className="lpl-5 list-disc text-[15px] text-gray-700 pl-4 leading-[30px] mt-7">
          <li><b>Side-by-Side Layout</b>: Displays a thumbnail and a zoomed-in version next to each other for easy comparison.</li>
          <li><b>Dynamic Sizing</b>: Accepts custom thumbnailSize, zoomLevel, maxWidth, and maxHeight to fit various UI needs.</li>
          <li><b>Non-Interactive Simplicity</b>: No hover or mouse-tracking logic — just a static zoomed display for faster rendering and mobile-friendliness.</li>
          <li><b>Index-Based Control</b>: Accepts a selectedIndex to choose which image from the list to show and zoom.</li>
          <li><b>Customizable</b>: Easily extendable to support more interactivity or image controls if needed.</li>
        </ul>
      </div>


      <h2 className="text-2xl font-semibold mb-4">Product View</h2>
      <Box as="div" className="max-w-[480px]">
        <CarouselWrapper slides={images} showThumbnails={true} />
      </Box>
    </div>
  );
};

export default ProductPage;
