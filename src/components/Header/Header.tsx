import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="Main-logo">
        <img src="./img/logo.svg" alt="Main-Logo" />
      </div>
      <div className="menu-controls">
        <span className="phone-number">
            <img src="./img/phone.svg" alt="phone" className='phone-icon' />
            <a href="tel:3826977200">382 69 772-002</a>
        </span>
        <button className="menu-button" onClick={toggleMenu}>
            <svg className="menu-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 9H27M5 16H16M5 23H27"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Портфолио</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Подбор мебели</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
