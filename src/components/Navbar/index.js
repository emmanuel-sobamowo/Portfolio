import React from 'react';
import { NavLink } from 'react-router-dom';
import {BackButton} from '../index'
import './app.css'



const NavBar = () => {
    return (
        <>
        <nav>
            <BackButton />
            <NavLink id="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            <NavLink id="nav-link" to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink id="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        </>
    )
}

export default NavBar;