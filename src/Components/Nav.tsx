import React from "react";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "../assets/img/home";
import ActivityIcon from "../assets/img/activity";
import InboxIcon from "../assets/img/inbox";

const Nav: React.FC = () => {
    return (
        <nav className="border-b border-gray p-5 flex flex-row mb-4 items-center">
            <h1 className="text-gray-700 text-2xl dark:text-white">
                Internationaal Project
            </h1>
            <ul className="ml-auto w-max flex flex-row">
                <NavItem route="/" title="Home" icon={HomeIcon} />
                <NavItem
                    route="/breaches"
                    title="Breaches"
                    icon={ActivityIcon}
                />
                <NavItem
                    route="/mailcheck"
                    title="Mail checker"
                    icon={InboxIcon}
                />
            </ul>
        </nav>
    );
};

interface INavItem {
    title: string;
    route: string;
    icon: JSX.Element;
}

const NavItem: React.FC<INavItem> = ({ title, route, icon }) => {
    return (
        <li className="border border-gray-300 rounded-md px-5 py-2 ml-6">
            <Link to={route} className="flex flex-row items-center">
                <div className="h-4 w-4">{icon}</div>
                <p className="ml-6 dark:text-white">{title}</p>
            </Link>
        </li>
    );
};

export default Nav;
