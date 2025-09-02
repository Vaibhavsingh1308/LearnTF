
import Link from "next/link";
import React, {useState} from "react";

export default function HeaderTopBar() {

    const [isClosed, setIsClosed] = useState(false)

    const handleClick = () =>{
        setIsClosed(true);
    }

    if (isClosed) return null;

    return (
        <div className="alert-top-bar py-[14px] md:py-[4px] bg-[#ED1C24] px-20">
            <div className="container">
                <div className="alert-bar-inner flex items-center justify-between">
                    <p className="text-white text-[12px] md:text-[14px] lg:text-[16px] font-[700] leading-normal mb-0 custom-max-sm:pe-[28px] md:pe-[0]">Recall: Compliments extra crunchy breaded chicken fingers.</p>
                    <div className="view-details-alert flex item-center">
                        <Link href={""} className="text-white text-[14px] font-[700] leading-normal underline py-[10px] px-[12px] whitespace-nowrap hover:no-underline">View Details</Link>
                        <button className="border-0 bg-transparent outline-none p-[8px] focus:outline notificationclose" onClick={handleClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
