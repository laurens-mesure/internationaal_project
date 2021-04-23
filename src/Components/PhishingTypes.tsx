import React from "react";

// Icons
import TypeIcon from "../assets/img/types.svg";

const data = [
    {
        name: "Spear phishing",
        description:
            "Another type of phishing attack is spear phishing. With this attack, the scammer will also try to trick a person into giving away sensitive data via email like with email phishing. The big difference between the two however is that with spear phishing, the scammer will send a personal mail to only one person, instead of a generic one to thousands.",
    },
    {
        name: "Whaling",
        description:
            "Whaling attacks are very similar to spear phishing attacks in the sense that only one person receives a mail from the scammer. There is a difference however, which is that whaling attacks often target senior executives. Generic phishing mails with fake links would probably not work in this instance and thus scammers will often resort to using fake tax returns.",
    },

    {
        name: "Vishing",
        description:
            "Vishing is a phishing attack where the scammer tries to trick the receiver of the attack with a telephone conversation. The attacker would first tell the victim that an account of theirs has been attacked and then try to ask for card details to “verify” the identity or ask the victim to transfer money to a secure account.",
    },
    {
        name: "Angler phishing",
        description:
            "Angler phishing is a relatively new form of phishing attack  where scammers try to trick people into giving data on popular social media sites such as facebook, twitter or Instagram. The criminals would usually present themselves as the PR account of an organization and respond to questions or complaints of a customer.",
    },
    {
        name: "Malvertising",
        description:
            " Phishing attacks like these try to make a victim click on advertisements or pop-ups which then installs malware. Malware is software designed to cause intentional harm to a computer.",
    },
    {
        name: "Email phishing",
        description:
            "The vast majority of phishing attacks happen through mail. The scammer creates a fake domain which is based on an actual organization and then would send to thousands of email addresses the same mail.",
    },
    {
        name: "Man-In-The-Middle",
        description:
            "In this type of phishing attack, the criminal would send mails to two persons and make them believe they are emailing each other. The scammer would then request them to share valuable info such as confidential company information, not knowing they are sending that info to a malicious person.",
    },
    {
        name: "Smishing",
        description:
            "Smishing is a phishing attack where the scammer sends text messages instead of mails to trick the receivers.",
    },
    {
        name: "Search engine phishing",
        description:
            "Search engine phishing is also a relatively new form of phishing attack. This type of attack is probably the most distinct phishing attack. Instead of the scammer trying to send something to a victim, he or she would create a site and try to get it indexed by search engines.A victim would then be able to see this site as a result from his Google search.\n The victim would then access the site if interested and give sensitive data such as card details, not knowing the site is made for mischievous interests",
    },
];

const listItems = data.map((d, key) => (
    <div className="md:w-1/1 p-4" key={key}>
        <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                &#127907;
            </div>
            <h2 className="text-lg dark:text-gray-100 text-gray-900 font-medium title-font mb-2">
                {d.name}
            </h2>
            <p className="leading-relaxed text-base dark:text-gray-200">
                {d.description}
            </p>
        </div>
    </div>
));

const PhishingTypes: React.FC = () => {
    return (
        <React.Fragment>
            <div className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
                <div className="flex flex-col items-center sm:items-start md:flex-row justify-between mb-6">
                    <img src={TypeIcon} alt="types" className="w-1/3 mr-10" />
                    <div className="w-2/3">
                        <h2 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Types of phishing
                        </h2>
                        <p className="dark:text-white">
                            There are a lot of phishing attacks which we can
                            split up into various types.
                        </p>
                    </div>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">{listItems}</div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default PhishingTypes;
