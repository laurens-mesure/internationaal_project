import React from "react";

import MapIcon from "../assets/img/map.svg";

const OriginStory: React.FC = () => {
    return (
        <section className="text-gray-700 text-lg mb-4 mt-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <h1 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">
                        Origin of phishing
                    </h1>
                    <p className="mb-3 dark:text-white">
                        The origin of the word "phishing" was coined around 1996
                        by hackers stealing America Online accounts and
                        passwords.
                    </p>
                </div>
                <img src={MapIcon} alt="Map" className="w-1/4 mx-auto mb-6" />
            </div>
            <p className="mb-3 dark:text-white">
                By analogy with the sport of angling &#127907;, these Internet
                scammers were using e-mail lures, setting out hooks to "fish"
                for passwords and financial data from the "sea" of Internet
                users.
            </p>
            <p className="mb-3 dark:text-white">
                They knew that most users wouldn't take the bait, but a few
                likely would.
            </p>

            <p className="mb-3 dark:text-white">
                Phishing originates from the 90s with hackers impersonating ISP
                employees using spoof mails and contacting the customers asking
                for their private information. After that, the hackers started
                using phishing for targeting online payment systems and
                eCommerce. Next, hackers would start exploiting the use of popup
                windows to gather sensitive information. From there on, the use
                of phishing has really taken off.
            </p>
        </section>
    );
};

export default OriginStory;
