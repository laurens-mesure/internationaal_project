import React from "react";

const WhatIs: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mb-4 mt-4">
            <h1 className="text-2xl 2xl:font-bold mb-4 mt-2 text-gray-700 dark:text-gray-200">
                What is phishing?
            </h1>
            <p className="mb-3 dark:text-white">
                Phishing is a type of online scam where criminals impersonate
                legitimate organizations via email, text message, advertisement
                or other means in order to steal sensitive personal data.
            </p>
            <p className="dark:text-white">
                {" "}
                Some examples of this sensitive, personal data are:
            </p>
            <ul className="list-disc ml-20 mb-3 dark:text-white">
                <li>passwords</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>credit card numbers</li>
                <li>...</li>
            </ul>
            <p className="mb-3 dark:text-white">
                Usually, the attacker uses email spoofing or text messaging to
                reach his victims. Often, the attacker leads the victim to a
                fake website which matches the look and feel of the legitimate
                site. As of 2020, phishing is the most common attack performed
                by cyber criminals.
            </p>
            <p className="mb-3 dark:text-white">
                Such an attack can be disastrous to the victim. It can lead to
                identity theft, unauthorized purchases, ...
            </p>
        </section>
    );
};

export default WhatIs;
