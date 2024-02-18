import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setSticky(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <a href="/#about">О нас</a>
            </li>
            <li>
              <a href="/#portfolio">Портфолио</a>
            </li>
            <li>
              <a href="/#services">Услуги</a>
            </li>
            <li>
              <a href="/#selection">Подбор мебели</a>
            </li>
            <li>
              <a href="/#contacts">Контакты</a>
            </li>
          </ul>
          <div className="additional-content">
            <a href="/social-responsibility">Социальная ответственность</a>
            <a href="/guarantees">Гарантии</a>
            <a href="/FAQ">FAQ</a>
            <a href="/cooperation">Сотрудничество</a>
          </div>
        </div>
      )}

      <div className={isSticky ? 'sticky-header' : 'header'}>
        <a href="/">
          <div className="main-logo">
            <img src="/img/logo.svg" alt="logo-on-main-page" />
          </div>
        </a>
        <div className={isSticky ? "sticky-menu-controls" : "menu-controls"}>
          <span className={isSticky ? "sticky-phone-number" : "phone-number"}>
            <img src= {isSticky ? "/img/black-phone.svg" : "/img/phone.svg" }alt="phone" className='phone-icon' />
            <a href="tel:3826977200">382 69 772-002</a>
          </span>
          <button className={isSticky ? "sticky-menu-button" : 'menu-button' } onClick={toggleMenu}>
            <svg className="menu-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 9H27M5 16H16M5 23H27"
                stroke={isSticky ? "black" : "#FFFFFF"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
