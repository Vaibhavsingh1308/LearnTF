"use client";

import Image from "next/image";

const foodRescueTips = [
  {
    title: "Save the brine!",
    image: "/images/Save-the-brine.jpg",
    description: "Save the brine from pickles to use as a marinade for meat or to add to soups."
  },
  {
    title: "Refresh your bread",
    image: "/images/refresh-your-bread.jpg",
    description: "Make day-old bread taste freshly baked. Run your stale bread under water and heat at 200°F for 5-30 mins."
  },
  {
    title: "Try it dried!",
    image: "/images/try-it-dried.jpg",
    description: "Take your fruit further by dehydrating it to create fruit leathers for snacking."
  },
  {
    title: "Keep milk fresh longer!",
    image: "/images/keep-milk-fresh-longer.jpg",
    description: "Store it in the middle of the fridge where it's coldest - not on the door."
  },
  {
    title: "Make nuts last longer!",
    image: "/images/Make-nuts-last-longer.jpg",
    description: "Store nuts in the fridge or freezer to keep them fresher longer."
  },
  {
    title: "Freeze extra lemons!",
    image: "/images/Freeze-extra-lemons.jpg",
    description: "Store extra lemons whole in the freezer then grate for zest as needed."
  },
  {
    title: "Save the oil!",
    image: "/images/save-the-oil.jpg",
    description: "Save the oil from canned sundried tomatoes or artichokes and use it to build flavour in salad dressings and sautées."
  },
  {
    title: "Use the rind too!",
    image: "/images/Use-the-rind-too.jpg",
    description: "Throw parmesan ends into sauces and soups to infuse extra flavour."
  },
  {
    title: "Help prevent brown sugar clumps!",
    image: "/images/brown-sugar-clumps.jpg",
    description: "Rescue extra slices of bread by using them to keep brown sugar from clumping."
  },
  {
    title: "Extend the life of your cheese!",
    image: "/images/your-cheese!.jpg",
    description: "Wrap it in wax paper before storing in the fridge."
  }
];

export default function FoodRescueTipsGrid() {
  return (
    <section className="py-6 lgs:py-12">
      <div className="flex items-center justify-center flex-col pb-4 lgs:pb-8 gap-4 text-center">
        <h2 className="text-2xl 2xs:text-3xl font-sans px-6 font-bold">10 Ways to Rescue Food at Home</h2>
      </div>
      <div className="grid grid-cols-1 2xs:grid-cols-2 2md:grid-cols-3 2lg:grid-cols-5 gap-4 md:gap-6">
        {foodRescueTips.map((tip, index) => (
          <div key={index} className="relative overflow-hidden cursor-pointer group rounded-2xl">
            <Image
              alt={tip.title}
              src={tip.image}
              width={268}
              height={230}
              className="rounded-2xl w-full"
              loading="lazy"
            />
            <p className="absolute left-1/2 top-[50px] max-w-[170px] -translate-x-1/2 -translate-y-1/2 text-base font-bold text-brandSecondary text-center w-full">
              {tip.title}
            </p>
            <div className="card-box group-hover:h-full bg-hovercolor rounded-2xl flex duration-500 text-brandWhite transition-all ease-in-out items-center justify-center absolute bottom-0 h-0 left-0 right-0 overflow-hidden text-center">
              <p className="card-text p-6 text-body">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
