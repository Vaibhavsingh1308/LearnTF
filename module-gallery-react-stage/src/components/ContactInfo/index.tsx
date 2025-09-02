"use client";

import React from "react";

const contactData = [
  {
    region: "Atlantic",
    phone: "1-866-948-0196",
    hours: "Monday to Friday 8:00 am to 5:00 pm (AST)",
    email: "customer.service@sobeys.com",
  },
  {
    region: "Ontario",
    phone: "1-866-948-0196",
    hours: "Monday to Friday 8:00 am to 4:30 pm (EST)",
    email: "customer.care.ontario@sobeys.com",
  },
  {
    region: "West",
    phone: "1-866-948-0196",
    hours: "Monday to Friday 8:00 am to 5:00 pm (MST)",
    email: "customer.helpline@sobeys.com",
  },
  {
    region: "Private Brands",
    phone: "1-866-948-0196",
    hours: "Monday to Friday 8:00 am to 5:00 pm (EST)",
    email: "compliments@sobeys.com",
    link: "http://compliments.ca/",
  },
];

export default function ContactInfo() {
  return (
    <div className="pt-8 pb-6 grid grid-cols-1 md:grid-cols-2 lgs:grid-cols-4 gap-6">
      {contactData.map((item, index) => (
        <div key={index} className="text-body">
          <h3 className="font-extrabold text-[20px] pb-4 font-sans">{item.region}</h3>
          <p className="text-based">
            Call toll-free&nbsp;
            {item.link ? (
              <a href={item.link} title={item.link} className="text-[#003D2A] underline break-all">{item.phone}</a>
            ) : (
              <a href={`mailto:${item.email}`} title={`mailto:${item.email}`} className="text-[#003D2A] underline break-all">
                {item.phone}
              </a>
            )}
            <br />
            {item.hours}
            <br />
            <a href={`mailto:${item.email}`} className="text-[#003D2A] underline break-all">{item.email}</a>
          </p>
        </div>
      ))}
    </div>
  );
}
