"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../utils";

interface ImageModalProps {
    imageSrc: string;
    imageAlt?: string;
    buttonLabel?: string;
    className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
    imageSrc,
    imageAlt = "Modal Image",
    buttonLabel = "",
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className={cn("relative", className)}>
            {/* Open Button */}
            <button onClick={toggleModal} className="bg-white p-0 w-[50px] h-[50px] rounded-full flex items-center justify-center hover:opacity-90 transition">
                {buttonLabel}
                <Image src={"/images/magnifying-glass.png"} width={24} height={24} className="mx-auto w-[24px]" alt="Voila"/>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={toggleModal}>
                    <div className="relative bg-white rounded-lg p-6 max-w-[1024px] max-h-[100%]" onClick={(e) => e.stopPropagation()}>
                        {/* Close Icon */}
                        <button className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-500" onClick={toggleModal} aria-label="Close">
                            &times;
                        </button>
                        <div className="relative h-[600px] w-[600px] mx-auto">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-contain rounded"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageModal;
