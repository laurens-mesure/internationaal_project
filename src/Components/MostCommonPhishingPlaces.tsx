import React from "react";

// Charts
import MostTargetedOnlineIndustries from "../assets/img/MostTargetedOnlineIndustries4Q2020.png";
import MostPhishingAttacksPerCountry from "../assets/img/MostPhishingAttacksPerCountry.png";

const MostCommonPhishingPlaces: React.FC = () => {
    return (
        <div className="text-lg mb-4 my-20">
            <h1 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">
                Where does the most phishing take place?
            </h1>

            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                src={MostPhishingAttacksPerCountry}
                                alt="Chart of most phishing attacks per country"
                                className="object-contain object-center h-full w-full"
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 dark:text-gray-100">
                            Most received phishing attacks per country
                        </h2>
                        <p className="leading-relaxed text-base dark:text-gray-400">
                            Volkman, Elliot. These Are the Top Most Targeted
                            Countries by Phishing Attacks. 2019. Phishlabs
                        </p>
                        <a
                            className="text-xs w-4/5 mx-auto dark:text-gray-500"
                            href="https://info.phishlabs.com/blog/top-targeted-countries-by-phishing-attacks-2019"
                        >
                            https://info.phishlabs.com/blog/top-targeted-countries-by-phishing-attacks-2019
                        </a>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                src={MostTargetedOnlineIndustries}
                                alt="Chart of the most targeted online industries"
                                className="object-contain object-center h-full w-full"
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 dark:text-gray-100">
                            Most phishing attacks per industry
                        </h2>
                        <p className="leading-relaxed text-base dark:text-gray-400">
                            Greg, Aaron. Phishing Activity Trends Report. 2021.
                            Anti-Phishing Working Group,
                        </p>
                        <a
                            className="text-xs w-4/5 mx-auto dark:text-gray-500"
                            href="https://docs.apwg.org/reports/apwg_trends_report_q4_2020.pdf"
                        >
                            https://docs.apwg.org/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostCommonPhishingPlaces;
