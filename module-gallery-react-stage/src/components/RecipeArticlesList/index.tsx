'use client';

import Image from 'next/image';
import Link from 'next/link';

const recipes = [
  {
    title: 'The Canadian Maple-Bacon Burger',
    time: '25 mins',
    image: '/images/baked-flatbread-pizza-sandwich.jpg',
    href: '#',
  },
  {
    title: 'Crispy Rice Bowl with Blackberry-Glazed Salmon',
    time: '20 mins',
    image: '/images/muffuletta.jpg',
    href: '#',
  },
  {
    title: 'Cherry and Basil Pesto Flatbread',
    time: '20 mins',
    image: '/images/baked-flatbread-pizza-sandwich.jpg',
    href: '#',
  },
  {
    title: 'Pear Puff Pastry Tartlets',
    time: '35 mins',
    image: '/images/muffuletta.jpg',
    href: '#',
  },
];

export default function RecipeCardGrid() {
  return (
    <div className="p-1 flex flex-row gap-2 md:gap-6 items-stretch h-full overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-2 2lg:grid-cols-4 xl:grid-cols-2 whitespace-nowrap pr-4 lg:pr-0 scrollbar-hide">
      {recipes.map((recipe, idx) => (
        <div key={idx} className="min-w-[260px] md:min-w-[285px] lg:min-w-auto">
          <Link
            href={recipe.href}
            aria-label={` ${recipe.title} ${recipe.time} `}
            className="relative pb-10 bg-brandWhite shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden block h-full"
          >
            <div className="bg-brandWhite rounded-lg overflow-hidden">
              <div className="relative bg-grey300 min-h-[150px] overflow-hidden pt-[57%] md:pt-[58%] xl:pt-[53%]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="absolute top-0 left-0 object-cover"
                />
                <div className="absolute bottom-[12px] right-[19px] flex gap-2 flex-col">
                  <div className="tab rounded-full cursor-pointer bg-brandWhite" role="button" aria-label="Add to favourite">
                    <div className="relative overflow-hidden">
                      <span className="text-[18px] h-[40px] w-[40px] group flex justify-end items-center text-brandBlack rounded-full border border-brandSecondary relative transition-all duration-500 hover:border-brandSecondary-500 z-[9] hover:w-[164px]">
                        <span className="text-left absolute left-0 pr-[20px] w-auto max-w-[210px] whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-150 pl-3 text-[14px] z-10 text-brandSecondary">
                          Add to favourite
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-[25px] h-[25px] mr-[6px] mt-[4px] p-0 transition-colors duration-300 stroke-[#003d2a]"
                          strokeWidth={1.5}
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 3.75c-1.95 0-3.56 1.23-4.5 3.045C11.06 4.98 9.45 3.75 7.5 3.75 5.014 3.75 3 5.878 3 8.438c0 2.458 1.863 5.098 5.57 8.11.934.75 1.953 1.507 3.048 2.258a.75.75 0 00.864 0c1.095-.75 2.114-1.508 3.048-2.258 3.707-3.012 5.57-5.652 5.57-8.11 0-2.56-2.014-4.688-4.5-4.688z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold whitespace-normal">{recipe.title}</h3>
              </div>
              <div className="p-4 pt-0 border-t border-t-0 absolute bottom-0">
                <ul className="flex gap-[18px]">
                  <li className="flex items-center gap-1">
                    <span className="demo-icon w-[27px] h-[27px] text-[20px] flex items-center justify-center">🕒</span>
                    {recipe.time}
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
