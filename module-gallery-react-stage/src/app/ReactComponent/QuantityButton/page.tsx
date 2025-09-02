"use client";
import QuantityButton from "@/components/QuantityButton";

const QuantityButtonPage = () => {
  return (
    <div className="p-10">
       <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Quantity Button Component</h1>
        <p className="text-[15px]">This React component allows users to adjust product quantities and supports two configurable display variants. In the default variant, the quantity controls are always visible alongside an "Add to List" button, making it ideal for detailed product views or areas where persistent actions are required. In the hover variant, the quantity controls appear only when the user hovers over the component, offering a cleaner, space-saving interface suited for product listings or compact layouts. </p>

      </div>
       <div className="max-w-md">
          <h2 className="font-bold mb-4">Default Variant</h2>
          <QuantityButton addListBtn={true} quantity={0} className="mb-4"  />

          <h2 className="font-bold mb-4">Hover Variant</h2>
          <QuantityButton  quantity={0}  />
       </div>
    </div>
  );
};

export default QuantityButtonPage;
