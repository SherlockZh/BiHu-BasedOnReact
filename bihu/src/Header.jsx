import React from 'react';
import logo from './images/bihulogo.jpg';
import './Header.css'
const Header = ({executeLogout}) => {
  return(
  <div>
    <header className="AppHeader">
      <a href="null" className="AppHeader-logo">
        <img src={logo} className="AppHeader-logo-img" alt="logo"/>  
      </a>
      <nav className="AppHeader-nav">
        <a href="null" className="AppHeader-navItem">Home</a>
        <a href="null" className="AppHeader-navItem">Explore</a>
        <a href="null" className="AppHeader-navItem">Topic</a>
      </nav>
      <div className="Search-container">
				<input 
					type="text" 
					placeholder="Search or Create a Question" 
					className="search" 
				/>
        <button type="submit" className="Search-button">GO</button>
      </div>
      <button className="logout-button" onClick={executeLogout}>Logout</button>

    </header>
  </div>
  );
};

export default Header;