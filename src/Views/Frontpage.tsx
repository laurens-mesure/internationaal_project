import React from "react";

// Components
import UrlTester from "../Components/UrlTester";
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import PhishingTypes from "../Components/PhishingTypes";
import AgeGroups from "../Components/AgeGroups";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <UrlTester />
            <WhatIs />
            <WhyPhishing />
            <PhishingTypes />
            <AgeGroups />
        </div>
    );
};

export default Frontpage;
