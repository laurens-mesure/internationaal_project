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
        <div className="p-2 dark:bg-gray-900">
            <WhatIs />
            <OriginStory />
            <WhyPhishing />
            <PhishingTypes />
            <PreventPhishingAttacks />
            <AcquireEmailAddresses />
            <HowToRespond />
            <AgeGroups />
            <MostCommonPhishingPlaces />
            {/* <DaBigQuizy /> */}

        </div>
    );
};

export default Frontpage;
