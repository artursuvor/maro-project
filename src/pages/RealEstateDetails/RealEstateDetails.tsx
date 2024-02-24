import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../../components/Language.tsx';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RealEstateDetails.css'

const RealEstateDetails = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<'commercial' | 'apartment' | 'villa'>('apartment');
    const [message, setMessage] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const { language } = useLanguage();
    const { state } = useLocation();
    const { residentialComplex, address, sizeSquareMeters } = state;
    const { type } = state;

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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    const settingsRealEstate = {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    const settingsSimilarProjects = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const sliderRef = useRef<Slider>(null);
    const handleNext = () => {
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
    };

    const handleMouseEnter = (index: number) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  
    let data;
    switch (type) {
    case 'commercial':
        data = commercialData;
        break;
    case 'apartment':
        data = apartmentData;
        break;
    case 'villa':
        data = villaData;
        break;
    default:
        data = [];
    }

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
      

    useEffect(() => {
        const updateTextColor = () => {
            const elements = document.querySelectorAll('.real-estate-page-photo-1, .real-estate-page-photo-2, .real-estate-page-photo-3');
            elements.forEach((element: Element) => {
                const rect = (element as HTMLElement).getBoundingClientRect();
                const isElementVisible = rect.bottom <= 1020;
    
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
  return (
    <div className="real-estate-page-section">
        <div className="real-estate-page">
            <img 
                src="/img/portfolio-page-1.png" 
                alt="real-estate-page-background" 
                className='real-estate-page-background' 
            />
            <div className="real-estate-page-text-overlay">
                <p className='real-estate-page-heading para'>{residentialComplex}</p>
                <p className='real-estate-page-text para'>
                    {address}, {sizeSquareMeters}
                </p>
            </div>
        </div>
        <div className='real-estate-page-about-design'>
            <div className='real-estate-page-about-design-text-img'>
                <div className='real-estate-page-about-design-text'>
                    <p className='real-estate-page-about-design-text-1 para'>
                        {language === 'ru' ? 'ГЛАВНОЙ ЗАДАЧЕЙ ПРОЕКТА ЯВЛЯЛАСЬ СОВМЕСТИТЬ НЕСОВМЕТСИМОЕ' : 'THE MAIN TASK OF THE PROJECT WAS TO COMBINE INCOMPATIBLE'}
                    </p>
                    <p className='real-estate-page-about-design-text-2 para'>
                        {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию. Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию.' : 'We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space. We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space.'}
                    </p>
                </div>
                <img 
                    src="/img/real-estate-page-photo.png" 
                    alt="real-estate-page-ph" 
                    className='real-estate-page-photo image-animation' 
                />
            </div>
            <div className='real-estate-page-photo-section'>
                <div className='real-estate-page-photo-section-1'>
                    <img src="/img/real-estate-page-1.png" alt="real-estate-page-ph-1" className='real-estate-page-photo-1' />
                    <p className='para'>{language === 'ru' ? 'Гостиная' : 'Living Room'}</p>
                </div>
                <div className='real-estate-page-photo-section-2'>
                    <img src="/img/real-estate-page-2.png" alt="real-estate-page-ph-2" className='real-estate-page-photo-2' />
                    <p className='para'>{language === 'ru' ? 'Вид на лестницу' : 'Staircase View'}</p>
                </div>
                <div className='real-estate-page-photo-section-3'>
                    <img src="/img/real-estate-page-3.png" alt="real-estate-page-ph-3" className='real-estate-page-photo-3' />
                    <p className='para'>{language === 'ru' ? 'Вид на лестницу' : 'Staircase View'}</p>
                </div>
            </div>
        </div>
        <div className='real-estate-page-middle-text'>
            <p className='real-estate-page-middle-text-1 para'>
                {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию. Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию.' : 'We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space. We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space.'}
            </p>
            <p className='real-estate-page-middle-text-2 para'>
                {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию. Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает уже в полностью готовую к проживанию.' : 'We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space. We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space.'}
            </p>
        </div>
        <div className='real-estate-page-gallery'>
            <p className='real-estate-page-gallery-head para'>{language === 'ru' ? 'ГАЛЛЕРЕЯ ПРОЕКТА' : 'Project Gallery'}</p>
            <div className='real-estate-page-slider'>
            <Slider {...settingsRealEstate} ref={sliderRef}>
                <div className="real-estate-page-slide-wrapper">
                    <img 
                        src="/img/real-estate-page-photo.png" 
                        alt="real-estate-page-gallery-ph-1" 
                        className='real-estate-page-gallery-ph' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper">
                    <img 
                        src="/img/real-estate-page-1.png" 
                        alt="real-estate-page-gallery-ph-1" 
                        className='real-estate-page-gallery-ph' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper">
                    <img 
                        src="/img/real-estate-page-2.png" 
                        alt="real-estate-page-gallery-ph-2" 
                        className='real-estate-page-gallery-ph' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper">
                    <img 
                        src="/img/real-estate-page-3.png" 
                        alt="real-estate-page-gallery-ph-3" 
                        className='real-estate-page-gallery-ph' 
                    />
                </div>
            </Slider>
            <img 
                src="/img/button-supp.png" 
                alt="real-estate-page-button-next" 
                className='real-estate-page-button-next-1' 
                onClick={handleNext}
            />
            </div>
        </div>
        <div className='real-estate-page-container'>
          <div className="real-estate-image">
            <img src="/img/real-estate.png" alt="real-estate" className="real-estate-image image-animation-2" />
            <p className='real-estate-page-text para'>{language === 'ru' ? 'МЫ ПЕРЕКРЫВАЕМ\nВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ' : 'WE COVER ALL\nREAL ESTATE-RELATED QUESTIONS'}</p>
          </div>
          <p className='real-estate-text-after-image para'>
            {language === 'ru' ? 'Подбор и доставка мебели из Европы. Подбор и доставка мебели из ЕвропыПодбор и доставка мебели из Европы' : 'Furniture selection and delivery from Europe. Furniture selection and delivery from EuropeFurniture selection and delivery from Europe'}
          </p>
          <div className='real-estate-right'>
            <img src="/img/real-estate-2.png" alt="furnuture-selection-scnd" className="real-estate-scnd image-animation" />
            <div className="button-container-real-estate" onClick={handleButtonClick}>
              <p className="button-container-real-estate-text para">{language === 'ru' ? 'ЗАКАЗАТЬ ПОДОБНОЕ' : 'ORDER SIMILAR'}</p>
              <img
                src="/img/Button_circle.png"
                alt="button_circle"
                className="button-image-real-estate"
              />
            </div>
            {isPopupVisible && (
                <div className="popup-overlay" onClick={handlePopupClose}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <p className="popup-overlay-text para">{language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}</p>
                    <img
                    src="/img/close-button.png"
                    alt="close-button-overlay"
                    className="close-button"
                    onClick={handlePopupClose}
                    />
                    <form>
                    <div className='popup-mail-phone'>
                        <div>
                        <p className='para'>{language === 'ru' ? 'Ваша почта' : 'Your email'}</p>
                        <label>
                            <input type="mail" name="email" placeholder={language === 'ru' ? 'На эту почту придет ответ' : 'You will receive a response to this email'} className='input-mail'/>
                        </label>
                        </div>
                        <div>
                        <p className='para'>{language === 'ru' ? 'Ваш телефон' : 'Your phone number'}</p>
                        <label>
                            <input type="tel" name="phone" className='input-phone'/>
                        </label>
                        </div>
                    </div>
                    <p className='para'>{language === 'ru' ? 'Ваше сообщение' : 'Your message'}</p>
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
                    <button type="submit">{language === 'ru' ? 'Отправить' : 'Send'}</button>
                    </form>
                </div>
                </div>
            )}
          </div>
        </div>
        <div className='real-estate-page-similar-projects'>
            <p className='real-estate-page-similar-projects-head para'>ПОХОЖИЕ ПРОЕКТЫ</p>
        <Slider {...settingsSimilarProjects} ref={sliderRef}>
            {data.map((item, index) => (
                <div key={index} className="real-estate-page-item">
                    <Link
                        to={`/portfolio/${selectedComponent}/${index}`}
                        state={{
                            type: selectedComponent,
                            id: index,
                            residentialComplex: item.residentialComplex,
                            address: item.address,
                            sizeSquareMeters: item.sizeSquareMeters,
                        }}
                    >
                    <div
                        className={`real-estate-page-text-renderComponent ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p className='real-estate-page-residentialComplex'>{item.residentialComplex}</p>
                        <p className='real-estate-page-address'>{item.address}</p>
                        <p className='real-estate-page-sizeSquareMeters'>{item.sizeSquareMeters}</p>
                    </div>
                    {item.photoUrl && (
                        <>
                            <img
                                src={item.photoUrl}
                                alt={`real-estate-${index}`}
                                className={`real-estate-page-image-renderComponent real-estate-image-${index}`}
                            />
                            <div className="real-estate-page-read-more">
                                <Link to={`/portfolio/${selectedComponent}/${index}`} className="real-estate-page-more-link">
                                    {language === 'ru' ? 'Подробнее' : 'More details'}
                                </Link>
                                <img src='/img/white-arrow-up.png' alt='white-arrow-up' className= "real-estate-page-white-arrow-up"/>
                            </div>
                        </>
                    )}
                    </Link>
                </div>
            ))}
        </Slider>
            <img 
                src="/img/button-supp.png" 
                alt="real-estate-page-button-next" 
                className='real-estate-page-button-next' 
                onClick={handleNext}
            />
        </div>
    </div>
  );
};

export default RealEstateDetails;
