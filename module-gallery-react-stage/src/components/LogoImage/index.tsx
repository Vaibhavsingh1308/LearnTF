"use client";

import Image from "next/image";

const brandLogos = [
  {
    alt: "Sobeys",
    src: "/images/sobeysLogo.svg",
    href: "#",
  },
  {
    alt: "Sobeys Express",
    src: "/images/sobeys-express.svg",
    href: "#",
  },
  {
    alt: "Urban fresh logo",
    src: "/images/sobeys-urban.svg",
    href: "#",
  },
  {
    alt: "Safeway logo",
    src: "/images/safeway.svg",
    href: "#",
  },
  {
    alt: "IGA logo",
    src: "/images/iga.svg",
    href: "#",
  },
  {
    alt: "Freshco Logo",
    src: "/images/freshco-logo.svg",
    href: "#",
  },
  {
    alt: "Chalo freshco logo",
    src: "/images/chalo-logo.svg",
    href: "#",
  },
  {
    alt: "Foodland Logo",
    src: "/images/foodland-logo.svg",
    href: "#",
  },
  {
    alt: "lawtons Logo",
    src: "/images/lawtons-logo.svg",
    href: "#",
  },
  {
    alt: "Rachellebery Logo",
    src: "/images/rachelle-logo.svg",
    href: "#",
  },
  {
    alt: "Thriftyfoods Logo",
    src: "/images/thriftyfoods-logo.svg",
    href: "#",
  },
  {
    alt: "Marchestradition Logo",
    src: "/images/marche-logo.svg",
    href: "#",
  },
  {
    alt: "Needs Logo",
    src: "/images/needs-logo.svg",
    href: "#",
  },
];

export default function GiftCardLogosSection() {
  return (
    <section className="mx-auto px-6 2md:px-12 max-w-[1536px] mt-6 lg:mt-12">
      <div className="mb-6">
        <div className="text-center font-bold max-w-[680px] xl:max-w-full mx-auto">
          <p>Our Gift Cards are great for any occasion. With our Gift Cards you have the flexibility to shop at any <br className="hidden xl:block" /> of our participating banner stores nationally.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {brandLogos.map((logo, index) => (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt}>
            <Image src={logo.src} alt={logo.alt} width={185} height={80} loading="lazy"/>
          </a>
        ))}
      </div>
    </section>
  );
}
