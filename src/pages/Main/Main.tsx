import React, { useState, useEffect } from 'react';
import './Main.css'; 

function Main() {
  const [showHero, setShowHero] = useState(true);
  const [language, setLanguage] = useState('ru'); // Initial language is Russian

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  // Function to toggle between Russian and English
  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <div className={`hero ${showHero ? '' : 'fade-out'}`}>
        <div className="hero-content">
          <img src="./img/logo.svg" alt="Main-Logo" />
        </div>
      </div>
      <div className={`content ${showHero ? 'content-faded' : ''}`}>
        <div className="left-side">
          <div className="centered-content">
            <img src="./img/main-img-1.jpg" alt="left-side-img" />
          </div>
          <div className="text-content">
            <p className='interior-text'>ИНТЕРЬЕРЫ ДЛЯ ЖИЗНИ В ЧЕРНОГОРИИ</p>
            <p className='interior-description'>Создаем внутренние пространства квартир и вилл. 
              Подбор и доставка мебели из Европы</p>
            <button className='calculate-btn'>Рассчитать стоимость</button>
          </div>
        </div>
        <div className="right-side">
          <img src="./img/main-img-2.jpg" alt="right-side-img" />
          <div className="language-switch" onClick={toggleLanguage}>
            <div className={language === 'ru' ? 'active' : ''}>RU</div>
            <div className={language === 'en' ? 'active' : ''}>EN</div>
          </div>
        </div>
      </div>
      <div className='about-us'>
        <p className='about-us-text'>Создаем внутренние</p>
        <p className='we-started-text'>МЫ НАЧИНАЛИ С МАЛЕНЬКОГО ОФИСА В БУДВЕ И КОМПЛЕКТАЦИИ НАБОРОМ ИТАЛЬЯНСКОЙ МЕБЕЛИ КВАРТИР ПО КАТАЛОГАМ</p>
      </div>
      <div className='aboust-us-second-part'>
      <div className='about-us-text-container'>
          <p><span className='about-us-heading'>О НАС</span></p>
          <p><span className='large-digit-in-about-section'>15</span>лет опыта</p>
          <p><span className='large-digit-in-about-section'>2</span>студии в Черногории и Москве</p>
          <p><span className='large-digit-in-about-section'>200</span>фабрик, с которыми мы сотрудничаем</p>
          <p><span className='large-digit-in-about-section'>300</span>дизайн-проектов</p>
          <p><span className='large-digit-in-about-section'>14</span>человек в команде</p>
        </div>

        <div className="about-image-section">
          <img src="./img/about-us-img.jpg" alt="about-us-img" />
          <p>Мы перекрываем все вопросы, относящиеся к недвижимости</p>
        </div>
      </div>
    </div>
  );
}

export default Main;






