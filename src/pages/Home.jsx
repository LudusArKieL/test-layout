import { useState } from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling
import Calendar from "./calendarTable";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Home({ sidebarOpen }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for Home page */}
                <div className="contentContainer">
                    <div>
                        <button className="add_btn" onClick={toggleDropdown}>
                            <IoIosAddCircleOutline size={40} />
                            Create
                        </button>
                        {/* Dropdown content */}
                        {dropdownOpen && (
                            <div className="dropdown-container">
                                <button>Task</button>
                                <button>Event</button>
                                <button>Appointment</button>
                                <button>Goal</button>
                            </div>
                        )}
                    </div>
                    <h2>Calendar</h2>
                    <CalendarTable year={2024} month={2} /> {/* Displaying February 2024 */}
                </div >
            </div >
            {/* Main content */}
            < div className={`${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <div className="main-content ">
                    < h2 > Calendar</h2 >
                    <Calendar/>
                </div>
            </div >
        </div >
    );
}

function CalendarTable({ year, month }) {
    // Function to get the number of days in a month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Function to get the first day of the month
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Array of day names
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Calculate the number of days and the first day of the month
    const numDays = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Generate the table rows for the calendar
    const rows = [];
    let cells = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cells.push(<td key={j}></td>);
            } else if (day > numDays) {
                break;
            } else {
                cells.push(<td key={j}>{day}</td>);
                day++;
            }
        }
        rows.push(<tr key={i}>{cells}</tr>);
        cells = [];
        if (day > numDays) {
            break;
        }
    }
    return (
        <div>
            <h3>{monthNames[month]} {year}</h3>
            <table>
                <tr>
                    {dayNames.map(day => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}