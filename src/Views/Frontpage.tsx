import React from "react";
import UrlTester from "../Components/UrlTester";
import WhatIs from "../Components/WhatIs";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-center text-lg mb-4">
                You can test any URL for malware, phishing, scam...
            </h1>
            <UrlTester />
            <WhatIs />
        </div>
    );
};

export default Frontpage;
