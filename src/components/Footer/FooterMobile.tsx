import React from 'react';
import { useLanguage } from '../Language.tsx';
import './FooterMobile.css';

function FooterMobile() {
  const { language } = useLanguage();

  return (
    <footer className='footer-mobile'>
      <div className="footer-content-mobile">
        <a href="/social-responsibility">{language === 'ru' ? 'Социальная ответственность' : 'Social Responsibility'}</a>
        <a href="/guarantees">{language === 'ru' ? 'Гарантии' : 'Guarantees'}</a>
        <a href="/FAQ">FAQ</a>
        <a href="/cooperation">{language === 'ru' ? 'Сотрудничество' : 'Cooperation'}</a>
      </div>
      <img src="/img/logo.svg" alt="logo-on-footer-page" />
      <div className='footer-space-around-text-mobile'>
        <p>{language === 'ru' ? 'ВСЕ ПРАВА ЗАЩИЩЕНЫ' : 'ALL RIGHTS RESERVED'}</p>
        <p>{language === 'ru' ? 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ' : 'PRIVACY POLICY'}</p>
      </div>
      <span className='footer-developer-text-mobile'>
        <p>{language === 'ru' ? 'РАЗРАБОТКА САЙТА: ' : 'WEBSITE DEVELOPMENT BY: '}</p>
        <a href="#">SOFTOCEAN</a>
      </span>
    </footer>
  );
}

export default FooterMobile;
