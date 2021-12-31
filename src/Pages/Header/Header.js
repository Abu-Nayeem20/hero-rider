import React from 'react';
import './Header.css';
import logo from '../../images/hero-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/home"><img src={logo} alt="" /></Link>
        </div>
    );
};

export default Header;