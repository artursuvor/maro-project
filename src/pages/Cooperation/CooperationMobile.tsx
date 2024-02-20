import React, { useState } from 'react';
import { useLanguage } from '../../components/Language.tsx';
import './CooperationMobile.css';

const CooperationMobile: React.FC = () => {
    const { language } = useLanguage();
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

    return (
        <div className='cooperation-section-mobile'>
            <p className='cooperation-head-mobile'>{language === 'ru' ? 'Сотрудничество' : 'Cooperation'}</p>
            <div className='cooperation-container-text-btn-mobile'>
                <p className='cooperation-container-text-mobile'>
                    {language === 'ru' ? (
                        <>
                            Мы можем полностью снять с клиента все вопросы
                            по обустройству недвижимости. Клиент доверяет нам ключи
                            от «голой» квартиры, а приезжает уже в полностью готовую
                            к проживанию.Мы можем полностью снять с клиента
                            все вопросы по обустройству недвижимости. Клиент доверяет
                            нам ключи от «голой» квартиры, а приезжает уже в полностью 
                            готовую к проживанию.
                        </>
                    ) : (
                        <>
                            We can completely take care of all the client's issues
                            regarding real estate arrangement. The client trusts us
                            with the keys to the "bare" apartment, and arrives already
                            in a fully prepared place for living. We can completely
                            take care of all the client's issues regarding real estate
                            arrangement. The client trusts us with the keys to the
                            "bare" apartment, and arrives already in a fully prepared
                            place for living.
                        </>
                    )}
                </p>
                <div className="button-container-cooperation-mobile" onClick={handleButtonClick}>
                    <p className="button-container-cooperation-text-mobile">
                        {language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}
                    </p>
                    <img
                        src="./img/Button_circle.png"
                        alt="button_circle"
                        className="button-image-cooperation-mobile"
                    />
                </div>
            </div>
            {isPopupVisible && (
            <div className="popup-overlay-mobile" onClick={handlePopupClose}>
              <div className="popup-content-mobile" onClick={(e) => e.stopPropagation()}>
                <p className="popup-overlay-text-mobile">{language === 'ru' ? 'СВЯЖИТЕСЬ С НАМИ' : 'CONTACT US'}</p>
                <img
                  src="./img/close-button.png"
                  alt="close-button-overlay"
                  className="close-button-mobile"
                  onClick={handlePopupClose}
                />
                <form>
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
                  <label className='label-container'>
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
                  <button type="submit">{language === 'ru' ? 'Отправить' : 'Send'}</button>
                </form>
              </div>
            </div>
          )}
        </div>
    );
};

export default CooperationMobile;
