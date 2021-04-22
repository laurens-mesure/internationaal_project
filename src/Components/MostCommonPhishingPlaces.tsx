import React from "react";

// Charts
import MostTargetedOnlineIndustries from "../assets/img/MostTargetedOnlineIndustries4Q2020.png";
import MostPhishingAttacksPerCountry from "../assets/img/MostPhishingAttacksPerCountry.png";

const MostCommonPhishingPlaces: React.FC = () => {
    return (
        <div className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mb-4 mt-4">
            <h1 className="text-2xl 2xl:font-bold mb-4 mt-2 text-gray-700 dark:text-gray-200">
                Where does the most phishing take place? 
            </h1>
            <h2 className="mb-5 dark:text-white">
                Most phishing attacks per industry
            </h2>
            <div className="mx-auto w-3/5 mb-5">
                <img 
                    src={MostTargetedOnlineIndustries}
                    alt="Chart of the most targeted online industries"
                    className="mx-auto mb-1"
                />
                <p className="text-xs w-4/5 mx-auto">
                    Greg, Aaron. Phishing Activity Trends Report. 2021. Anti-Phishing Working Group,
                    <a 
                        className="text-xs w-4/5 mx-auto"
                        href="https://docs.apwg.org/reports/apwg_trends_report_q4_2020.pdf">
                        https://docs.apwg.org/reports/apwg_trends_report_q4_2020.pdf
                    </a>
                </p>
            </div>
            <h2 className="mb-5 dark:text-white">
                Most phishing attacks per country
            </h2>
            <div className="mx-auto w-3/5 mb-5">
                <img
                    src={MostPhishingAttacksPerCountry}
                    alt="Chart of most phishing attacks per country"
                    className="mx-auto mb-1"/>
                <p className="text-xs w-4/5 mx-auto">
                    Volkman, Elliot. These Are the Top Most Targeted Countries by Phishing Attacks. 2019. Phishlabs,
                    <a 
                        className="text-xs w-4/5 mx-auto"
                        href="https://info.phishlabs.com/blog/top-targeted-countries-by-phishing-attacks-2019">
                        https://info.phishlabs.com/blog/top-targeted-countries-by-phishing-attacks-2019
                    </a>
                </p>
            </div>
        </div>
    )
}

export default MostCommonPhishingPlaces;