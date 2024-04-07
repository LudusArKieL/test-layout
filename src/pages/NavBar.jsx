import { Link, useMatch, useResolvedPath } from "react-router-dom"; // Import necessary modules
import { IoIosMenu } from "react-icons/io"; // Import the IoIosMenu icon
import '../Style/navStyle.css'; // Import the CSS file for styling

// Define the Navbar component and destructure the toggleSidebar prop
export default function Navbar({toggleDashboard}) { // Receive toggleDashboard prop
    return (
        // Navbar container
        <nav className="nav">
            {/* Button to toggle the sidebar */}
            <button className="menu-btn" onClick={toggleDashboard}> {/* Call toggleDashboard function */}
                <IoIosMenu size={34} />
            </button>
            {/* Link to the home page */}
            <Link to="/" className="site-title">
                TimeMaster
            </Link>
            {/* List of navigation links */}
            <ul>
                {/* Navigation link for the "Project" page */}
                <CustomLink to="/project"> Project </CustomLink>
                {/* Navigation link for the "Profile" page */}
                <CustomLink to="/profile"> Profile </CustomLink>
                {/* Navigation link for the "About" page */}
                <CustomLink to="/about"> About </CustomLink>
            </ul>
        </nav>
    )
}

// CustomLink component for creating navigation links
function CustomLink({ to, children, ...props }) {
    const resovledPath = useResolvedPath(to); // Resolve the path for the current link
    const isActive = useMatch({ path: resovledPath.pathname, end: true }); // Check if the current link is active
    return (
        // List item representing the navigation link
        <li className={isActive ? "active" : "none"}>
            {/* Link to the specified destination with children as its content */}
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
