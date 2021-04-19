import React from "react";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "../assets/img/home.svg";
import ActivityIcon from "../assets/img/activity.svg";

const Nav: React.FC = () => {
    return (
        <nav className="border-b border-gray p-5 flex flex-row mb-10 items-center">
            <h1 className="text-gray-700 text-2xl">Internationaal Project</h1>
            <ul className="ml-auto w-max flex flex-row">
                <NavItem route="/" title="Home" icon={HomeIcon} />
                <NavItem
                    route="/activity"
                    title="Activity"
                    icon={ActivityIcon}
                />
            </ul>
        </nav>
    );
};

interface INavItem {
    title: string;
    route: string;
    icon: string;
}

const NavItem: React.FC<INavItem> = ({ title, route, icon }) => {
    return (
        <li className="border border-gray-300 rounded-md px-5 py-2 ml-6">
            <Link to={route} className="flex flex-row items-center">
                <img src={icon} alt={title} className="h-4" />
                <p className="ml-6">{title}</p>
            </Link>
        </li>
    );
};

export default Nav;
