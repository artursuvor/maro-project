import React, { useState, useEffect, useRef } from 'react';
import myCommercial from '../Portfolio/Commercial/Commercial.tsx';
import myApartment from '../Portfolio/Apartment/Apartment.tsx';
import myVilla from '../Portfolio/Villa/Villa.tsx';
import Supplier from '../Supliers.tsx';
import HousingDetails from '../HousingDetails.tsx';
import DropDownMenu from '../DropDownMenu/DropDownMenu.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.css'; 

function Main() {
  const [showHero, setShowHero] = useState(true);
  const [language, setLanguage] = useState('ru');
  const [menuStates, setMenuStates] = useState<boolean[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };

  const settingsSupplier = {
    infinite: true, 
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 500,
    arrows: false, 
  };
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
      <div className="grid-container">
        <div className="about-us-heading">О НАС</div>
        <div className="about-us-text-container">
          <div>
              <span className='large-digit-in-about-section'>15</span>
              <p>лет опыта</p>
          </div>
          <div>
            <span className='large-digit-in-about-section'>2</span>
            <p>студии в Черногории и Москве</p>
          </div>
          <div>
            <span className='large-digit-in-about-section'>200</span>
            <p>фабрик, с которыми мы сотрудничаем</p>
          </div>
        </div>
        <div className="about-us-text-container-scnd">
          <div>
            <span className='large-digit-in-about-section'>300</span>
            <p>дизайн-проектов</p>
          </div>
          <div>
            <span className='large-digit-in-about-section'>14</span>
            <p>человек в команде</p>
          </div>
        </div>  
        <div className="about-image-section">
          <img src="./img/about-us-img.jpg" alt="about-us-img" />
          <h5 className='cover-all-questions'>МЫ ПЕРЕКРЫВАЕМ ВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ</h5>
        </div>
      </div>
      <div className="portfolio-section">
        <p className='portfolio-heading'>ПОРТФОЛИО</p>
        <div className='rolling-gallery'>
          <Slider {...settings}>
            <HousingDetails type="apartment" data={[myApartment, myApartment]} />
            <HousingDetails type="villa" data={[myVilla, myVilla]} />
            <HousingDetails type="commercial" data={[myCommercial, myCommercial]} />
          </Slider>
        </div>
        <a href="/portfolio" className="button-container">
          <p className="watch-all-text">СМОТРЕТЬ ВСЕ</p>
          <img src="./img/Button_circle.png" alt="button_circle" className="button-image-portfolio" />
        </a>
      </div>
      <div className="services-section">
        <div className="services-header">
          <p>УСЛУГИ</p>
          <img src="./img/buttuon_up.png" alt="button_circle_up" onClick={scrollToTop}/>
        </div>
        <>
          <DropDownMenu
            title="01  ДИЗАЙН-ПРОЕКТИРОВАНИЕ"
            content={[
              "Встреча с клиентом. Получение исходной информации",
              "Предоставление клиенту информации об услугах и их ценах",
              "Заключение договора на дизайн-проект",
              "Работа над проектом",
              "Обсуждение промежуточных результатов с клиентами",
              "Составление сметы проекта с учетом подключенных подрядчиков",
              "Закрытие этапа Проектирование и переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.",
              "Сдача полностью готового объекта"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
          />
          <DropDownMenu
            title="02  РЕМОНТНО-СТРОИТЕЛЬНЫЕ РАБОТЫ"
            content={[
              "Встреча с клиентом. Получение исходной информации",
              "Предоставление клиенту информации об услугах и их ценах",
              "Заключение договора на дизайн-проект",
              "Работа над проектом",
              "Обсуждение промежуточных результатов с клиентами",
              "Составление сметы проекта с учетом подключенных подрядчиков",
              "Закрытие этапа Проектирование и переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.",
              "Сдача полностью готового объекта"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
          />
          <DropDownMenu
            title="03  ПОДБОР И ПОСТАВКА МЕБЕЛИ"
            content={[
              "Встреча с клиентом. Получение исходной информации",
              "Предоставление клиенту информации об услугах и их ценах",
              "Заключение договора на дизайн-проект",
              "Работа над проектом",
              "Обсуждение промежуточных результатов с клиентами",
              "Составление сметы проекта с учетом подключенных подрядчиков",
              "Закрытие этапа Проектирование и переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.",
              "Сдача полностью готового объекта"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
          />
        </>
      </div>
      <div className='selection-section'>
        <p className='selection-head'>ПОДБОР МЕБЕЛИ</p>
        <div className='selection-container'>
          <div className="selection-image">
            <img src="./img/furnuture-selection.png" alt="furnuture-selection" className="furnuture-selection" />
            <p className='selection-text'>МЫ ПЕРЕКРЫВАЕМ <br/> ВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ</p>
          </div>
          <p className='selection-text-after-image'>Подбор и доставка мебели из Европы. Подбор и доставка мебели из ЕвропыПодбор и доставка мебели из Европы</p>
          <div className='selection-right'>
            <img src="./img/furnuture-selection-scnd.png" alt="furnuture-selection-scnd" className="furnuture-selection-scnd" />
            <p>
              Составление сметы проекта с учетом подключенных подрядчиков. 
              Составление сметы проекта с учетом подключенных подрядчиков.
              Составление сметы проекта с учетом подключенных подрядчиков.
            </p>
          </div>
        </div>
        <div className='selection-suppliers'>
          <p className='selection-head'>НАШИ ПОСТАВЩИКИ</p>
          <Slider {...settingsSupplier}>
            <Supplier id={1} photoUrl="/img/supplier.png" />
            <Supplier id={2} photoUrl="/img/supplier.png" />
            <Supplier id={3} photoUrl="/img/supplier.png" />
            <Supplier id={4} photoUrl="/img/supplier.png" />
            <Supplier id={5} photoUrl="/img/supplier.png" />
            <Supplier id={6} photoUrl="/img/supplier.png" />
            <Supplier id={7} photoUrl="/img/supplier.png" />
            <Supplier id={8} photoUrl="/img/supplier.png" />
            <Supplier id={9} photoUrl="/img/supplier.png" />
            <Supplier id={10} photoUrl="/img/supplier.png" />
            <Supplier id={11} photoUrl="/img/supplier.png" />
          </Slider>
          <img src="./img/button-supp.png" alt="button-supp" className='button-supp' onClick={handleNext}/>
        </div>
      </div>
    </div>
  );
}

export default Main;






