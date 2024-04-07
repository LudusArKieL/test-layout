import React, { useState } from 'react';
//import axios from 'axios';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import Rightboard from './pages/RightBoard';
//import Project from './pages/Project';
//import Profile from './pages/Profile';
//import About from './pages/About';
import { Route, Routes } from "react-router-dom";
import './Style/style.css'; // Import CSS file for styling

function App() {
    const [openDashboard, setDashboard] = useState(true);
    const [openRightboard, setRightBoard] = useState(true);

    const toggleDashboard = () => {
        setDashboard(!openDashboard);
        const dashboard = document.getElementById("dashboard");
        if (dashboard) {
            dashboard.style.width = openDashboard ? "100%" : "0%";
            dashboard.style.visibility = openDashboard;
        }
        const mainContent = document.querySelector(".main");
        if (mainContent) {
            if(!openRightboard){
                mainContent.style.gridColumn = openDashboard ? "2 / 2" : "1 / 2 ";
            }
            else{
                mainContent.style.gridColumn = openDashboard ? "2 / 2" : "1 / 2 ";
            }
        }
    };


    const toggleRightboard = () => {
        setRightBoard(!openRightboard);
        const rightBoardElement = document.getElementById("rightboard");
        if (rightBoardElement) {
            rightBoardElement.style.width = openRightboard ? "100%" : "0%";
            rightBoardElement.style.visibility = openRightboard;
        }
        const arrow = document.querySelector(".arrow-btn");
        if (arrow) {
            arrow.style.transform = openRightboard ? "rotate(0deg)" : "rotate(180deg)";
            arrow.style.left = openRightboard ? "0px" : "15px";
        }
        const mainContent = document.querySelector(".main");
        if (mainContent) {
            if (!openDashboard) {
                mainContent.style.gridColumn = openRightboard ? "2 / 3 " : "2 / 3 span";
            }
            else {
                mainContent.style.gridColumn = openRightboard ? "1 / 2 " : " 1 / 3 span";
            }
        }
    };
    return (
        <>
            <Navbar toggleDashboard={toggleDashboard} /> {/* Pass toggleDashboard function */}
            <div className='container'>
                {/* Conditionally render the dashboard based on dashboardVisible state */}
                <section className='dashboard' id="dashboard">
                    <Dashboard />
                </section>
                <section className='main' id="main">
                    {/* Your main content */}
                </section>
                <section className='rightboard' id="rightboard">
                    <Rightboard toggleRightboard={toggleRightboard} />
                </section>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
