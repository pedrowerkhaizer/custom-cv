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
                    <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => alert('Unfortunately, I still dont have this site translated. But, no worries. Im working on it =)')}>
                        <div className="flagContainer"><Br style={{ fontSize: 32 }} /></div>
                        <div className="flagContainer" style={{ opacity: 1 }}><Us style={{ fontSize: 32 }} /></div>
                        <div className="flagContainer"><Es style={{ fontSize: 32 }} /></div>
                    </div>
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