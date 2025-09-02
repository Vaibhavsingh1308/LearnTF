import CardSlider from '@/components/CardSlider';
import React from 'react'


const slidesData = [
  {
    image: "/images/Mobile-View.jpg",
    title: "Bakery",
    description: "From buttery breakfast favourites to pastries, cookies and squares, we've got ju...",
    buttonLabel: "Shop Now",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Cheese and Meat",
    description: "Our cheese and meat trays are ideal for time spent with family and friends - pa...",
    buttonLabel: "Browse",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Fruits, Veggies & Salad",
    description: "Freshly cut and prepared fruit, veggie and salad trays are an easy, convenient w...",
    buttonLabel: "Browse",
  },

  {
    image: "/images/Mobile-View.jpg",
    title: "Party Favourites",
    description: "Comfort food classics at their best. We do the prep, you get the rave reviews!",
    buttonLabel: "Browse",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Seafood",
    description: "Our freshly prepared seafood trays add a celebratory touch to any gathering.",
    buttonLabel: "Browse",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Bakery",
    description: "From buttery breakfast favourites to pastries, cookies and squares, we've got ju...",
    buttonLabel: "Browse",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Bakery",
    description: "From buttery breakfast favourites to pastries, cookies and squares, we've got ju...",
    buttonLabel: "Browse",
  },
  {
    image: "/images/Mobile-View.jpg",
    title: "Party Favourites",
    description: "Comfort food classics at their best. We do the prep, you get the rave reviews!",
    buttonLabel: "Browse",
  },
];

const page = () => {

  return (
    <main className='p-10'>
      <div className="px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="mb-5">
              <h1 className="text-[20px] font-bold mb-2">Card Slider Component</h1>
              <p className="text-[15px] mb-5">The Card Slider Component is a dynamic carousel-style module that allows content authors to display a series of content cards in a horizontally scrollable format. It is ideal for showcasing categories, featured content, or promotional items in an engaging and interactive layout.</p>

              <h2 className='mb-2'><strong>Main Configuration Options </strong></h2>
              <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li>Title – The main heading displayed above the slider</li>
                <li>Description – Supporting text to introduce the card slider section</li>
              </ul>

              <h2 className='mb-2'><strong>Card Slider Items (Repeatable)</strong></h2>
              <p className="text-[15px] mb-5">Authors can add multiple slider cards using the Add button. Each card includes the following fields:</p>
              <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li>Label – A brief title or tag to categorize the card</li>
                <li>Description – Supporting text or summary of the card content</li>
                <li>Category Image – Visual representation of the category or content</li>
                <li>Image Alt Text – Descriptive text for accessibility and screen readers</li>
                <li>Link to Page – Destination URL with the option to open in a new tab</li>
                <li>Link Title – Text for the CTA or hyperlink</li>
                <li>ARIA Label – Optional label to enhance accessibility for screen readers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CardSlider slides={slidesData} />

    </main>
  )
}

export default page