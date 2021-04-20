import React from "react";
import UrlTester from "../Components/UrlTester";

const Frontpage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-center text-lg mb-4">
                You can test any URL for malware, phishing, scam...{" "}
            </h1>
            <UrlTester />
        </div>
    );
};

export default Frontpage;
