import React from "react";

// Components
import UrlTester from "../Components/UrlTester";
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import PhishingTypes from "../Components/PhishingTypes";
import AgeGroups from "../Components/AgeGroups";
import OriginStory from "../Components/OriginStory";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <UrlTester />
            <WhatIs />
            <WhyPhishing />
            <PhishingTypes />
            <AgeGroups />
            <OriginStory />
        </div>
    );
};

export default Frontpage;
