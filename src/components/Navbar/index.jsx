import React, { useState } from 'react';
import '../../App.css';

import { Us, Br, Es } from 'react-flags-select';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavContainer } from './navbarElements';


const Navbar = () => {
    return (
        <NavContainer>
            <Nav>
                <div>
                    <h3 style={{ letterSpacing: 0.5, textColor: '#fafafa', fontSize: 22, marginBottom: 4, padding: 0 }}>Pedro Werkhaizer</h3>
                    <Us style={{ fontSize: 32, marginRight: 8, opacity: 0.4 }} />
                    <Br style={{ fontSize: 32, marginRight: 8 }} />
                    <Es style={{ fontSize: 32, marginRight: 0, opacity: 0.4 }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact me</NavLink>
                </div>
            </Nav>

        </NavContainer>
    )
}

export default Navbar;