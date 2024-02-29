import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../components/Language.tsx';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import Supplier from '../Suppliers.tsx';
import HousingDetails from '../HousingDetails.tsx';
import DropDownMenu from '../DropDownMenu/DropDownMenu.tsx';
import PopupQuiz from './popUpQuiz.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.css'; 

function Main() {
  const [showHero, setShowHero] = useState(true);
  const { language, toggleLanguage } = useLanguage();
  const [menuStates, setMenuStates] = useState<boolean[]>([]);
  const [activeStudio, setActiveStudio] = useState<'budva' | 'moscow'>('budva');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isSticky, setSticky] = useState(false);

  const [isPopupVisibleQuiz, setPopupVisibleQuiz] = useState(false);

  const handleButtonClickQuiz = () => {
    // Логика для отображения/скрытия всплывающего окна
    setPopupVisibleQuiz(!isPopupVisibleQuiz);
  };

  const handlePopupCloseQuiz = () => {
    // Логика закрытия всплывающего окна
    setPopupVisibleQuiz(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const handleLanguageToggle = () => {
    toggleLanguage(); 
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowHero(false);
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [showHero]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: -1,
    cssEase: "linear"
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

  useEffect(() => {
    const img = document.querySelector('.top-to-bottom-animation');
    if (img) {
      img.classList.add('active');
    }
  }, []);

  useEffect(() => {
    const updateTextColor = () => {
        const elements = document.querySelectorAll('.para');
        elements.forEach((element: Element) => {
          const rect = (element as HTMLElement).getBoundingClientRect();
            const isElementVisible = rect.bottom <= 720;
            
            if (isElementVisible) {
              element.classList.add('visible');
            } else {
              element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', updateTextColor);

      return () => {
          window.removeEventListener('scroll', updateTextColor);
      };
  }, []);

  useEffect(() => {
    // Функция для обновления положения изображения
    const updateImagePosition = () => {
      // Выбираем все элементы с классом 'image-animation' или 'image-animation-2'
      const elements = document.querySelectorAll('.image-animation, .image-animation-2');
      elements.forEach((element: Element) => {
        // Преобразуем Element к HTMLElement
        const htmlElement = element as HTMLElement;
  
        const rect = htmlElement.getBoundingClientRect();
        // Проверяем, виден ли элемент на экране
        const isElementVisible = rect.bottom <= window.innerHeight;
  
        // Если элемент виден, применяем стили
        if (isElementVisible) {
          // Применяем значение clip-path в зависимости от видимости элемента
          htmlElement.style.clipPath = 'none';
        } else {
          // Если элемент не виден, вычисляем процент времени, который ему остался, пока он не выйдет с нижней границы экрана
          const windowHeight = window.innerHeight;
          const elementBottomOffset = rect.bottom - windowHeight;
          const scrollPercentage = (elementBottomOffset / windowHeight) * 100;
  
          // Применяем значение clip-path для скрытия изображения
          let clipPathValue;
          if (htmlElement.classList.contains('image-animation')) {
            clipPathValue = `inset(0 0 0 ${scrollPercentage}%)`;
          } else if (htmlElement.classList.contains('image-animation-2')) {
            clipPathValue = `inset(0 ${scrollPercentage}% 0 0)`;
          }
          htmlElement.style.clipPath = clipPathValue;
        }
      });
    };
  
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', updateImagePosition);
  
    // Убираем обработчик события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', updateImagePosition);
    };
  }, []);

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
            <img src="./img/main-img-1.jpg" alt="left-side-img" className="top-to-bottom-animation"/>
          </div>
          <div className="text-content">
            <p className='interior-text'>{language === 'ru' ? 'ИНТЕРЬЕРЫ ДЛЯ ЖИЗНИ В ЧЕРНОГОРИИ' : 'INTERIORS FOR LIVING IN MONTENEGRO'}</p>
            <p className='interior-description'>{language === 'ru' ? 'Создаем внутренние пространства квартир и вилл. Подбор и доставка мебели из Европы' : 'Creating interior spaces for apartments and villas. Selection and delivery of furniture from Europe'}</p>
            <button className='calculate-btn' onClick={handleButtonClickQuiz}>{language === 'ru' ? 'Рассчитать стоимость' : 'Calculate cost'}</button>
            {isPopupVisibleQuiz && (
              <PopupQuiz
                isPopupVisibleQuiz={isPopupVisibleQuiz}
                handlePopupCloseQuiz={handlePopupCloseQuiz}
              />
            )}
          </div>
        </div>
        <div className="right-side">
          <img src="./img/main-img-2.jpg" alt="right-side-img" className="right-to-left-animation"/>
          <div className="language-switch" onClick={handleLanguageToggle}>
            <div className={language === 'ru' ? 'active' : ''}>RU</div>
            <div className={language === 'en' ? 'active' : ''}>EN</div>
          </div>
        </div>
      </div>
      <div className='about-us' id="about">
        <img 
          src="./img/buttuon_up.png" 
          alt="button_circle_up" 
          onClick={scrollToTop} 
          className={isSticky ? 'button-up' : "button-up-hide"}
        />
        <p className='about-us-text para'>{language === 'ru' ? 'Создаем внутренние' : 'Creating interiors'}</p>
        <p className='we-started-text para'>{language === 'ru' ? 'МЫ НАЧИНАЛИ С МАЛЕНЬКОГО ОФИСА В БУДВЕ И КОМПЛЕКТАЦИИ НАБОРОМ ИТАЛЬЯНСКОЙ МЕБЕЛИ КВАРТИР ПО КАТАЛОГАМ' : 'WE STARTED WITH A SMALL OFFICE IN BUDVA AND EQUIPPED APARTMENTS WITH A SET OF ITALIAN FURNITURE FROM CATALOGS'}</p>
      </div>
      <div className="grid-container">
        <div className="about-us-heading para">{language === 'ru' ? 'О НАС' : 'ABOUT US'}</div>
        <div className="about-us-text-container">
          <div>
              <span className='large-digit-in-about-section para'>15</span>
              <p className='para'>{language === 'ru' ? 'лет опыта' : 'years of experience'}</p>
          </div>
          <div>
            <span className='large-digit-in-about-section para'>2</span>
            <p className='para'>{language === 'ru' ? 'студии в Черногории и Москве' : 'studios in Montenegro and Moscow'}</p>
          </div>
          <div>
            <span className='large-digit-in-about-section para'>200</span>
            <p className='para'>{language === 'ru' ? 'фабрик, с которыми мы сотрудничаем' : 'factories we cooperate with'}</p>
          </div>
        </div>
        <div className="about-us-text-container-scnd">
          <div>
            <span className='large-digit-in-about-section para'>300</span>
            <p className='para'>{language === 'ru' ? 'дизайн-проектов' : 'design projects'}</p>
          </div>
          <div>
            <span className='large-digit-in-about-section para'>14</span>
            <p className='para'>{language === 'ru' ? 'человек в команде' : 'person in the team'}</p>
          </div>
        </div>  
        <div className="about-image-section">
          <img src="./img/about-us-img.jpg" alt="about-us-img" className="image-animation"/>
          <h5 className='cover-all-questions para'>{language === 'ru' ? 'МЫ ПЕРЕКРЫВАЕМ ВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ \nК НЕДВИЖИМОСТИ' : 'WE COVER ALL REAL ESTATE RELATED QUESTIONS'}</h5>
        </div>
      </div>
      <div className="portfolio-section" id='portfolio'>
      <p className='portfolio-heading para'>{language === 'ru' ? 'ПОРТФОЛИО' : 'PORTFOLIO'}</p>
        <div className='rolling-gallery'>
          <Slider {...settings}>
            <>
              <p className='rolling-gallery-txt-1 para'>{language === 'ru' ? 'КВАРТИРЫ' : 'APARTMENTS'}</p>
              <HousingDetails type="apartment" data={apartmentData} />
            </>
            <>
              <p className='rolling-gallery-txt-2 para'>{language === 'ru' ? 'ВИЛЛЫ' : 'VILLAS'}</p>
              <HousingDetails type="villa" data={villaData} />
            </>
          </Slider>
        </div>
        <a href="/portfolio" className="button-container">
          <p className="watch-all-text para">{language === 'ru' ? 'СМОТРЕТЬ ВСЕ' : 'WATCH ALL'}</p>
          <img src="./img/Button_circle.png" alt="button_circle" className="button-image-portfolio" />
        </a>
      </div>
      <div className="services-section" id='services'>
        <div className="services-header">
          <p className='para'>{language === 'ru' ? 'УСЛУГИ' : 'SERVICES'}</p>
        </div>
        <>
          <DropDownMenu
            title={language === 'ru' ? '01  ДИЗАЙН-ПРОЕКТИРОВАНИЕ' : '01  DESIGN AND PLANNING'}
            content={[
              language === 'ru' ? 
              "Встреча с клиентом. Получение исходной информации" :
              "Meeting with the client. Obtaining initial information",
              language === 'ru' ?
              "Предоставление клиенту информации\n об услугах и их ценах" :
              "Providing the client with information about services and their prices",
              language === 'ru' ?
              "Заключение договора на дизайн-проект" :
              "Signing a contract for the design project",
              language === 'ru' ?
              "Работа над проектом" :
              "Working on the project",
              language === 'ru' ?
              "Обсуждение промежуточных результатов с клиентами" :
              "Discussing intermediate results with clients",
              language === 'ru' ?
              "Составление сметы проекта с учетом подключенных подрядчиков" :
              "Preparing an estimate of the project considering the involved contractors",
              language === 'ru' ?
              "Закрытие этапа Проектирование \nи переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр." :
              "Closing the Design stage and transitioning to the Implementation stage organizing and controlling work on the project, ordering finishing materials, furniture, etc.",
              language === 'ru' ?
              "Сдача полностью готового объекта" :
              "Handover of the fully completed object"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
            price={language === 'ru' ? `От 500 €/М²` : `From 500 €/M²`}
            buttonIs={false}
          />
          <DropDownMenu
            title={language === 'ru' ? `02  РЕМОНТНО-СТРОИТЕЛЬНЫЕ РАБОТЫ` : `02  CONSTRUCTION AND RENOVATION WORKS`}
            content={[
              language === 'ru' ? 
              "Встреча с клиентом. Получение исходной информации" :
              "Meeting with the client. Obtaining initial information",
              language === 'ru' ?
              "Предоставление клиенту информации об услугах и их ценах" :
              "Providing the client with information about services and their prices",
              language === 'ru' ?
              "Заключение договора на дизайн-проект" :
              "Signing a contract for the design project",
              language === 'ru' ?
              "Работа над проектом" :
              "Working on the project",
              language === 'ru' ?
              "Обсуждение промежуточных результатов с клиентами" :
              "Discussing intermediate results with clients",
              language === 'ru' ?
              "Составление сметы проекта с учетом подключенных подрядчиков" :
              "Preparing an estimate of the project considering the involved contractors",
              language === 'ru' ?
              "Закрытие этапа Проектирование и переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр." :
              "Closing the Design stage and transitioning to the Implementation stage organizing and controlling work on the project, ordering finishing materials, furniture, etc.",
              language === 'ru' ?
              "Сдача полностью готового объекта" :
              "Handover of the fully completed object"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
            price={language === 'ru' ? `От 500 €/М²` : `From 500 €/M²`}
            buttonIs={false}
          />
          <DropDownMenu
            title={language === 'ru' ? `03  ПОДБОР И ПОСТАВКА МЕБЕЛИ` : `03  FURNITURE SELECTION AND DELIVERY`}
            content={[
              language === 'ru' ? 
              "Встреча с клиентом. Получение исходной информации" :
              "Meeting with the client. Obtaining initial information",
              language === 'ru' ?
              "Предоставление клиенту информации об услугах и их ценах" :
              "Providing the client with information about services and their prices",
              language === 'ru' ?
              "Заключение договора на дизайн-проект" :
              "Signing a contract for the design project",
              language === 'ru' ?
              "Работа над проектом" :
              "Working on the project",
              language === 'ru' ?
              "Обсуждение промежуточных результатов с клиентами" :
              "Discussing intermediate results with clients",
              language === 'ru' ?
              "Составление сметы проекта с учетом подключенных подрядчиков" :
              "Preparing an estimate of the project considering the involved contractors",
              language === 'ru' ?
              "Закрытие этапа Проектирование и переход в этап Реализации организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр." :
              "Closing the Design stage and transitioning to the Implementation stage organizing and controlling work on the project, ordering finishing materials, furniture, etc.",
              language === 'ru' ?
              "Сдача полностью готового объекта" :
              "Handover of the fully completed object"
            ]}
            menuStates={menuStates}
            setMenuStates={setMenuStates}
            price={language === 'ru' ? `От 500 €/М²` : `From 500 €/M²`}
            buttonIs={true}
          />
        </>
      </div>
      <div className='selection-section' id='selection'>
        <p className='selection-head para'>{language === 'ru' ? `ПОДБОР МЕБЕЛИ` : `FURNITURE SELECTION`}</p>
        <div className='selection-container'>
          <div className="selection-image">
            <img src="./img/furnuture-selection.png" alt="furnuture-selection" className="furnuture-selection-image image-animation-2" />
            <p className='selection-text para'>{language === 'ru' ? `МЫ ПЕРЕКРЫВАЕМ\nВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ` : `WE COVER\nALL REAL ESTATE RELATED QUESTIONS`}</p>
          </div>
          <p className='selection-text-after-image para'>{language === 'ru' ? `Подбор и доставка мебели из Европы. Подбор и доставка мебели из ЕвропыПодбор и доставка мебели из Европы` : `Selection and delivery of furniture from Europe. Selection and delivery of furniture from EuropeSelection and delivery of furniture from Europe`}</p>
          <div className='selection-right'>
            <img src="./img/furnuture-selection-scnd.png" alt="furnuture-selection-scnd" className="furnuture-selection-scnd image-animation" />
            <p className='para'>{language === 'ru' ? `Составление сметы проекта с учетом подключенных подрядчиков. Составление сметы проекта с учетом подключенных подрядчиков. Составление сметы проекта с учетом подключенных подрядчиков.` : `Compilation of project estimate taking into account connected contractors. Compilation of project estimate taking into account connected contractors. Compilation of project estimate taking into account connected contractors.`}</p>
          </div>
        </div>
        <div className='selection-suppliers'>
          <p className='selection-head para'>{language === 'ru' ? 'НАШИ ПОСТАВЩИКИ' : 'OUR SUPPLIERS'}</p>
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
        <p className='contacts-head para'>{language === 'ru' ? 'КОНТАКТЫ' : 'CONTACTS'}</p>
        <div className='studio-toggle-container'>
          <div className='studio-toggle'>
            <button
              className={activeStudio === 'budva' ? 'active' : ''}
              onClick={() => handleStudioToggle('budva')}
            >
              {language === 'ru' ? 'Студия в Будве' : 'Studio in Budva'}
            </button>
            <button
              className={activeStudio === 'moscow' ? 'active' : ''}
              onClick={() => handleStudioToggle('moscow')}
            >
              {language === 'ru' ? 'Студия в Москве' : 'Studio in Moscow'}
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
                <p className='para'>maro-budva</p>
              </div>
              <div>
                <img src="./img/phone-contacts.png" alt="phone-contacts" className='img-contacts-svg'/>
                <p className='para'>382 69 772-002</p>
              </div>
              <div>
                <img src="./img/house-contacts.png" alt="house-contacts" className='img-contacts-svg'/>
                <p className='para'>{language === 'ru' ? '85310, Черногория, Будва, район «Яз»' : '85310, Montenegro, Budva, district "Yaz"'}</p>
              </div>
            </div>
            <div className='second-string'>
              <div>
                <img src="./img/clock-contacts.png" alt="clock-contacts" className='img-contacts-svg'/>
                <p className='para'>{language === 'ru' ? 'ПН-СБ: 10.00-19.00' : 'MN-ST: 10.00-19.00'}</p>
              </div>
              <div>
                <img src="./img/mail-contacts.png" alt="mail-contacts" className='img-contacts-svg'/>
                <p className='para'>info@maro-mebel.ru</p>
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
              <img src="./img/skype-contacts.png" alt="skype-contacts" className='img-contacts-svg para'/>
              <p className='para'>maro-budva</p>
            </div>
            <div> 
              <img src="./img/phone-contacts.png" alt="phone-contacts" className='img-contacts-svg para'/>
              <p className='para'>382 69 772-002</p>
            </div>
            <div>
              <img src="./img/house-contacts.png" alt="house-contacts" className='img-contacts-svg para'/>
              <p className='para'>85310, Россия, Москва, район «Яз»</p>
            </div>
          </div>
          <div className='second-string'>
            <div>
              <img src="./img/clock-contacts.png" alt="clock-contacts" className='img-contacts-svg para'/>
              <p className='para'>ПН-СБ: 10.00-19.00</p>
            </div>
            <div>
              <img src="./img/mail-contacts.png" alt="mail-contacts" className='img-contacts-svg para'/>
              <p className='para'>info@maro-mebel.ru</p>
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
          <br/>
          <div className='contacts-container-links'>
            <div className="button-container-contacts" onClick={handleButtonClick}>
              <p className="button-container-contacts-text para">{language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}</p>
              <img
                src="./img/Button_circle.png"
                alt="button_circle"
                className="button-image-contacts"
              />
            </div>
            <div className='contacts-a-links'>
              <a href="https://wa.link/yourwhatsapplink" className="contacts-wa para">WhatsAPP</a>
              <a href="https://t.me/yourtelegramusername" className="contacts-tg para">TELEGRAM</a>
              <a href="https://www.instagram.com/yourinstagramusername/" className="contacts-in para">INSTAGRAM*</a>
              <a href="viber://chat?number=+123456789" className="contacts-vi para">VIBER</a>
            </div>
          </div>
          
          {isPopupVisible && (
            <div className="popup-overlay" onClick={handlePopupClose}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <p className="popup-overlay-text">{language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}</p>
                <img
                  src="./img/close-button.png"
                  alt="close-button-overlay"
                  className="close-button"
                  onClick={handlePopupClose}
                />
                <form>
                  <div className='popup-mail-phone'>
                    <div>
                      <p>{language === 'ru' ? 'Ваша почта' : 'Your email'}</p>
                      <label>
                      <input type="email" name="email" placeholder={language === 'ru' ? 'На эту почту придет ответ' : 'The answer will be sent to this email'} className='input-mail'/>
                      </label>
                    </div>
                    <div>
                      <p>{language === 'ru' ? 'Ваш телефон' : 'Your phone number'}</p>
                      <label>
                        <input type="tel" name="phone" className='input-phone'/>
                      </label>
                    </div>
                  </div>
                  <p>{language === 'ru' ? 'Ваше сообщение' : 'Your message'}</p>
                  <label className='label-container'>
                    <textarea
                      name="message"
                      value={message}
                      onChange={handleChange}
                      maxLength={500}
                      placeholder={language === 'ru' ? 'Опишите в нескольких предложениях ваш вопрос..' : 'Describe your question in a few sentences..'} 
                      className='input-message'
                    />
                    <span className="char-count">{message.length}/500</span>
                  </label>
                  <button type="submit" className='popup-content-button'>{language === 'ru' ? 'Отправить' : 'Send'}</button>
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






