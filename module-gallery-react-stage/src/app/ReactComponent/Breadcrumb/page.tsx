import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbProvider,
  } from "@/components/Breadcrumb";
  
  const ProductPageBreadcrumb = () => {
    return (
      <main className="p-10">
        <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Breadcrumb Component</h1>
        <p className="text-[15px] mb-4">This Breadcrumb component system provides a flexible, accessible, and customizable breadcrumb navigation for Next.js applications. It is built using React Context to allow global control of separators (such as /, {`>`}, or →) across the breadcrumb trail.</p>
        <p className="text-[15px]">The system is modular and includes components for links, separators, and current page labeling, making it easy to construct dynamic, SEO-friendly breadcrumbs that follow accessibility best practices (aria-current, semantic HTML, etc.).</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Built-in support for dynamic separators via React Context.</li>
          <li>Modular design: customize or compose your own breadcrumb layout.</li>
          <li>Easy integration into any Next.js page.</li>
          <li>Utility-first styling support with Tailwind CSS.</li>
        </ul>
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
  