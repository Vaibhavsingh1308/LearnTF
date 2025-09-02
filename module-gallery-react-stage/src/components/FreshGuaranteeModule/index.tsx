"use client";

import Image from "next/image";
import React from "react";

const departments = [
    {
        title: "Meat Department",
        description: "Shop restaurant-worthy meat with Sterling Silver® Premium Beef, guaranteed fresh.",
        image: "/images/meat-department.png",
    },
    {
        title: "Produce Department",
        description: "Shop produce that's guaranteed fresh.",
        image: "/images/blueberry.png",
    },
    {
        title: "Ready For You",
        description: "Ready for you meals prepared in store, guaranteed fresh.",
        image: "/images/ready-for-you.png",
    },
    {
        title: "Bake Shop",
        description: "Bread baked fresh in-store, guaranteed.",
        image: "/images/bake-shop.png",
    },
];

const DepartmentGrid = () => {
    return (
        <div className="mx-auto max-w-[1536px]">
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-2 lgs:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-24 2xs:gap-y-20 sm:gap-y-24 lg:gap-y-0 w-full">
                        {departments.map((dept, index) => (
                            <div key={index} className="rounded-xl w-full bg-primary500 h-full p-6 2lg:p-8">
                                <div className="relative mt-[-130px] 2xs:mt-[-90px] sm:mt-[-110px] lg:mt-[-100px] 2lg:mt-[-125px]">
                                    <Image alt={dept.title} src={dept.image} width={256} height={256} className="lgs:px-1 m-auto"/>
                                    <div className="flex flex-col gap-[10px] justify-center items-center">
                                        <h3 className="text-xl 4xl:text-lg 5xl:text-xl text-brandBlack font-sans text-center px-4 font-extrabold 3xl:min-h-full lgs:min-h-[59px] min-h-full">{dept.title}</h3>
                                        <p className="text-body text-center font-normal max-w-[280px]">{dept.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lgs:py-8 flex flex-col gap-4 mx-auto">
                    <p className="text-body font-normal text-left lgs:text-center">If you buy an eligible product from our store, use the product as intended, and the product does not meet your expectations, you can present the product and/or receipt and we will provide you with the appropriate reimbursement. Restrictions apply, see Terms and Conditions for details.</p>
                    <div className="flex justify-start lg:justify-center items-start lg:items-center flex-col">
                        <a className="text-brandSecondary text-body font-bold leading-normal underline hover:no-underline" href="#" aria-label="Click for full terms & conditions">Click for full terms & conditions</a>
                        <div className="text-gray-700 text-sm transition-all duration-500 ease-in-out overflow-hidden opacity-0 max-h-0">
                            <div className="[&>p]:text-body [&>p]:mb-4 [&>p]:mt-2 [&>p>strong]:uppercase">
                                <p><strong>100% FRESH GUARANTEE GUARANTEED FRESH OR YOUR MONEY BACK.</strong></p>
                                <p>Our “100% Fresh Guarantee” means that if you buy an eligible product from our store, use the product as intended, and the product does not meet your expectations, you can present the product and/or receipt and we will refund the purchase price. Return requests without an eligible product or receipt are solely eligible for a refund in the form of a gift card. This guarantee does not apply to any of the following items: products sold by in-store third party vendors, prescriptions, gift cards, liquor, tobacco, limited-time products and any products which may not be discounted by law. This guarantee may not be used in combination with any other offer. We reserve the right to, in our discretion, make changes to this guarantee program without prior notice, which includes the right to withdraw this guarantee from any customer who we determine to be abusing the guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentGrid;
