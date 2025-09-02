import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbProvider,
  } from "@/components/Breadcrumb";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";
  
  const ProductPageBreadcrumb = () => {
    return (
      <main className="p-10">
        
        <div className="flex flex-wrap items-center mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[20px] font-extrabold leading-normal common-sec-title'>Breadcrumb Component</h1>
            <p className="text-[15px] mt-3">The <b>Breadcrumb Component</b> helps display a hierarchical trail of links, improving navigation and user orientation within the site. It includes flexible configuration options for visibility, behavior, and accessibility.</p>
          </div>
          <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Configuration Options</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Navigation Start Level</b> Defines the page depth level from which the breadcrumb should begin (e.g., level 2 skips the homepage).</li>
                <li><b>Show Hidden Navigation Items</b> Toggle to include pages marked as “hidden in navigation” in the breadcrumb trail.</li>
                <li><b>Hide Current Page</b> Option to exclude the current page from the breadcrumb display.</li>
                <li><b>Show Original Page for Redirects</b> For pages that are redirects, this option displays the original page name instead of the redirect target.</li>
                <li><b>HTML ID Attribute</b> Allows authors to assign a custom HTML id to the component for styling, scripting, or accessibility purposes.</li>
              </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/BradcrumbEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/BradcrumbEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <BreadcrumbProvider separator=">">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/category">Category</BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Product Name</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </BreadcrumbProvider>
      </main>
    );
  };
  
  export default ProductPageBreadcrumb;
  