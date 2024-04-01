import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './NavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import Profile from './pages/Profile';
import About from './pages/About';
import {Route, Routes} from "react-router-dom"

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
        {/* Render the Navbar component and pass toggleSidebar function as prop */}
            <Navbar toggleSidebar={toggleSidebar} />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
                    <Route path="/project" element={<Project sidebarOpen={sidebarOpen}/>} />
                    <Route path="/profile" element={<Profile sidebarOpen={sidebarOpen}/>} />
                    <Route path="/about" element={<About sidebarOpen={sidebarOpen}/>} />
                </Routes>
            </div>
        </>
    )


  //const apicall = () => {
  //axios.get('http://localhost:5000').then(() => {
  //console.log("test!.")
  //})
  //}
  //return (
  //<div className="App">
  //<header className="App-header">
  //<button onClick={apicall}> click me </button>
  //</header>
  //</div>
  //);
}

export default App;
