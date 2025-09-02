"use client";

import React from "react";
import { Box } from "@/components/Box";
import { Row } from "@/components/Row";
import { Text } from "@/components/Text";
import { Columns } from "@/components/Columns";
import { Container } from "@/components/Container";
import Link from "next/link";

// Define types
interface LinkItem {
  label: string;
  link: string;
  target: "_blank" | "_self";
}

interface SocialLink extends LinkItem {
  icon: string;
  alt: string;
}

const footerData: {
  customerServiceTitle: string;
  horizontalList: LinkItem[];
  connectwithusTitle: string;
  socialLinks: SocialLink[];
} = {
  customerServiceTitle: "Customer Service",
  horizontalList: [
    { label: "Contact Us", link: "/contact", target: "_blank" },
    { label: "FAQ", link: "/faq", target: "_self" },
    { label: "Recalls", link: "/recalls", target: "_self" },
  ],
  connectwithusTitle: "Connect with Us",
  socialLinks: [
    {
      label: "Facebook",
      link: "#!",
      target: "_blank",
      icon: "/images/facebook.png",
      alt: "Facebook",
    },
    {
      label: "Instagram",
      link: "#!",
      target: "_blank",
      icon: "/images/instagram.png",
      alt: "Instagram",
    },
    {
      label: "Pinterest",
      link: "#!",
      target: "_blank",
      icon: "/images/pinterest.jpeg",
      alt: "pinterest",
    },
    {
      label: "Youtube",
      link: "#!",
      target: "_blank",
      icon: "/images/youtube.png",
      alt: "youtube",
    },
  ],
};

export default function Social() {
  function addDataLayer(data: {
    event: string;
    click_text: string;
    click_url: string;
    page_title: string;
  }): void {
    console.log("DataLayer Event:", data);
  }

  return (
    <Box as="div" className="bg-brandSecondary py-4 lg:!py-6" role="navigation">
      <Container>
        <Row className="pb-0 justify-between w-full">
          {/* Customer Service Section */}
          <Columns className="col-6 hidden lg:!block">
            <Box as="div" className="flex gap-6">
              <Box as="div" className="flex items-center gap-[24px]">
                <main>
                  <Text
                    as="span"
                    className="text-brandWhite text-body font-semibold leading-normal"
                  >
                    {footerData.customerServiceTitle}
                  </Text>
                </main>
                {footerData.horizontalList.map((horizontalItem, index) => (
                  <nav className="flex gap-6" key={index}>
                    <Link
                      href={horizontalItem.link}
                      className="text-brandWhite text-body font-light leading-normal underline"
                      aria-label={horizontalItem.label}
                      target={horizontalItem.target}
                      onClick={() =>
                        addDataLayer({
                          event: "nav_footer",
                          click_text: horizontalItem.label,
                          click_url: horizontalItem.link,
                          page_title: document?.title,
                        })
                      }
                    >
                      {horizontalItem.label}
                    </Link>
                  </nav>
                ))}
              </Box>
            </Box>
          </Columns>

          {/* Social Links Section */}
          <Columns className="col-6 justify-end w-full lg:!w-auto mr-0 !pr-[0]">
            <Box as="div" className="flex gap-6 w-full">
              <Box as="div" className="flex items-center gap-[10px] w-full justify-end">
                <main>
                  <Text
                    as="span"
                    className="text-brandWhite text-body font-normal leading-normal"
                  >
                    {footerData.connectwithusTitle}
                  </Text>
                </main>
                <nav className="flex items-center gap-[10px]">
                  {footerData.socialLinks.map((socialItem, index) => (
                    <Link
                      href={socialItem.link}
                      key={socialItem.label + index}
                      target={socialItem.target}
                      aria-label={socialItem.label}
                      onClick={() =>
                        addDataLayer({
                          event: "nav_footer",
                          click_text: socialItem.label,
                          click_url: socialItem.link,
                          page_title: document?.title,
                        })
                      }
                      className="text-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={socialItem.icon}
                        alt={socialItem.alt}
                        width={24}
                        height={24}
                        className="hover:opacity-75 transition-opacity duration-300"
                      />
                    </Link>
                  ))}
                </nav>
              </Box>
            </Box>
          </Columns>
        </Row>
      </Container>
    </Box>
  );
}
