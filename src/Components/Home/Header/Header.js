import React from 'react';
import MainBody from '../MainBody/MainBody';
import Navigation from '../Navigation/Navigation';
import './Header.css'
const Header = () => {
    return (
        <div className="header w-100 "  >
            <Navigation></Navigation>
            <MainBody></MainBody>
        </div>
    );
};

export default Header;