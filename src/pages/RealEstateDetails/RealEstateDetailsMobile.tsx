import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../components/Language.tsx';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RealEstateDetailsMobile.css'

const RealEstateDetailsMobile = () => {
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
        infinite: true,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        arrows: false,
        speed: 6000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    const settingsSimilarProjects = {
        infinite: true,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        arrows: false,
        speed: 4000,
        autoplaySpeed: 1,
        cssEase: "linear"
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
    <div className="real-estate-page-section-mobile">
        <div className="real-estate-page-mobile">
            <img 
                src="/img/portfolio-page-1.png" 
                alt="real-estate-page-background" 
                className='real-estate-page-background-mobile' 
            />
            <div className="real-estate-page-text-overlay-mobile">
                <p className='real-estate-page-heading-mobile para'>{residentialComplex}</p>
                <p className='real-estate-page-text-mobile para'>
                    {address}, {sizeSquareMeters}
                </p>
            </div>
        </div>
        <div className='real-estate-page-about-design-mobile'>
            <div className='real-estate-page-about-design-text-img-mobile'>
                <div className='real-estate-page-about-design-text-mobile'>
                    <p className='real-estate-page-about-design-text-1-mobile para'>
                        {language === 'ru' ? 'ГЛАВНОЙ ЗАДАЧЕЙ ПРОЕКТА ЯВЛЯЛАСЬ СОВМЕСТИТЬ НЕСОВМЕТСИМОЕ' : 'THE MAIN TASK OF THE PROJECT WAS TO COMBINE INCOMPATIBLE'}
                    </p>
                    <p className='real-estate-page-about-design-text-2-mobile para'>
                        {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы \nпо обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры, а приезжает \nуже в полностью готовую к проживанию. Мы можем полностью снять с клиента все вопросы по обустройству недвижимости.' : 'We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space. We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space.'}
                    </p>
                </div>
                <img 
                    src="/img/real-estate-page-photo-mobile.png" 
                    alt="real-estate-page-ph" 
                    className='real-estate-page-photo-mobile image-animation' 
                />
            </div>
            <div className='real-estate-page-photo-section-mobile'>
                <div className='real-estate-page-photo-section-1-mobile'>
                    <img src="/img/real-estate-page-1.png" alt="real-estate-page-ph-1" className='real-estate-page-photo-1-mobile' />
                    <p className='para'>{language === 'ru' ? 'Гостиная' : 'Living Room'}</p>
                </div>
                <div className='real-estate-page-photo-section-2-mobile'>
                    <img src="/img/real-estate-page-2.png" alt="real-estate-page-ph-2" className='real-estate-page-photo-2-mobile' />
                    <p className='para'>{language === 'ru' ? 'Вид на лестницу' : 'Staircase View'}</p>
                </div>
                <div className='real-estate-page-photo-section-3-mobile'>
                    <img src="/img/real-estate-page-3.png" alt="real-estate-page-ph-3" className='real-estate-page-photo-3-mobile' />
                    <p className='para'>{language === 'ru' ? 'Вид на лестницу' : 'Staircase View'}</p>
                </div>
            </div>
        </div>
        <div className='real-estate-page-middle-text-mobile'>
            <p className='real-estate-page-middle-text-1-mobile para'>
                {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы \nпо обустройству недвижимости. Клиент доверяет\n нам ключи от «голой» квартиры, а приезжает\n уже в полностью готовую к проживанию. Мы можем полностью снять с клиента все вопросы\n по обустройству недвижимости. Клиент доверяет\n нам ключи от «голой» квартиры, а приезжает\n уже в полностью готовую к проживанию.' : 'We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space. We can completely solve all the client\'s questions regarding real estate improvement. The client trusts us with the keys to the "bare" apartment, and arrives in a fully prepared living space.'}
            </p>
        </div>
        <div className='real-estate-page-gallery-mobile'>
            <p className='real-estate-page-gallery-head-mobile para'>{language === 'ru' ? 'ГАЛЛЕРЕЯ ПРОЕКТА' : 'Project Gallery'}</p>
            <div className='real-estate-page-slider-mobile'>
            <Slider {...settingsRealEstate} ref={sliderRef}>
                <div className="real-estate-page-slide-wrapper-mobile">
                    <img 
                        src="/img/real-estate-page-photo.png" 
                        alt="real-estate-page-gallery-ph-1" 
                        className='real-estate-page-gallery-ph-mobile' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper-mobile">
                    <img 
                        src="/img/real-estate-page-1.png" 
                        alt="real-estate-page-gallery-ph-1" 
                        className='real-estate-page-gallery-ph-mobile' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper-mobile">
                    <img 
                        src="/img/real-estate-page-2.png" 
                        alt="real-estate-page-gallery-ph-2" 
                        className='real-estate-page-gallery-ph-mobile' 
                    />
                </div>
                <div className="real-estate-page-slide-wrapper-mobile">
                    <img 
                        src="/img/real-estate-page-3.png" 
                        alt="real-estate-page-gallery-ph-3" 
                        className='real-estate-page-gallery-ph-mobile' 
                    />
                </div>
            </Slider>
            </div>
        </div>
        <div className='real-estate-page-container-mobile'>
            <div className='selection-container-mobile'>
                <div className="selection-image-mobile">
                    <img 
                    src="/img/furnuture-selection.png" 
                    alt="furnuture-selection" 
                    className="furnuture-selection-image-mobile image-animation-2" 
                    />
                    <p className='selection-text-mobile para'>{language === 'ru' ? `МЫ ПЕРЕКРЫВАЕМ\nВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ` : `WE COVER\nALL REAL ESTATE RELATED QUESTIONS`}</p>
                </div>
                <p className='selection-text-after-image-mobile para'>{language === 'ru' ? `Подбор и доставка мебели из Европы. Подбор и доставка мебели из ЕвропыПодбор и доставка мебели из Европы` : `Selection and delivery of furniture from Europe. Selection and delivery of furniture from EuropeSelection and delivery of furniture from Europe`}</p>
            </div>
            <div className='real-estate-right-mobile'>
                <img src="/img/real-estate-2.png" alt="furnuture-selection-scnd" className="real-estate-scnd-mobile image-animation" />
                <div className="button-container-real-estate-mobile" onClick={handleButtonClick}>
                    <p className="button-container-real-estate-text-mobile para">{language === 'ru' ? 'ЗАКАЗАТЬ ПОДОБНОЕ' : 'ORDER SIMILAR'}</p>
                    <img
                        src="/img/Button_circle.png"
                        alt="button_circle"
                        className="button-image-real-estate-mobile"
                    />
                </div>
                {isPopupVisible && (
                    <div className="popup-overlay-mobile" onClick={handlePopupClose}>
                    <div className="popup-content-mobile" onClick={(e) => e.stopPropagation()}>
                        <p className="popup-overlay-text-mobile">{language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}</p>
                        <img
                        src="/img/close-button.png"
                        alt="close-button-overlay"
                        className="close-button-mobile"
                        onClick={handlePopupClose}
                        />
                        <form className='popup-content-form-mobile'>
                        <div className='popup-mail-phone-mobile'>
                            <div>
                            <p>{language === 'ru' ? 'Ваша почта' : 'Your email'}</p>
                            <label>
                            <input type="email" name="email" placeholder={language === 'ru' ? 'На эту почту придет ответ' : 'The answer will be sent to this email'} className='input-mail-mobile'/>
                            </label>
                            <p>{language === 'ru' ? 'Ваш телефон' : 'Your phone number'}</p>
                            <label>
                                <input type="tel" name="phone" className='input-phone-mobile'/>
                            </label>
                            </div>
                        </div>
                        <p>{language === 'ru' ? 'Ваше сообщение' : 'Your message'}</p>
                        <label className='label-container-mobile'>
                            <textarea
                            name="message"
                            value={message}
                            onChange={handleChange}
                            maxLength={225}
                            placeholder={language === 'ru' ? 'Опишите в нескольких предложениях ваш вопрос..' : 'Describe your question in a few sentences..'} 
                            className='input-message-mobile'
                            />
                            <span className="char-count-mobile">{message.length}/225</span>
                        </label>
                        <button type="submit" className='popup-content-button-mobile'>{language === 'ru' ? 'Отправить' : 'Send'}</button>
                        </form>
                    </div>
                    </div>
                )}
            </div>
        </div>
        <div className='real-estate-page-similar-projects-mobile'>
            <p className='real-estate-page-similar-projects-head-mobile para'>{language === 'ru' ? 'ПОХОЖИЕ ПРОЕКТЫ' : 'Similar Projects'}</p>
            <Slider {...settingsSimilarProjects}>
            {data.map((item, index) => (
                <div key={index} className="portfolio-page-item-mobile">
                <NavLink
                    state={{
                    type: selectedComponent,
                    id: index,
                    residentialComplex: item.residentialComplex,
                    address: item.address,
                    sizeSquareMeters: item.sizeSquareMeters,
                    }}
                    style={{ textDecoration: 'none' }}
                    to={`/portfolio/${selectedComponent}/${index}`}
                >
                {item.photoUrl && (
                    <>
                    <img
                        src={item.photoUrl}
                        alt={`real-estate-${index}-mobile`}
                        className={`real-page-image-renderComponent-mobile portfolio-image-${index}`}
                    />
                    <div className='real-page-text-renderComponent-mobile'>
                        <p className='real-page-residentialComplex-mobile' style={{ textDecoration: 'none' }}>{item.residentialComplex}</p>
                        <p className='real-page-address-mobile' style={{ textDecoration: 'none' }}>{item.address}</p>
                        <p className='real-page-sizeSquareMeters-mobile' style={{ textDecoration: 'none' }}>{item.sizeSquareMeters}</p>
                    </div>
                    </>
                )}
                </NavLink>
                    
                </div>
                ))}
            </Slider>
        </div>
    </div>
  );
};

export default RealEstateDetailsMobile;
