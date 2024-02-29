import React from 'react';
import "../styles/header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"> <span className='xyz'>XYZ
        </span> <span className='ind'>
        INDUSTRIES
            </span></div>
      <nav>
        <ul className="header__nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Property </li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="header__auth">
        <button className="header__signup-button"> Sign Up</button>
        <button className="header__signin-button"> Sign In </button>
      </div>
    </header>
  );
};

export default Header;