import React from 'react';
import { NavLink } from 'react-router-dom';
import {BackButton} from '../index'



const NavBar = () => {
    return (
        <>
        
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about-section">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </div>
        </>
    )
}

export default NavBar;