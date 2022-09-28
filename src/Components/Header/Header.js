import React from 'react';
import "./Header.css"
import logo from '../../logo.png';
const Header = () => {
    return (
        <header className='header-container mt-5'>
            <img src={logo} alt="logo" />
            <h2>Fitness Edge Club</h2>
        </header>
    );
};

export default Header;