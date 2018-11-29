import React from 'react';
import logo from '../logo.png';
import './component.css'
const Header = ()=>{
    return(
        <div>
            <header className="AppHeader">
                <a className="AppHeader-logo">
                    <img src={logo} className="AppHeader-logo-img"/>

                </a>
                <nav className="AppHeader-nav">
                    <a className="AppHeader-navItem">Home</a>
                    <a className="AppHeader-navItem">Explore</a>
                    <a className="AppHeader-navItem">Topic</a>
                </nav>
                <div className="Search-container">
                        <input type="text" placeholder="Search" className="search" />
                        <button type="submit" className="Search-button">GO</button>
                    
                </div>
            </header>
            
        </div>
    );
};

export default Header;