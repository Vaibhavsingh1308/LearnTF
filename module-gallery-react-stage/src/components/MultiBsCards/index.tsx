"use client";

import React from "react";

const MultiBsCards = () => {
  const cards = [
    {
      title: "Employee Rewards",
      desc:
        "Show your appreciation with Empire's grocery gift card - from everyday groceries to a personal treat, this gesture helps employees feel valued.",
    },
    {
      title: "Customer Loyalty",
      desc:
        "Boost repeat business by rewarding customers with our gift cards - a simple 'thank you' that keeps them coming back.",
    },
    {
      title: "Sales Incentives",
      desc:
        "Motivate your team and boost morale - our gift cards can add a little extra joy to their lives, like a family dinner or trying new recipes.",
    },
    {
      title: "Health & Wellness Programs",
      desc:
        "Support your team's well-being with our gift cards, helping them enjoy healthier options.",
    },
    {
      title: "Recruiting",
      desc:
        "Add Empire grocery gift cards to your welcome package - a warm gesture that shows top talent you care.",
    },
    {
      title: "Year-End Gifts",
      desc:
        "Celebrate company milestones and holidays with our gift cards - a thoughtful way to show your appreciation.",
    },
  ];

  return (
    <section className="bg-brandWhite">
      <div className="max-w-[1920px]">
        {/* Heading */}
        <div className="mt-6 lg:mt-12">
          <h2 className="font-sans text-2xl font-bold">
            The perfect choice for rewards, loyalty, and incentive programs.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] bg-white"
            >
              <div className="p-6 xl:p-8">
                <h3 className="font-bold font-sans text-2xl xl:text-2xl 2lg:text-xl">
                  {card.title}
                </h3>
                <p className="pt-4 text-body text-[16px] leading-[1.6] text-brandBlack">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiBsCards;
