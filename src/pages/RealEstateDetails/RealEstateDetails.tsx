import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RealEstateDetails.css'

const RealEstateDetails = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState('');

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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    const sliderRef = useRef<Slider>(null);
    const handleNext = () => {
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
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

  return (
    <div className="real-estate-page-section">
        <div className="real-estate-page">
            <img src="/img/portfolio-page-1.png" alt="real-estate-page-background" className='real-estate-page-background' />
            <div className="real-estate-page-text-overlay">
                <p className='real-estate-page-heading'>{residentialComplex}</p>
                <p className='real-estate-page-text'>
                    {address}, {sizeSquareMeters}
                </p>
            </div>
        </div>
        <div className='real-estate-page-about-design'>
            <div className='real-estate-page-about-design-text-img'>
                <div className='real-estate-page-about-design-text'>
                    <p className='real-estate-page-about-design-text-1'>
                        ГЛАВНОЙ ЗАДАЧЕЙ ПРОЕКТА ЯВЛЯЛАСЬ СОВМЕСТИТЬ НЕСОВМЕТСИМОЕ
                    </p>
                    <p className='real-estate-page-about-design-text-2'>
                        Мы можем полностью снять с клиента все вопросы 
                        по обустройству недвижимости. Клиент доверяет нам ключи 
                        от «голой» квартиры, а приезжает уже в полностью готовую 
                        к проживанию.Мы можем полностью снять с клиента
                        все вопросы по обустройству недвижимости. Клиент доверяет
                        нам ключи от «голой» квартиры, а приезжает уже в полностью 
                        готовую к проживанию.
                    </p>
                </div>
                <img src="/img/real-estate-page-photo.png" alt="real-estate-page-ph" className='real-estate-page-photo' />
            </div>
            <div className='real-estate-page-photo-section'>
                <div className='real-estate-page-photo-section-1'>
                    <img src="/img/real-estate-page-1.png" alt="real-estate-page-ph-1" className='real-estate-page-photo-1' />
                    <p>Гостиная</p>
                </div>
                <div className='real-estate-page-photo-section-2'>
                    <img src="/img/real-estate-page-2.png" alt="real-estate-page-ph-2" className='real-estate-page-photo-2' />
                    <p>Вид на лестницу</p>
                </div>
                <div className='real-estate-page-photo-section-3'>
                    <img src="/img/real-estate-page-3.png" alt="real-estate-page-ph-3" className='real-estate-page-photo-3' />
                    <p>Вид на лестницу</p>
                </div>
            </div>
        </div>
        <div className='real-estate-page-middle-text'>
            <p className='real-estate-page-middle-text-1'>
                Мы можем полностью снять с клиента все вопросы 
                по обустройству недвижимости. Клиент доверяет нам ключи 
                от «голой» квартиры, а приезжает уже в полностью готовую 
                к проживанию.Мы можем полностью снять с клиента
                все вопросы по обустройству недвижимости. Клиент доверяет
                нам ключи от «голой» квартиры, а приезжает уже в полностью 
                готовую к проживанию.
            </p>
            <p className='real-estate-page-middle-text-2'>
                Мы можем полностью снять с клиента все вопросы 
                по обустройству недвижимости. Клиент доверяет нам ключи 
                от «голой» квартиры, а приезжает уже в полностью готовую 
                к проживанию.Мы можем полностью снять с клиента
                все вопросы по обустройству недвижимости. Клиент доверяет
                нам ключи от «голой» квартиры, а приезжает уже в полностью 
                готовую к проживанию.
            </p>
        </div>
        <div className='real-estate-page-gallery'>
            <p className='real-estate-page-gallery-head'>ГАЛЛЕРЕЯ ПРОЕКТА</p>
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
                className='real-estate-page-button-next' 
                onClick={handleNext}
            />
            </div>
        </div>
        <div className='real-estate-page-container'>
          <div className="real-estate-image">
            <img src="/img/real-estate.png" alt="real-estate" className="real-estate-image" />
            <p className='real-estate-page-text'>МЫ ПЕРЕКРЫВАЕМ <br/> ВСЕ ВОПРОСЫ, ОТНОСЯЩИЕСЯ К НЕДВИЖИМОСТИ</p>
          </div>
          <p className='real-estate-text-after-image'>Подбор и доставка мебели из Европы. Подбор и доставка мебели из ЕвропыПодбор и доставка мебели из Европы</p>
          <div className='real-estate-right'>
            <img src="/img/real-estate-2.png" alt="furnuture-selection-scnd" className="real-estate-scnd" />
            <div className="button-container-real-estate" onClick={handleButtonClick}>
              <p className="button-container-real-estate-text">ЗАКАЗАТЬ ПОДОБНОЕ</p>
              <img
                src="/img/Button_circle.png"
                alt="button_circle"
                className="button-image-real-estate"
              />
            </div>
            {isPopupVisible && (
                <div className="popup-overlay" onClick={handlePopupClose}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <p className="popup-overlay-text">СВЯЖИТЕСЬ С НАМИ</p>
                    <img
                    src="/img/close-button.png"
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
        <div className='real-estate-page-similar-projects'>
            <p className='real-estate-page-similar-projects-head'>ПОХОЖИЕ ПРОЕКТЫ</p>
            <Slider {...settingsSimilarProjects} ref={sliderRef}>
                {data.map((item, index) => (
                <div key={index} className="similar-projects-page-slide-wrapper">
                    {item.photoUrl && (
                    <img
                        src={item.photoUrl}
                        alt={`real-estate-${index}`}
                        className="similar-projects-page-slide-image"
                    />
                    )}
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
