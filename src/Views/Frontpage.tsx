import React from "react";

// Components
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import PhishingTypes from "../Components/PhishingTypes";
import PreventPhishingAttacks from "../Components/PreventPhishingAttacks";
import AgeGroups from "../Components/AgeGroups";
import OriginStory from "../Components/OriginStory";
import MostCommonPhishingPlaces from "../Components/MostCommonPhishingPlaces";
import DaBigQuizy from "../Components/DaBigQuizy";


const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <WhatIs />
            <WhyPhishing />
            <PhishingTypes />
            <PreventPhishingAttacks />
            <AgeGroups />
            <OriginStory />
            <MostCommonPhishingPlaces />
            <DaBigQuizy />
        </div>
    );
};

export default Frontpage;
