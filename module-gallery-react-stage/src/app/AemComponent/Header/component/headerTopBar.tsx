
import React from "react";
import Logo from "./logo";
import Search from "./search";
import LocationAdress from "./locationDetails";
import UtilityBar from "./utilityBar";

export default function HeaderTopBar () {
  return (
    <div className="top-header relative flex items-center md:justify-between lg:justify-normal" >
        <Logo/>
        <LocationAdress/>
        <Search/>
        <UtilityBar/>
    </div>
  );
}
