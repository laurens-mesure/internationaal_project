import React from "react";

const data = [
    {
        title: "Crawling the internet for the @ sign",
        description:
            "Spammers and cybercriminals use robots and other sophisticated tools to scan every website on the internet to harvest email addresses.\n" +
            "If you publicly post your email address online on a website, a spammer will find it.\n",
    },
    {
        title: "Making good guesses",
        description:
            "cybercriminals use tools to generate common usernames and pair them with common domains such as Gmail, yahoo, etc. These tools are similar to the ones hackers used to crack passwords.",
    },
    {
        title: "Tricking your friends",
        description:
            "Even if you know better than to publicly post your email address on the web, it could still be stored in the email inbox of anyone who’s ever emailed you or whom you’ve ever emailed. Cybercriminals can steal contact lists or use social engineering to trick people into giving them access.",
    },
    {
        title: "Buying lists",
        description:
            "Spammers can purchase lists legally and illegally. When you sign up for a website or a service, make sure you read the privacy policy carefully to find out what the site plans to do with your email address.",
    },
];

const listItems = data.map((item, key) => (


    <div className="flex relative pb-10 sm:items-center md:w-1/1 mx-auto">

        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
                className="flex-shrink-0 w-20 h-20 text-indigo-400  inline-flex items-center justify-center">

                <svg enable-background="new 0 0 128 128" id="Слой_1" version="1.1" viewBox="0 0 128 128">
                    <g>
                        <g>
                            <path
                                d="M115.3,36.1L72.5,6.6c-5.1-3.5-11.9-3.5-17,0L12.7,36.1C7.2,39.8,4,46,4,52.6v3.7v9v43.5    c0,8.3,6.7,15,15,15h90c8.3,0,15-6.7,15-15V66.5V56.3v-3.7C124,46,120.8,39.8,115.3,36.1z"
                                fill="#61BDA7"/>
                        </g>
                        <g>
                            <path
                                d="M109,125H19c-9,0-16.2-7.3-16.2-16.2V52.6c0-7,3.4-13.5,9.2-17.5L54.8,5.6c2.7-1.9,5.9-2.9,9.2-2.9    s6.5,1,9.2,2.9L116,35.1c5.8,4,9.2,10.5,9.2,17.5v56.2C125.2,117.7,118,125,109,125z M64,5.2c-2.8,0-5.5,0.8-7.8,2.4L13.4,37.1    c-5.1,3.5-8.1,9.3-8.1,15.5v56.2c0,7.6,6.2,13.8,13.8,13.8h90c7.6,0,13.8-6.2,13.8-13.8V52.6c0-6.2-3-12-8.1-15.5L71.8,7.7    C69.5,6.1,66.8,5.2,64,5.2z"
                                fill="#502D4B"/>
                        </g>
                        <path
                            d="M118,98.4V38.3c-0.8-0.8-1.7-1.5-2.7-2.2L77.4,10H50.6L12.7,36.1c-1,0.7-1.9,1.4-2.7,2.2   v60.1c0,10.5,8.5,19,19,19h70C109.5,117.4,118,108.9,118,98.4z"
                            fill="#502D4B" opacity="0.2"/>
                        <g>
                            <path
                                d="M114,29v69.4c0,8.3-6.7,15-15,15H29c-8.3,0-15-6.7-15-15V29c0-8.3,6.7-15,15-15h70    C107.3,14,114,20.7,114,29z"
                                fill="#FFFFFF"/>
                        </g>
                        <path
                            d="M84.2,79.9l-10.3-6.3c-3-1.8-6.4-2.8-9.9-2.8s-6.9,1-9.9,2.8l-10.3,6.3L14,59.4v39   c0,8.3,6.7,15,15,15h70c8.3,0,15-6.7,15-15v-39L84.2,79.9z"
                            fill="#502D4B" opacity="0.2"/>
                        <g>
                            <path
                                d="M95.3,65.6H31.7c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h63.6c0.7,0,1.2,0.6,1.2,1.2S96,65.6,95.3,65.6z"
                                fill="#502D4B"/>
                        </g>
                        <g>
                            <path
                                d="M95.3,41.6H31.7c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h63.6c0.7,0,1.2,0.6,1.2,1.2S96,41.6,95.3,41.6z"
                                fill="#502D4B"/>
                        </g>
                        <g>
                            <path
                                d="M95.3,53.5H31.7c-0.7,0-1.2-0.6-1.2-1.2S31,51,31.7,51h63.6c0.7,0,1.2,0.6,1.2,1.2S96,53.5,95.3,53.5z"
                                fill="#502D4B"/>
                        </g>
                        <g>
                            <path
                                d="M99,114.7H29c-9,0-16.2-7.3-16.2-16.2V29c0-9,7.3-16.2,16.2-16.2h70c9,0,16.2,7.3,16.2,16.2v69.4    C115.2,107.4,108,114.7,99,114.7z M29,15.2c-7.6,0-13.8,6.2-13.8,13.8v69.4c0,7.6,6.2,13.8,13.8,13.8h70c7.6,0,13.8-6.2,13.8-13.8    V29c0-7.6-6.2-13.8-13.8-13.8H29z"
                                fill="#502D4B"/>
                        </g>
                        <g>
                            <path
                                d="M64,93.5c-4.9,0-9.6-1.5-13.6-4.2L4,57.4V109c0,8.3,6.7,15,15,15h90c8.3,0,15-6.7,15-15V57.4L77.6,89.3    C73.6,92.1,68.9,93.5,64,93.5z"
                                fill="#F9E373"/>
                        </g>
                        <g>
                            <path
                                d="M109,125.2H19c-9,0-16.2-7.3-16.2-16.2V57.4c0-0.5,0.3-0.9,0.7-1.1c0.4-0.2,0.9-0.2,1.3,0.1l46.4,31.9    c3.8,2.6,8.3,4,12.9,4s9.1-1.4,12.9-4l46.4-31.9c0.4-0.3,0.9-0.3,1.3-0.1c0.4,0.2,0.7,0.6,0.7,1.1V109    C125.2,118,118,125.2,109,125.2z M5.2,59.8V109c0,7.6,6.2,13.8,13.8,13.8h90c7.6,0,13.8-6.2,13.8-13.8V59.8L78.3,90.4    c-4.2,2.9-9.2,4.4-14.3,4.4s-10.1-1.5-14.3-4.4L5.2,59.8z"
                                fill="#502D4B"/>
                        </g>
                        <g>
                            <path
                                d="M19,124h90c8.3,0,15-6.7,15-15L71.8,77C67,74.1,61,74.1,56.2,77L4,109C4,117.3,10.7,124,19,124z"
                                fill="#F9E373"/>
                        </g>
                        <g>
                            <path
                                d="M109,125.2H19c-9,0-16.2-7.3-16.2-16.2c0-0.4,0.2-0.8,0.6-1.1l52.2-32c2.6-1.6,5.5-2.4,8.5-2.4    s5.9,0.8,8.5,2.4l52.2,32c0.4,0.2,0.6,0.6,0.6,1.1C125.2,118,118,125.2,109,125.2z M5.3,109.7c0.4,7.3,6.4,13.1,13.7,13.1h90    c7.4,0,13.4-5.8,13.7-13.1L71.2,78.1c-4.3-2.6-10-2.6-14.4,0L5.3,109.7z"
                                fill="#502D4B"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font dark:text-gray-100 text-gray-900 mb-1 text-xl">{item.title}</h2>
                <p className="leading-relaxed text-base dark:text-gray-400">{item.description}</p>
            </div>
        </div>
    </div>


));

const AcquireEmailAddresses: React.FC = () => {
    return (
        <div className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
            <h2 className="dark:text-gray-200 sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">
                How do spammers get my email address?
            </h2>
            <section className="body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    {listItems}
                </div>
            </section>
        </div>

    );
};

export default AcquireEmailAddresses;
