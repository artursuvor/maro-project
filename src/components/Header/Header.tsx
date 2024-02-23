import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../Language.tsx';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

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
    setButtonClicked(!buttonClicked);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <a href="/#about" onClick={toggleMenu}>{language === 'ru' ? 'О нас' : 'About us'}</a>
            </li>
            <li>
              <a href="/portfolio" onClick={toggleMenu}>{language === 'ru' ? 'Портфолио' : 'Portfolio'}</a>
            </li>
            <li>
              <a href="/#services" onClick={toggleMenu}>{language === 'ru' ? 'Услуги' : 'Services'}</a>
            </li>
            <li>
              <a href="/#selection" onClick={toggleMenu}>{language === 'ru' ? 'Подбор мебели' : 'Furniture selection'}</a>
            </li>
            <li>
              <a href="/#contacts" onClick={toggleMenu}>{language === 'ru' ? 'Контакты' : 'Contacts'}</a>
            </li>
          </ul>
          <div className="additional-content">
            <a href="/social-responsibility">{language === 'ru' ? 'Социальная ответственность' : 'Social Responsibility'}</a>
            <a href="/guarantees">{language === 'ru' ? 'Гарантии' : 'Guarantees'}</a>
            <a href="/FAQ">FAQ</a>
            <a href="/cooperation">{language === 'ru' ? 'Сотрудничество' : 'Cooperation'}</a>
          </div>
        </div>
      )}

      <div className={isHomePage ? 'header' : (isSticky ? 'sticky-header' : 'header-not-main')}>
        <a href="/">
          <div className="main-logo">
            <img src="/img/logo.svg" alt="logo-on-main-page" />
          </div>
        </a>
        <div className="menu-controls">
          <span className={isHomePage ? "phone-number" : "sticky-phone-number"}>
            <img 
              src={isHomePage ? "/img/phone.svg" : "/img/black-phone.svg" } 
              alt="phone" 
              className='phone-icon' 
            />
            <a href="tel:3826977200">382 69 772-002</a>
          </span>
          <button className={isHomePage ? "menu-button" : 'sticky-menu-button' } onClick={toggleMenu}>
            {buttonClicked ? (
              <img 
                src={isHomePage ? "/img/x-mark.png" : "/img/x-mark-black.png"} 
                alt="menu-icon" 
                className={isSticky ? "x-mark-black" : "x-mark" } 
              />
            ) : (
              <svg className="menu-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 9H27M5 16H16M5 23H27"
                  stroke={isHomePage ? '#FFFFFF' : (isSticky ? 'black' : 'black')}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
