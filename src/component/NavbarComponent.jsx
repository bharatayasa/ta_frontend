import React from "react";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navLinks } from "../utils";

function NavbarComponent({logout, name}) {
    const [changeColor, setChangeColor] = useState (false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        }else{
            setChangeColor(false)
        }
    }

    useEffect(() => {
        changeBackgroundColor()

        window.addEventListener('scroll', changeBackgroundColor)
    })

    return(
        <div>
            <div className='navbar'>
                <nav className="bg-body-tertiary">
                    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
                        <Container>
                        <Navbar.Brand className='fs-3 fw-bold'> Tomatify </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto text-center">
                                {navLinks.map((link) => {
                                return (
                                        <div key={link.id} className='nav-link'>
                                            <NavLink to={link.path} 
                                                className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""} end>
                                                {link.text}
                                            </NavLink>
                                        </div>
                                        )
                                })}
                            </Nav>
                            <div className='text-center'>
                                <button className='btn btn-outline-danger rounded-1' onClick={logout}>Logout</button>
                            </div>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </nav>
            </div>
        </div>
    )
}

NavbarComponent.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default NavbarComponent; 
