import React from "react";

// Components
import RecognizePhishingAttacks from "../Components/RecognizePhishingAttacks";

// Icons
import TeachingIcon from "../assets/img/teaching.svg";

const data = [
    {
        title: "Install antivirus software",
        description:
            "Antivirus software is software specifically designed for detecting and removing computer viruses. These are useful tools for cases where a user unknowingly downloads malware, for example, malware disguised as an attachment in a mail.",
    },
    {
        title: "Use multi-factor authentication",
        description:
            "The vast majority of sites these days offer some kind of extra security by requiring multiple credentials to login to an account. This method makes it positively harder for a scammer to break into your account, should they have acquired your username and password.",
    },
    {
        title: "Don’t download attachments or open links",
        description:
            "Don’t download a suspicious looking attachment. The attachment might be infected and contain some sort of malware.\n Before clicking on a link in a mail, also consider checking the destination URL. If the URL of the link seems to have no affiliation to the context of the mail itself, there is a high chance it is a phishing mail.",
    },
    {
        title: "Only give data to a site with HTTPS",
        description:
            "When on an unfamiliar website, always look at the beginning of the URL of a site to see if it is using HTTPS. If this is not the case, it is better not to give your data or download something from the site.",
    },
    {
        title: "Use a browser extension",
        description:
            "You can also make use of browser extensions to help protect you against phishing attacks, such as the Microsoft Defender Browser Protection extension. This extension for Google Chrome alerts the user if he/she encounters a malicious link.",
    },
    {
        title: "Educate your employees",
        description:
            "If you have a company, it is also quite important that you educate your employees about phishing attacks. This way employees will be able to recognize a phishing mail and prevent confidential company data from leaking.\n Testing the awareness of your employees on this issue can be done by using phishing simulations, such as Infosec . This method can help your team recognize phishing mails and lets the admins know how at risk the company is from these attacks.",
    },
    {
        title: "Stay away from your spam folder",
        description:
            "Luckily for us, these days, most phishing mails are automatically put in our spam folder because of email filtering. You should only look into your spam folder when you have not received an expecting mail in your inbox. Otherwise, it is a best practice to ignore it.",
    },
];

const listItems = data.map((item, key) => (
    <div className="md:w-1/1 p-4" key={key}>
        <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <h2 className="text-lg dark:text-gray-100 text-gray-900 font-medium title-font mb-2">
                {item.title}
            </h2>
            <p className="leading-relaxed text-base dark:text-gray-200">
                {item.description}
            </p>
        </div>
    </div>
));

const PreventPhishingAttacks: React.FC = () => {
    return (
        <div className="mb-10">
            <h2 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Preventing phishing attacks
            </h2>
            <p className="mb-4 dark:text-white">
                Now that you know what phishing attacks are and the different
                types of it, we’re going to take a look at some ways to protect
                your sensitive data against these attacks.
            </p>
            <div className="flex flex-col md:flex-row">
                <RecognizePhishingAttacks />
                <img
                    src={TeachingIcon}
                    alt="teaching"
                    className="w-1/3 sm:ml-10 block mx-auto"
                />
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">{listItems}</div>
                </div>
            </section>
        </div>
    );
};

export default PreventPhishingAttacks;
