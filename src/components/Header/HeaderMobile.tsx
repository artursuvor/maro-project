import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../Language.tsx';
import './HeaderMobile.css';

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { language, toggleLanguage } = useLanguage();
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

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setButtonClicked(!buttonClicked);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div>
      {menuOpen && (
        <div className="menu-mobile">
          <div className='menu-mobile-container'>
            <li>
              <span className="phone-number-mobile">
                <img src= "/img/black-phone.svg" alt="phone" className='phone-icon-mobile' />
                <a href="tel:3826977200">382 69 772-002</a>
              </span>
            </li>
            <li>
              <a href="/#about" onClick={toggleMenu}>{language === 'ru' ? 'О нас' : 'About us'}</a>
            </li>
            <li>
              <a href="/portfolio">{language === 'ru' ? 'Портфолио' : 'Portfolio'}</a>
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
            <div className="language-switch-mobile" onClick={handleLanguageToggle}>
              <div className={language === 'ru' ? 'active' : ''}>{language === 'ru' ? 'RU' : 'EN'}</div>
            </div>
          </div>
          <div className="additional-content-mobile">
            <a href="/social-responsibility">{language === 'ru' ? 'Социальная ответственность' : 'Social Responsibility'}</a>
            <a href="/guarantees">{language === 'ru' ? 'Гарантии' : 'Guarantees'}</a>
            <a href="/FAQ">FAQ</a>
            <a href="/cooperation">{language === 'ru' ? 'Сотрудничество' : 'Cooperation'}</a>
          </div>
        </div>
      )}

      <div className={isHomePage ? 'header-mobile' : (isSticky ? 'sticky-header-mobile' : 'header-not-main-mobile')}>
        <a href="/">
          <div className="main-logo-mobile">
          
            <img src={isHomePage ? (menuOpen ? '/img/logo.svg' : '/img/logo-white.png') : "/img/logo.svg"} alt="logo-on-main-page-mobile" className='main-logo-mobile'/>
          </div>
        </a>
        <div className={isSticky ? "sticky-menu-controls-mobile" : "menu-controls-mobile"}>
        <button 
          className={buttonClicked ? "menu-button-mobile-clicked" : (isHomePage ? 'menu-button-mobile' : 'menu-button-mobile-not')} 
          onClick={toggleMenu}
        >
            {buttonClicked ? (
              <img 
                src="/img/x-mark-black.png"
                alt="menu-icon" 
                className="x-mark-black-mobile" 
              />
            ) : (
              <svg className="menu-icon-mobile" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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

export default HeaderMobile;
