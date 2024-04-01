import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function Profile({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for Profile page */}
                <div className="contentContainer">
                    <h1>Profile Content</h1>
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>Profile Page</h2>
            </div>
        </div>
    );
}