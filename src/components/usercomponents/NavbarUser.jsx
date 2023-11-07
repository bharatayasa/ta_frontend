import React from "react";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { navLinks } from "../../utils/navbarUser";

import BioData from "./BioData";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";

function NavbarComponent({logout}) {
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
        <div className="bg-transparent">
            <div className='navbar'>
                <nav className="bg-body-tertiary">
                    <Navbar expand="lg" className={changeColor ? "backdrop-blur-sm shadow-sm" : ""}>
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
                            <Nav className="">
                            <NavDropdown title="My Profile" className="text-center">
                                <div className="text-center">
                                    <Dropdown.Item>
                                        <BioData />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <EditProfile />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <ChangePassword />
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <button className='btn btn-outline-danger rounded-1 m-3' onClick={logout}>Logout</button>
                                    </Dropdown.Item>
                                </div>
                            </NavDropdown>
                            </Nav>
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
