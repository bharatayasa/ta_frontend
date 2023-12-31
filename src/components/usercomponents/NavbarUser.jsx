import React, { useState, useEffect } from 'react';
import hamburgerActive from '../../assets/img/navbar/hamburger-active.svg';
import hamburgerNonActive from '../../assets/img/navbar/hamburger-non-active.svg';
import { navLinks } from '../../utils/navbarUser.js';
import { NavLink } from "react-router-dom";

function NavbarUser({ logout }) {
    const [toggleNavBar, setToggleNavBar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleNav = () => setToggleNavBar(!toggleNavBar);
    const hamburgerIcon = toggleNavBar ? hamburgerActive : hamburgerNonActive;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <div className='navbar'>
            <nav className={`backdrop-blur-sm font-medium ${scrolled ? 'shadow-md bg-white/5' : ''} fixed w-full top-0 z-50`}>
                <div className="container flex justify-between items-center mx-auto px-4 md:py-3 sm:py-3 lg:py-4 py-6 sm:px-16">
                    <div className='order-1 sm:order-2 lg:order-1'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-sky-900'>Tomatify</h1>
                    </div>
                    <div className='cursor-pointer order-2 sm:order-1 lg:hidden' onClick={toggleNav}>
                        <img src={hamburgerIcon} alt='toggle'/>
                    </div>
                    <div className='hidden lg:block lg:order-2'>
                        <ul className='cursor-pointer flex items-center gap-4 font-semibold'>
                            {navLinks.map((link) => (
                                <div key={link.id} className='nav-link'>
                                    <NavLink to={link.path}
                                        className={({ isActive, isExact, isPending }) =>
                                            isPending ? "pending" : (isActive || isExact) ? "active" : ""} end>
                                        {link.text}
                                    </NavLink>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className='hidden sm:block md:block order-3'>
                        <div className='flex justify-between'>
                            <button className="text-lg text-white bg-pink-600 px-2 py-2 rounded-md hover:shadow-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md lg:mr-2 sm:mr-0 sm:mb-2 lg:mb-0" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>

                <div className={`${toggleNavBar ? 'block' : 'hidden'} lg:hidden`}>
                    <ul className='cursor-pointer text-lg text-black flex-col gap-2'>
                        {navLinks.map((link) => (
                            <div key={link.id} className='nav-link text-center font-semibold mb-5 text-xl'>
                                <NavLink to={link.path}
                                    className={({ isActive, isExact, isPending }) =>
                                        isPending ? "pending" : (isActive || isExact) ? "active" : ""} end>
                                    {link.text}
                                </NavLink>
                            </div>
                        ))}
                    </ul>
                    <div className='sm:hidden order-3 text-center'>
                        <div className='mb-3 flex justify-center items-center'>
                            <button className='text-l text-white bg-pink-600 px-3 py-2 rounded-md hover:shadow-xl hover:bg-pink-700 transition duration-300 ease-in-out shadow-md' onClick={logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default NavbarUser;
