import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <a href="#">Социальная ответственность</a>
        <a href="#">Гарантии</a>
        <a href="#">FAQ</a>
        <a href="#">Сотрудничество</a>
      </div>
      <img src="./img/logo.svg" alt="logo-on-footer-page" />
      <div className='footer-space-around-text'>
        <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
        <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
      </div>
      <span className='footer-developer-text'><p>РАЗРАБОТКА САЙТА: </p><a href="#">SOFTOCEAN</a></span>
    </footer>
  );
}

export default Footer;
