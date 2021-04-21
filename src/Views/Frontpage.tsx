import React from "react";
import UrlTester from "../Components/UrlTester";
import WhatIs from "../Components/WhatIs";
import WhyPhishing from "../Components/WhyPhishing";
import AgeGroups from "../Components/AgeGroups";
import OriginStory from "../Components/OriginStory";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-center text-lg mb-4">
                You can test any URL for malware, phishing, scam...
            </h1>
            <UrlTester />
            <WhatIs />
            <WhyPhishing />
            <AgeGroups />
            <OriginStory />
        </div>
    );
};

export default Frontpage;
