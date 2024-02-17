import React, { useState } from 'react';
import './Cooperation.css';

const Cooperation: React.FC = () => {
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
    <div className='cooperation-section'>
        <p className='cooperation-head'>Сотрудничество</p>
        <div className='cooperation-container-text-btn'>
            <p className='cooperation-container-text'>
                Мы можем полностью снять с клиента все вопросы
                по обустройству недвижимости. Клиент доверяет нам ключи
                от «голой» квартиры, а приезжает уже в полностью готовую
                к проживанию.Мы можем полностью снять с клиента
                все вопросы по обустройству недвижимости. Клиент доверяет
                нам ключи от «голой» квартиры, а приезжает уже в полностью 
                готовую к проживанию.
            </p>
            <div className="button-container-cooperation" onClick={handleButtonClick}>
              <p className="button-container-cooperation-text">СВЯЖИТЕСЬ С НАМИ</p>
              <img
                src="./img/Button_circle.png"
                alt="button_circle"
                className="button-image-cooperation"
              />
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
  );
};

export default Cooperation;