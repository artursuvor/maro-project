import React from 'react';
import { useLanguage } from '../Language.tsx';
import './Footer.css';

function Footer() {
  const { language } = useLanguage();

  return (
    <footer>
      <div className="footer-content">
        <a href="/social-responsibility">{language === 'ru' ? 'Социальная ответственность' : 'Social Responsibility'}</a>
        <a href="/guarantees">{language === 'ru' ? 'Гарантии' : 'Guarantees'}</a>
        <a href="/FAQ">FAQ</a>
        <a href="/cooperation">{language === 'ru' ? 'Сотрудничество' : 'Cooperation'}</a>
      </div>
      <img src="/img/logo.svg" alt="logo-on-footer-page" />
      <div className='footer-space-around-text'>
        <p>{language === 'ru' ? 'ВСЕ ПРАВА ЗАЩИЩЕНЫ' : 'ALL RIGHTS RESERVED'}</p>
        <p>{language === 'ru' ? 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ' : 'PRIVACY POLICY'}</p>
      </div>
      <span className='footer-developer-text'>
        <p>{language === 'ru' ? 'РАЗРАБОТКА САЙТА: ' : 'WEBSITE DEVELOPMENT BY: '}</p>
        <a href="https://www.softocean.com/" target="_blank" rel="noopener noreferrer">SOFTOCEAN</a>
      </span>
    </footer>
  );
}

export default Footer;
