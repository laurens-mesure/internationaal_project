import React from "react";

// Icons
import SearchingIcon from "../assets/img/searching.svg";

const WhyPhishing: React.FC = () => {
    return (
        <section className="items-center sm:items-start text-gray-700 text-lg mt-4 dark:text-gray-200 mb-20 flex flex-col-reverse md:flex-row">
            <div>
                <h1 className="text-2xl 2xl:font-bold mb-4 mt-2 dark:text-white text-center sm:text-left">
                    Why phishing?
                </h1>
                <p className="mb-3 dark:text-white">
                    Phishing is used by criminals for financial gain. It is also
                    often used to gain a foothold in corporate or governmental
                    networks as a part of a larger attack.
                </p>
            </div>
            <img src={SearchingIcon} alt="phishing" className="w-1/3 ml-10" />
        </section>
    );
};

export default WhyPhishing;
