import React from "react";

const data = [
    {
        name: "Email phishing",
        description:
            "The vast majority of phishing attacks happen through mail. The scammer creates a fake domain which is based on an actual organization and then would send to thousands of email addresses the same mail.",
    },
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
        name: "Smishing",
        description:
            "Smishing is a phishing attack where the scammer sends text messages instead of mails to trick the receivers.",
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
        name: "Search engine phishing",
        description:
            "Search engine phishing is also a relatively new form of phishing attack. This type of attack is probably the most distinct phishing attack. Instead of the scammer trying to send something to a victim, he or she would create a site and try to get it indexed by search engines.A victim would then be able to see this site as a result from his Google search.\n The victim would then access the site if interested and give sensitive data such as card details, not knowing the site is made for mischievous interests",
    },
    {
        name: "Man-In-The-Middle",
        description:
            "In this type of phishing attack, the criminal would send mails to two persons and make them believe they are emailing each other. The scammer would then request them to share valuable info such as confidential company information, not knowing they are sending that info to a malicious person.",
    },
    {
        name: "Malvertising",
        description:
            " Phishing attacks like these try to make a victim click on advertisements or pop-ups which then installs malware. Malware is software designed to cause intentional harm to a computer.",
    },
];

const listItems = data.map((d) => (
    <div
        key={d.name}
        className="border-b border-gray-200  dark:text-white mb-8"
    >
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
            {d.name}
        </p>
        <p className="mb-4">{d.description}</p>
    </div>
));

const PhishingTypes: React.FC = () => {
    return (
        <React.Fragment>
            <div className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
                <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Types of phishing
                </h2>
                <p className="text-center mb-4 dark:text-white">
                    There are a lot of phishing attacks which we can split up
                    into various types.
                </p>
                <div>{listItems}</div>
            </div>
        </React.Fragment>
    );
};

export default PhishingTypes;
