import React from 'react';
import { NavLink } from 'react-router-dom';
import {BackButton} from '../index'



const NavBar = () => {
    return (
        <>
        <nav>
            <BackButton />
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        </>
    )
}

export default NavBar;