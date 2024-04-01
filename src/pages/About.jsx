import React from "react";
import "../Style/sidebar.css"; // Import your CSS file for styling

export default function About({ sidebarOpen }) {
    return (
        <div className="container">
            {/* Sidebar */}
            <div className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
                {/* Sidebar content for About page */}
                <div className="contentContainer">
                    <h1>About Content</h1>
                </div>
            </div>
            {/* Main content */}
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Add your main content here */}
                <h2>About Page</h2>
            </div>
        </div>
    );
}