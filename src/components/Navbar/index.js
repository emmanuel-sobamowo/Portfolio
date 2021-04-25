import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/Jayz" activeClassName="current">Jay-Z</NavLink>
            <NavLink to="/Jhene" activeClassName="current">Jhene</NavLink>
            <NavLink to="/Kanye" activeClassName="current">Kanye</NavLink>
            <NavLink to="/RodWave" activeClassName="current">Rod Wave</NavLink>
            <NavLink to="/Sza" activeClassName="current">Sza</NavLink>
            <NavLink to="/Artists" activeClassName="current">Artists</NavLink>
        </nav>
    )
}

export default NavBar;