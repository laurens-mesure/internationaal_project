import React from "react";

const data = [
    {
        no: "1",
        title: "Don’t panic",
        description:
            "Stay calm. The most common mistake people make is panicking. This is the first as well as the most important step, because you will be undertaking actions which require a clear head.",
    },
    {
        no: "2",
        title: "Act quickly",
        description:
            "This will minimalize the harm done and maximize your legal options. Contact your local authorities, such as the police. They will take the right steps to prevent an escalation of the situation.",
    },
    {
        no: "3",
        title: "Change your passwords",
        description:
            "Change your password as soon as possible. If you have entered debit or credit card details, notify Card Stop at the number: 070 344 344.",
    },
    {
        no: "4",
        title: "Contact your bank",
        description:
            "Your bank can immediately block your last payment and possibly also your account.",
    },
    {
        no: "5",
        title: "Inform",
        description:
            "Find out in advance who needs to be informed. For instance, in Belgium, the organization you should inform would be safeonweb.be. ",
    },
    {
        no: "6",
        title: "Contact your bank",
        description:
            "Take steps to preserve evidence, you may need this for investigative or legal proceedings. Print or save the email of the phishing attack or take a screenshot (and URL) of the website. ",
    },
];

const listItems = data.map((item, key) => (
    <div
        className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto"
        key={key}
    >
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 dark:bg-gray-800 pointer-events-none bg-gray-200"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
            {item.no}
        </div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-20 h-20 dark:bg-gray-800 bg-gray-200 text-blue-400 rounded-full inline-flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font dark:text-gray-100 text-gray-900 mb-1 text-xl">
                    {item.title}
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                    {item.description}
                </p>
            </div>
        </div>
    </div>
));

const HowToRespond: React.FC = () => {
    return (
        <div className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 mb-10">
            <h2 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">
                9. How to respond when things go wrong?
            </h2>
            <section className="body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    {listItems}
                </div>
            </section>
        </div>
    );
};

export default HowToRespond;
