import React from "react";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "../assets/img/home";
import ActivityIcon from "../assets/img/activity";
import PhishingHeaderImg from "../assets/img/phishing-banner.jpg";

const Nav: React.FC = () => {
    return (
        <header className="bg-gray-900 header mb-10" >
            <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
                    >International Project</a>

                </div>

                <div className="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">

                    <ul className="ml-auto w-max flex flex-row">
                        <NavItem route="/" title="Home" icon={HomeIcon} />
                        <NavItem
                            route="/breaches"
                            title="Breaches"
                            icon={ActivityIcon}
                        />
                    </ul>

                </div>
            </nav>

            <section className="flex items-center justify-center" style={{height:650, backgroundImage: `url(${PhishingHeaderImg})`, backgroundPosition:`center`}}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Phishing, Don't get hooked</h2>
                    <p className="mt-6 text-xl font-medium tracking-wider text-gray-700">Educate yourself!</p>
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
        <li className="border border-gray-300 rounded-md px-5 py-2 ml-6 hover:border-blue-500">
            <Link to={route} className="flex flex-row items-center">
                <div className="h-4 w-4">{icon}</div>
                <p className="ml-6 dark:text-white">{title}</p>
            </Link>
        </li>
    );
};

export default Nav;
