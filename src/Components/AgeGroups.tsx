import React from "react";

const AgeGroups: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mb-4 mt-4">
            <h1 className="text-2xl 2xl:font-bold mb-4 mt-2 text-gray-700 dark:text-gray-200">
                What age group is most vulnerable to phishing?
            </h1>
            <p className="mb-3 dark:text-white">
                Research shows that people are vulnerable to phishing for
                several reasons:
            </p>
            <ul className="list-disc ml-20 dark:text-white">
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

            <ul className="list-disc ml-20 mb-3 dark:text-white">
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
