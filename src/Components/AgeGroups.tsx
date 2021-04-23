import React from "react";

// Icons
import WheelchairIcon from "../assets/img/wheelchair.svg";

const AgeGroups: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mb-4 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                <img
                    src={WheelchairIcon}
                    alt="Wheelchair"
                    className="h-24 sm:mr-10"
                />
                <h1 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3 text-center sm:text-left">
                    What age group is most vulnerable to phishing?
                </h1>
            </div>
            <p className="mb-3 dark:text-white text-center sm:text-left">
                Research shows that people are vulnerable to phishing for
                several reasons:
            </p>
            <ul className="list-disc p-4 sm:p-0 sm:ml-20 dark:text-white">
                <li>
                    People tend to judge a website’s legitimacy by its “look and
                    feel,” which attackers can easily replicate.
                </li>
                <li>
                    Many users do not understand or trust the security
                    indicators in web browsers.{" "}
                </li>
                <li>
                    Awareness of phishing does not reduce a consumer’s
                    vulnerability.{" "}
                </li>
                <li>
                    The perceived consequences of phishing do not predict users’
                    behavior.{" "}
                </li>
            </ul>
            <p className="mb-3 dark:text-white">
                In the research, subjects were recruited to take a test that
                analyzed their susceptibility to phishing before and after an
                educational training session.
            </p>
            <p className="mb-3 dark:text-white">
                The study suggested that some demographics are more vulnerable
                to phishing than others:
            </p>

            <ul className="list-disc p-4 sm:p-0 sm:ml-20 mb-3  dark:text-white">
                <li>
                    <strong> Women</strong> appear to be{" "}
                    <strong>more susceptible than men</strong> to phishing.
                </li>
                <li>
                    People <strong>between the ages of 18 and 25</strong> are
                    more susceptible than other age groups.
                </li>
            </ul>
            <p className="mb-3 dark:text-white">
                After the subjects followed the phishing education, there was a
                40% drop in susceptibility. Some training material also
                decreased users' tendency to click on legitimate links as well
                as phishing links.
            </p>
        </section>
    );
};

export default AgeGroups;
