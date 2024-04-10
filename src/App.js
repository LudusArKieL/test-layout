import React, { useState } from 'react';
//import axios from 'axios';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import Rightboard from './pages/RightBoard';
import Project from './pages/Project';
import Profile from './pages/Profile';
import About from './pages/About';
import { Route, Routes } from "react-router-dom";
import './Style/style.css';


function App() {
    const [openDashboard, setDashboard] = useState(true);
    const [openRightboard, setRightBoard] = useState(true);
    const [currentDay, setCurrentDay] = useState(new Date()); // State for current dayc

    const toggleDashboard = () => {
        setDashboard(!openDashboard);
    };

    const toggleRightboard = () => {
        setRightBoard(!openRightboard);
    };

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
    };

    return (
        <>
            <Navbar
                toggleDashboard={toggleDashboard}
                months={months}
                currentDay={currentDay}
                changeCurrentDay={changeCurrentDay}
            />
            <div className='container'>
                {/* Conditionally render the dashboard based on dashboardVisible state */}
                <section className={openDashboard ? "dashboard" : "dashboard active"} id="dashboard">
                    <Dashboard />
                </section>
                <main className="main" id="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
                <section className={openRightboard ? "rightboard" : "rightboard active"} id="rightboard">
                    <Rightboard toggleRightboard={toggleRightboard} />
                </section>
            </div>
        </>
    )
}


export default App;
