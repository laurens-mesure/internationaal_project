import React from "react";

// Components
import UrlTester from "../Components/UrlTester";
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import PhishingTypes from "../Components/PhishingTypes";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <UrlTester />
            <WhatIs />
            <WhyPhishing />
            <PhishingTypes />
        </div>
    );
};

export default Frontpage;
