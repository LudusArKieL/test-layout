import { useMatch, useResolvedPath } from "react-router-dom";
import { CustomLink } from '../script/link.js'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineFundProjectionScreen, AiOutlineCalendar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../Style/navStyle.css';

export default function Navbar({ toggleDashboard, months, currentDay, changeCurrentDay }) {
    const resovledPath = useResolvedPath("./");
    const itscalendar = useMatch({ path: resovledPath.pathname, end: true });

    return (
        <nav className="nav">
            <button className="menu-btn">
                <IoIosMenu className="" size={34} onClick={toggleDashboard} />
            </button>
            <div className="site-title">
                <span><img src="" alt="" />logo</span>
                <h1><span>Time</span>Master</h1>
            </div>

            {/* Conditionally render the month div based on itscalendar state */}
            {itscalendar && (
                <div className="month">
                    <AiOutlineArrowLeft />
                    <div className="calendar-header">
                        <h3>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h3>
                    </div>
                    <AiOutlineArrowRight />
                    <div className="dropdown">
                        <DropdownButton id="dropdown" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Daily</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Yearly</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            )}
            <ul>
                <div className="radio-container">
                    <CustomLink to="/">
                        <label>
                            <AiOutlineCalendar className="radiobutton" />
                        </label>
                    </CustomLink>
                    <CustomLink to="/project" >
                        <label>
                            <AiOutlineFundProjectionScreen className="radiobutton" />
                        </label>
                    </CustomLink>
                </div>
                <CustomLink to="/profile">
                    <CgProfile className="profile-icon" size={32}/>
                    Profile
                </CustomLink>
            </ul>
        </nav>
    )
}
