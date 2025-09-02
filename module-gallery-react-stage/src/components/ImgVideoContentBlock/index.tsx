"use client";

import React from "react";
import Image from "next/image";

const LocalProgramSection = () => {
  const openVideo = () => {
    const videoModal = document.getElementById("video-modal");
    if (videoModal) videoModal.style.display = "flex";
  };

  const closeVideo = () => {
    const videoModal = document.getElementById("video-modal");
    const iframe = document.getElementById("youtube-iframe") as HTMLIFrameElement;
    if (videoModal && iframe) {
      videoModal.style.display = "none";
      iframe.src = iframe.src; // Stop video playback
    }
  };

  return (
    <section className="bg-brandWhite py-6 lgs:py-12">
      <div className="mx-left">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center bg-grey100 rounded-b-lg 2md:rounded-l-lg">
          {/* Text Content */}
          <div className="order-2 xl:order-1 p-6 xl:px-[60px] md:py-[18px] space-y-4">
            <h3 className="font-sans text-2xl font-bold text-brandBlack">Our Local Program allows local suppliers to grow at a sustainable pace within our network of stores. You can start out in less than five stores and work with our team</h3>
            <div className="text-body font-normal text-brandBlack space-y-4">
              <p>Local Program Requirements:</p>
              <ul className="list-disc list-outside pl-6">
                <li>Your products are made right here in Canada.</li>
                <li>You are locally producing items that will wow and excite our customers.</li>
                <li>Your products are regionally relevant in a local market.</li>
                <li>Your product is packaged and ready to be sold.</li>
              </ul>
              <p>If you fit this criteria, we want to know more!</p>
            </div>
          </div>

          {/* Video Thumbnail with Button */}
          <div className="order-1 xl:order-2 cursor-pointer rounded-t-lg 2md:rounded-none 2md:rounded-r-lg overflow-hidden relative">
            <Image
              src="/images/sobeys-video.jpg"
              alt="video banner"
              width={1920}
              height={460}
              className="w-full h-auto object-cover"
            />
            <button onClick={openVideo}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-brandWhite flex items-center justify-center text-black border border-grey300 hover:border-brandSecondary hover:bg-brandSecondary curser-pointer hover:text-white transition shadow-lg"
              aria-label="open video">
              <span className="text-[12px] relative">▶</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div id="video-modal" className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-80 items-center justify-center hidden">
        <div className="relative w-[90%] max-w-[900px] aspect-video p-10 bg-white">
          <iframe id="youtube-iframe" className="w-full h-full" src="https://www.youtube.com/embed/pOkAQMeaI9M"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

          <button onClick={closeVideo} className="absolute top-1 right-2 text-black text-xl bg-black bg-opacity-0 rounded-full p-2" aria-label="close video">✕</button>
        </div>
      </div>
    </section>
  );
};

export default LocalProgramSection;
