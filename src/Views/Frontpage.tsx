import React from "react";

// Components
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import PhishingTypes from "../Components/PhishingTypes";
import PreventPhishingAttacks from "../Components/PreventPhishingAttacks";
import AgeGroups from "../Components/AgeGroups";
import OriginStory from "../Components/OriginStory";
import MostCommonPhishingPlaces from "../Components/MostCommonPhishingPlaces";
import AcquireEmailAddresses from "../Components/AcquireEmailAddresses";
import HowToRespond from "../Components/HowToRespond";
// import DaBigQuizy from "../Components/DaBigQuizy";

const Frontpage: React.FC = () => {
    return (
        <div className="p-2 w-11/12 sm:w-2/3 xl:w-2/5 dark:bg-gray-900 flex flex-col mx-auto">
            <WhatIs />
            <OriginStory />
            <WhyPhishing />
            <PhishingTypes />
            <PreventPhishingAttacks />
            <AcquireEmailAddresses />
            <HowToRespond />
            <AgeGroups />
            <MostCommonPhishingPlaces />
        </div>
    );
};

export default Frontpage;
