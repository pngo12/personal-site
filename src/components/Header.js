import React from 'react';

const Header = () => {
    return (
        <header class="header">
            <div class="fw">
                <div class="logo">
                    <a href="#">Phillip Ngo</a>
                </div>
                <a href="#" class="menu-btn"><span></span></a>
                <div class="top-menu">
                    <ul>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#services-section">Skills</a></li>
                        <li><a href="#works-section">Projects</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                    <a href="#" class="close"></a>
                </div>
            </div>
        </header>
    );
}

export default Header;