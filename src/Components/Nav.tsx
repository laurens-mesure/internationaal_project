import React from "react";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "../assets/img/home";
import ActivityIcon from "../assets/img/activity";
import InboxIcon from "../assets/img/inbox";
import ClipIcon from "../assets/img/clipboard";

import PhishingHeaderImg from "../assets/img/phishing-banner.jpg";

const Nav: React.FC = () => {
    return (
        <header className="bg-gray-900 header mb-10">
            <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a
                        href="/"
                        className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-blue-400"
                    >
                        International Project
                    </a>
                </div>

                <div className="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <ul className="flex flex-col md:flex-row items-center justify-center">
                        <div className="flex flex-row">
                            <NavItem route="/" title="Home" icon={HomeIcon} />
                            <NavItem
                                route="/Quiz"
                                title="Quiz"
                                icon={ClipIcon}
                            />
                        </div>
                        <div className="flex flex-row">
                            <NavItem
                                route="/breaches"
                                title="Breaches"
                                icon={ActivityIcon}
                            />
                            <NavItem
                                route="/mailcheck"
                                title="Mail check"
                                icon={InboxIcon}
                            />
                        </div>
                    </ul>
                </div>
            </nav>

            <section
                className="flex items-center justify-center py-20 sm:py-32 md:py-40"
                style={{
                    backgroundImage: `url(${PhishingHeaderImg})`,
                    backgroundPosition: `center`,
                }}
            >
                <div className="text-center">
                    <h2 className="text-xl font-bold text-white md:text-6xl bg-gray-900 px-2 py-5 rounded-lg mx-3">
                        <b>Phishing...</b> Don't get hooked!
                    </h2>
                </div>
            </section>
        </header>
    );
};

interface INavItem {
    title: string;
    route: string;
    icon: JSX.Element;
}

const NavItem: React.FC<INavItem> = ({ title, route, icon }) => {
    return (
        <Link
            to={route}
            className="border border-gray-300 rounded-md px-3 py-2  hover:border-blue-500 mx-3 my-3"
        >
            <li className="flex flex-row items-center">
                <div className="h-4 w-4">{icon}</div>
                <p className="px-1 text-white">{title}</p>
            </li>
        </Link>
    );
};

export default Nav;
