import React from "react";
import UrlTester from "../Components/UrlTester";
import PhishingTypes from "../Components/PhishingTypes";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <UrlTester />
            <PhishingTypes />
        </div>
    );
};

export default Frontpage;
