import React, { useState, useEffect, useRef } from 'react';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import Supplier from '../Suppliers.tsx';
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
  const [activeStudio, setActiveStudio] = useState<'budva' | 'moscow'>('budva');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 500) {
      setMessage(inputValue);
    }
  };

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handleStudioToggle = (studio: 'budva' | 'moscow') => {
    setActiveStudio(studio);
  };

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
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
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
      <div className='about-us' id="about">
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
      <div className="portfolio-section" id='portfolio'>
        <p className='portfolio-heading'>ПОРТФОЛИО</p>
        <div className='rolling-gallery'>
          <Slider {...settings}>
            <HousingDetails type="apartment" data={apartmentData} />
            <HousingDetails type="villa" data={villaData} />
            <HousingDetails type="commercial" data={commercialData} />
          </Slider>
        </div>
        <a href="/portfolio" className="button-container">
          <p className="watch-all-text">СМОТРЕТЬ ВСЕ</p>
          <img src="./img/Button_circle.png" alt="button_circle" className="button-image-portfolio" />
        </a>
      </div>
      <div className="services-section" id='services'>
        <div className="services-header">
          <p>УСЛУГИ</p>
          <img src="./img/buttuon_up.png" alt="button_circle_up" onClick={scrollToTop} className='sevices-button-up'/>
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
            price={`От 500 €/М²`}
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
            price={`От 500 €/М²`}
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
            price={`От 500 €/М²`}
          />
        </>
      </div>
      <div className='selection-section' id='selection'>
        <p className='selection-head'>ПОДБОР МЕБЕЛИ</p>
        <div className='selection-container'>
          <div className="selection-image">
            <img src="./img/furnuture-selection.png" alt="furnuture-selection" className="furnuture-selection-image" />
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
          <Slider {...settingsSupplier} ref={sliderRef}>
            <Supplier id={1} photoUrl="/img/supplier.png" />
            <Supplier id={2} photoUrl="/img/supplier1.png" />
            <Supplier id={3} photoUrl="/img/supplier2.png" />
            <Supplier id={4} photoUrl="/img/supplier3.png" />
            <Supplier id={5} photoUrl="/img/supplier4.png" />
            <Supplier id={6} photoUrl="/img/supplier5.png" />
            <Supplier id={7} photoUrl="/img/supplier6.png" />
            <Supplier id={8} photoUrl="/img/supplier7.png" />
            <Supplier id={9} photoUrl="/img/supplier.png" />
            <Supplier id={10} photoUrl="/img/supplier.png" />
            <Supplier id={11} photoUrl="/img/supplier.png" />
          </Slider>
          <img src="./img/button-supp.png" alt="button-supp" className='button-supp' onClick={handleNext}/>
        </div>
      </div>
      <div className='contacts-section' id='contacts'>
        <p className='contacts-head'>КОНТАКТЫ</p>
        <div className='studio-toggle-container'>
          <div className='studio-toggle'>
            <button
              className={activeStudio === 'budva' ? 'active' : ''}
              onClick={() => handleStudioToggle('budva')}
            >
              Студия в Будве
            </button>
            <button
              className={activeStudio === 'moscow' ? 'active' : ''}
              onClick={() => handleStudioToggle('moscow')}
            >
              Студия в Москве
            </button>
          </div>
          <div className='logo-container'>
            <img src="./img/logo-contacts.png" alt="logo-contacts" className='logo-contacts'/>
          </div>
        </div>
        {activeStudio === 'budva' && (
          <div className='contacts-budva'>
            <div className='first-string'>
              <div>
                <img src="./img/skype-contacts.png" alt="skype-contacts" className='img-contacts-svg'/>
                <p>maro-budva</p>
              </div>
              <div>
                <img src="./img/phone-contacts.png" alt="phone-contacts" className='img-contacts-svg'/>
                <p>382 69 772-002</p>
              </div>
              <div>
                <img src="./img/house-contacts.png" alt="house-contacts" className='img-contacts-svg'/>
                <p>85310, Черногория, Будва, район «Яз»</p>
              </div>
            </div>
            <div className='second-string'>
              <div>
                <img src="./img/clock-contacts.png" alt="clock-contacts" className='img-contacts-svg'/>
                <p>ПН-СБ: 10.00-19.00</p>
              </div>
              <div>
                <img src="./img/mail-contacts.png" alt="mail-contacts" className='img-contacts-svg'/>
                <p>info@maro-mebel.ru</p>
              </div>
            </div>
            <div className='map-container'>
              <iframe
                title="Yandex Map"
                src="https://yandex.ru/maps/org/salon_maro/136805901235/?ll=37.568071%2C55.789197&mode=search&sctx=ZAAAAAgBEAAaKAoSCd9vtOOGs05AEUDdQIF3lEtAEhIJ4nMn2H8d5z8ReIAnLVxWzT8iBgABAgMEBSgKOABAmJIHSABqAnJ1nQHNzEw9oAEAqAEAvQH1CI%2B0wgEGs8eR0v0D6gEA8gEA%2BAEAggIKc2Fsb24gbWFyb4oCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.568071%2C55.789197&sspn=0.006133%2C0.001915&text=salonmaro&z=17.88"
                width="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {activeStudio === 'moscow' && (
        <div className='contacts-moscow'>
          <div className='first-string'>
            <div>
              <img src="./img/skype-contacts.png" alt="skype-contacts" className='img-contacts-svg'/>
              <p>maro-budva</p>
            </div>
            <div>
              <img src="./img/phone-contacts.png" alt="phone-contacts" className='img-contacts-svg'/>
              <p>382 69 772-002</p>
            </div>
            <div>
              <img src="./img/house-contacts.png" alt="house-contacts" className='img-contacts-svg'/>
              <p>85310, Россия, Москва, район «Яз»</p>
            </div>
          </div>
          <div className='second-string'>
            <div>
              <img src="./img/clock-contacts.png" alt="clock-contacts" className='img-contacts-svg'/>
              <p>ПН-СБ: 10.00-19.00</p>
            </div>
            <div>
              <img src="./img/mail-contacts.png" alt="mail-contacts" className='img-contacts-svg'/>
              <p>info@maro-mebel.ru</p>
            </div>
          </div>
          <div className='map-container'>
            <iframe
              title="Yandex Map"
              src="https://yandex.ru/maps/org/salon_maro/136805901235/?ll=37.568071%2C55.789197&mode=search&sctx=ZAAAAAgBEAAaKAoSCd9vtOOGs05AEUDdQIF3lEtAEhIJ4nMn2H8d5z8ReIAnLVxWzT8iBgABAgMEBSgKOABAmJIHSABqAnJ1nQHNzEw9oAEAqAEAvQH1CI%2B0wgEGs8eR0v0D6gEA8gEA%2BAEAggIKc2Fsb24gbWFyb4oCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.568071%2C55.789197&sspn=0.006133%2C0.001915&text=salonmaro&z=17.88"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
        <div className='contacts-container-button-and-links'>
          <div className='contacts-container-links'>
            <div className="button-container-contacts" onClick={handleButtonClick}>
              <p className="button-container-contacts-text">СВЯЖИТЕСЬ С НАМИ</p>
              <img
                src="./img/Button_circle.png"
                alt="button_circle"
                className="button-image-contacts"
              />
            </div>
            <div className='contacts-a-links'>
              <a href="https://wa.link/yourwhatsapplink" className="contacts-wa">WhatsAPP</a>
              <a href="https://t.me/yourtelegramusername" className="contacts-tg">TELEGRAM</a>
              <a href="https://www.instagram.com/yourinstagramusername/" className="contacts-in">INSTAGRAM*</a>
              <a href="viber://chat?number=+123456789" className="contacts-vi">VIBER</a>
            </div>
          </div>
          
          {isPopupVisible && (
            <div className="popup-overlay" onClick={handlePopupClose}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <p className="popup-overlay-text">СВЯЖИТЕСЬ С НАМИ</p>
                <img
                  src="./img/close-button.png"
                  alt="close-button-overlay"
                  className="close-button"
                  onClick={handlePopupClose}
                />
                <form>
                  <div className='popup-mail-phone'>
                    <div>
                      <p>Ваша почта</p>
                      <label>
                        <input type="mail" name="email" placeholder="На эту почту придет ответ" className='input-mail'/>
                      </label>
                    </div>
                    <div>
                      <p>Ваш телефон</p>
                      <label>
                        <input type="tel" name="phone" className='input-phone'/>
                      </label>
                    </div>
                  </div>
                  <p>Ваше сообщение</p>
                  <label className='label-container'>
                    <textarea
                      name="message"
                      value={message}
                      onChange={handleChange}
                      maxLength={500}
                      placeholder="Опишите в нескольких предложениях ваш вопрос.."
                      className='input-message'
                    />
                    <span className="char-count">{message.length}/500</span>
                  </label>
                  <button type="submit">Отправить</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;






