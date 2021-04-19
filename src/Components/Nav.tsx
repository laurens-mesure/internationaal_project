import React from "react";

// Icons
import HomeIcon from "../assets/img/home.svg";
import ActivityIcon from "../assets/img/activity.svg";

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={HomeIcon} alt="Home" />
                    <p>Home</p>
                </li>
                <li>
                    <img src={ActivityIcon} alt="Activity" />
                    <p>Activity</p>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
