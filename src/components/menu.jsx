import React, { useState, useEffect } from 'react';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen(prevState => !prevState);
    };

    const handleResize = () => {
        setIsWideScreen(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isWideScreen) {
            setIsMenuOpen(true); // Show menu on wide screens
        } else {
            setIsMenuOpen(false); // Hide menu on narrow screens
        }
    }, [isWideScreen]);

    return (
        <header id="menu-header">
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </nav>
            <nav id="nav-icon" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </nav>
        </header>
    );
};

export default Menu;