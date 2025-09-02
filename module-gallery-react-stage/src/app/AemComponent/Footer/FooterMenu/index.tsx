"use client";

import React from "react";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import ImageWrapper from "@/components/ImageWrapper";
import Link from "next/link";

interface VerticalLink {
  label: string;
  link: string;
  target: "_self" | "_blank";
}

interface VerticalSection {
  heading: string;
  verticalLinks: VerticalLink[];
}

interface AdditionalLink {
  label: string;
  link: string;
  target: "_self" | "_blank";
}

interface FooterData {
  verticalList: VerticalSection[];
  stayintheloop: string;
  stayintheloopdesc: string;
  newslettertitle: string;
  newsletterlink: string;
  appstitle: string;
  appleappstorelink: string;
  googleplaystorelink: string;
  learnmorelink: string;
  learnmoretitle: string;
  copyrighttitle: string;
  additionalLinks: AdditionalLink[];
}

export default function FooterMenu() {
  const footerData: FooterData = {
    verticalList: [
      {
        heading: "Sobeys Inc.",
        verticalLinks: [
          { label: "Our History", link: "#!", target: "_self" },
          { label: "Sobeys Corporate", link: "#!", target: "_self" },
          { label: "Careers", link: "#!", target: "_self" },
          { label: "Gift Cards", link: "#!", target: "_self" },
          { label: "Sustainability", link: "#!", target: "_self" },
          { label: "Food Hero", link: "#!", target: "_self" },
          { label: "Recipe Promise", link: "#!", target: "_self" },
          { label: "Privacy Policy Offices", link: "#!", target: "_self" },
          { label: "Press Room", link: "#!", target: "_self" },
          { label: "Empire Company Ltd", link: "#!", target: "_self" },
          { label: "Crombie REIT", link: "#!", target: "_self" },
        ],
      },
      {
        heading: "Ways to shop",
        verticalLinks: [
          { label: "Shop online at Voila", link: "#!", target: "_self" },
          { label: "Find a store", link: "#!", target: "_self" },
          { label: "Safeway", link: "#!", target: "_self" },
          { label: "FreshCo", link: "#!", target: "_self" },
          { label: "Chalo FreshCo", link: "#!", target: "_self" },
          { label: "IGA West", link: "#!", target: "_self" },
          { label: "IGA Quebec", link: "#!", target: "_self" },
          { label: "Lawtons Drugs", link: "#!", target: "_self" },
          { label: "Foodland & Co-op", link: "#!", target: "_self" },
          { label: "Thrifty Foods", link: "#!", target: "_self" },
        ],
      },
      {
        heading: "Community",
        verticalLinks: [
          { label: "OurPartTM", link: "#!", target: "_self" },
          { label: "Local Supplier Connect", link: "#!", target: "_self" },
          { label: "Food Rescue", link: "#!", target: "_self" },
          { label: "Community Action Fund", link: "#!", target: "_self" },
          { label: "Women Entrepreneurs", link: "#!", target: "_self" },
        ],
      },
      {
        heading: "What's Popular",
        verticalLinks: [
          { label: "Weekly Flyer", link: "#!", target: "_self" },
          { label: "Scene+ Sobeys Offers", link: "#!", target: "_self" },
          { label: "Recipes", link: "#!", target: "_self" },
          { label: "Scene+ Grocery Offers", link: "#!", target: "_self" },
        ],
      },
    ],
    stayintheloop: "Stay in the Loop",
    stayintheloopdesc:
      "Get information on weekly flyer features, exclusive offers, deals, and special promotions",
    newslettertitle: "Join Our Newsletter",
    newsletterlink: "#!",
    appstitle: "Get Our App",
    appleappstorelink: "#!",
    googleplaystorelink: "#!",
    learnmorelink: "#!",
    learnmoretitle: "Learn More",
    copyrighttitle: "© 2025 Sobeys Inc. All rights reserved.",
    additionalLinks: [
      { label: "AdChoices", link: "#!", target: "_blank" },
      { label: "Privacy", link: "#!", target: "_self" },
      { label: "Terms of Use", link: "#!", target: "_self" },
      { label: "Accessibility", link: "#!", target: "_self" },
    ],
  };
  
  
  
  function addDataLayer(data: {
    event: string;
    click_text: string;
    click_url: string;
    page_title: string;
  }): void {
    // Implement your data layer logic here (currently stubbed)
    console.log("DataLayer Event:", data);
  }

  return (
    <Box
      as="div"
      className="pb-[48px] lg:pb-[40px] pt-[0] lg:pt-[40px] bg-brandWhite"
      role="navigation"
    >
      <Container>
        <Box as="div" className="grid-cols-1 lg:grid-cols-5 grid">
          {footerData?.verticalList?.map((item, index) => (
            <Box
              as="div"
              className="lg:col-span-1 hidden-tab"
              key={item?.heading + index}
            >
              <main>
                <Text
                  as="p"
                  className="text-brandBlack text-body font-semibold leading-normal mb-3"
                >
                  {item?.heading}
                </Text>
              </main>
              <nav>
                <Text as="ul" className="[&>li>a:hover]:text-brandSecondary">
                  {item?.verticalLinks.map((innerItem, key) => (
                    <Text as="li" key={innerItem?.label + key}>
                      <Link
                        href={innerItem?.link ?? "#"}
                        className="inline-block text-brandBlack text-body font-normal leading-normal mb-0 pt-1 pb-1 hover:underline"
                        target={innerItem?.target}
                        aria-label={innerItem?.label}
                        onClick={() =>
                          addDataLayer({
                            event: "nav_footer",
                            click_text: innerItem?.label,
                            click_url: innerItem?.link ?? "",
                            page_title: document?.title,
                          })
                        }
                      >
                        {innerItem?.label}
                      </Link>
                    </Text>
                  ))}
                </Text>
              </nav>
            </Box>
          ))}

          <Box as="div" className="col-span-1 pt-[0px] lg:pt-0">
            <main>
              <Text
                as="p"
                className="border-t-[0.5px] border-grey350 pt-[15px] lg:pt-[0px] lg:border-none text-brandBlack text-body font-semibold leading-normal mb-2"
              >
                {footerData?.stayintheloop}
              </Text>
              <Text as="p" className="text-grey900 text-sm font-normal leading-normal mb-4">
                {footerData?.stayintheloopdesc}
              </Text>

              <Button variant="primary" asChild>
                <Link
                  className="font-normal border-grey350 border-[1px] !text-body px-[24px]"
                  href={footerData?.newsletterlink}
                  target="_self"
                  aria-label="Join our newsletter"
                >
                  {footerData?.newslettertitle}
                </Link>
              </Button>

              <Text
                as="p"
                className="text-brandBlack text-body font-semibold leading-normal mt-6 pt-[16px] lg:pt-[0] border-grey350 border-t-[0.5px] lg:border-t-[0px]"
              >
                {footerData?.appstitle}
              </Text>
            </main>

            <Box as="div" className="flex flex-row gap-3 pt-4">
              <Link href={footerData?.appleappstorelink} aria-label="Apple App Store">
                <ImageWrapper
                  src="/images/app-store.png"
                  width={107}
                  height={34}
                  alt="Apple App Store"
                />
              </Link>
              <Link href={footerData?.googleplaystorelink} aria-label="Google Play Store">
                <ImageWrapper
                  src="/images/app-store.png"
                  width={107}
                  height={34}
                  alt="Google Play Store"
                />
              </Link>
            </Box>

            <Box as="div" className="text-brandBlack text-body font-semibold leading-normal mt-4">
              <Link
                className="text-body font-bold leading-normal mt-4 underline hover:no-underline text-brandSecondary py-3"
                href={footerData?.learnmorelink}
                target="_self"
                aria-label={footerData?.learnmoretitle}
              >
                {footerData?.learnmoretitle}
              </Link>
            </Box>
          </Box>
        </Box>

        <Box as="div" className="copyright-footer border-t-[0.5px] lg:border-t border-grey350 lg:border-[#C4C4C4] pt-5 mt-5 lg:pt-6 lg:mt-6">
          <Box as="div" className="lg:flex flex-row items-center justify-between">
            <Text as="p" className="text-brandBlack text-body font-normal leading-normal lg:w-1/2">
              {footerData?.copyrighttitle}
            </Text>

            <Text
              as="ul"
              className="copyright-menu-items flex items-center lg:justify-end pt-[16px] lg:pt-[0] gap-2 2xs:gap-4 lg:gap-[40px] lg:w-1/2 [&>li>a:hover]:text-brandSecondary"
            >
              {footerData?.additionalLinks.map((additionalItem) => (
                <Text as="li" key={additionalItem.label}>
                  {additionalItem.label === "AdChoices" ? (
                    <Link href={additionalItem?.link} target={additionalItem?.target}>
                      <ImageWrapper
                        src="/images/logo-adchoices.svg"
                        alt="AdChoices Logo"
                        height={25}
                        width={90}
                        className="max-w-[65px]"
                      />
                    </Link>
                  ) : (
                    <Link
                      href={additionalItem?.link}
                      className="inline-block text-brandBlack text-xs 3xs:text-sm 2xs:text-body hover:underline"
                      target={additionalItem?.target}
                    >
                      {additionalItem?.label}
                    </Link>
                  )}
                </Text>
              ))}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
