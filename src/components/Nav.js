import React from 'react';
import logo from '../images/logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <a href='/' className='logo'>
                <img src={logo} alt="Little Lemon Logo" />
            </a>

            {/* hamburger menu icon*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div> 
            </div>

            {/* navigation links*/}
            <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">SERVICES</a></li>
                <li><a href="/">MENU</a></li>
                <li><a href="/">RESERVATIONS</a></li>
                <li><a href="/">ORDER ONLINE</a></li>
                <li><a href="/">LOGIN</a></li>
            </ul>
        </nav>
    );
};

export default Nav;

