import Image from "next/image";
import Link from "next/link";

const recipeCategories = [
  {
    title: "Dinner",
    href: "#",
    imgSrc:
      "/images/baked-flatbread-pizza-sandwich.jpg",
    alt: "Image for recipe category: Dinner",
  },
  {
    title: "30 Minutes or Less",
    href: "#",
    imgSrc:
      "/images/muffuletta.jpg",
    alt: "Image for recipe category: 30 Minutes or Less",
  },
  {
    title: "Summer",
    href: "#",
    imgSrc:
      "/images/baked-flatbread-pizza-sandwich.jpg",
    alt: "Image for recipe category: Summer",
  },
  {
    title: "Affordable",
    href: "#",
    imgSrc:
      "/images/muffuletta.jpg",
    alt: "Image for recipe category: Affordable",
  },
];

export default function RecipeCategoryGrid() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 w-full">
      {recipeCategories.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className="h-full bg-brandWhite shadow-md rounded-lg overflow-hidden"
        >
          <div className="bg-brandWhite rounded-lg overflow-hidden shadow-none">
            <div className="relative bg-grey300 min-h-[126px] overflow-hidden pt-[75%] md:pt-[77%] xl:pt-[57%]">
              <Image
                src={category.imgSrc}
                alt={category.alt}
                fill
                className="absolute top-0 left-0 object-cover"
              />
            </div>
            <div className="p-4 border-b border-none pt-2 pb-4 px-[18px]">
              <h3 className="text-base font-bold text-grey950">{category.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
