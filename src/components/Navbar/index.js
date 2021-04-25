import React from 'react';
import { NavLink } from 'react-router-dom';
import {BackButton} from '../index'



const NavBar = () => {
    return (
        <nav>
            <BackButton />
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="https://github.com/emmanuel-sobamowo" activeClassName="current">GitHub</NavLink>
            <NavLink to="https://www.linkedin.com/in/emmanuel-sobamowo-7683b1156/" activeClassName="current">LinkedIn</NavLink>

        </nav>
    )
}

export default NavBar;