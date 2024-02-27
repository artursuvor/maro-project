import React, { useState } from 'react';

interface Answers {
    [key: string]: string | string[] | undefined;
}

const PopupQuiz = ({ isPopupVisibleQuiz, handlePopupCloseQuiz }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  const handleNextStep = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setAnswers((prevAnswers) => {
        const currentValues = prevAnswers[name];
      
        if (checked) {
          if (Array.isArray(currentValues)) {
            return { ...prevAnswers, [name]: [...currentValues, value] };
          } else {
            return { ...prevAnswers, [name]: [value] };
          }
        } else {
          if (Array.isArray(currentValues)) {
            return { ...prevAnswers, [name]: currentValues.filter((selectedValue) => selectedValue !== value) };
          } else {
            return { ...prevAnswers, [name]: [] };
          }
        }
      });
  };

  const handleSubmit = () => {
    // Выполните дополнительные действия перед отправкой данных, если необходимо
    // Например, отправка данных на сервер или обработка данных

    // Или очистка состояния формы
    // setAnswers({});
  };

  return (
    <>
      {isPopupVisibleQuiz && (
        <div className="popup-overlay-quiz">
          <div className="popup-content-quiz">
            <img
                src="./img/close-button.png"
                alt="close-button-overlay"
                className="close-button"
                onClick={handlePopupCloseQuiz}
            />
            <p className='popup-overlay-quiz-head'>ПРОЙДИТЕ НАШ ОПРОС</p>
            <p className='popup-overlay-quiz-head-2'>чтобы вы получить бесплатную консультацию и скидку на дизайн-проект</p>
            <p className='popup-overlay-quiz-steps'>{currentStep} шаг из 9</p>
            {currentStep === 1 && (
                <div>
                    <p>Какова общая площадь помещения, которое требуется обустроить?</p>
                    <p>(в квадратных метрах)</p>
                    <input
                        type="text"
                        name="question1"
                        placeholder='Ваш ответ'
                        value={answers['question1'] || ''}
                        onChange={(e) => setAnswers({ ...answers, question1: e.target.value })}
                    />
                </div>
            )}
            {currentStep === 2 && (
              <div>
                <p>Какие стили интерьера вам ближе всего? (Выберите несколько вариантов)</p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="минимализм"
                    checked={(answers['interiorStyles'] as string[])?.includes('минимализм') || false}
                    onChange={handleCheckboxChange}
                  />
                  Минимализм
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="минимализм"
                    checked={(answers['interiorStyles'] as string[])?.includes('минимализм') || false}
                    onChange={handleCheckboxChange}
                  />
                  Минимализм
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="современный"
                    checked={(answers['interiorStyles'] as string[])?.includes('современный') || false}
                    onChange={handleCheckboxChange}
                  />
                  Современный
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="эклектика"
                    checked={(answers['interiorStyles'] as string[])?.includes('эклектика') || false}
                    onChange={handleCheckboxChange}
                  />
                  Эклектика
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="классика"
                    checked={(answers['interiorStyles'] as string[])?.includes('классика') || false}
                    onChange={handleCheckboxChange}
                  />
                  Классика
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="лофт"
                    checked={(answers['interiorStyles'] as string[])?.includes('лофт') || false}
                    onChange={handleCheckboxChange}
                  />
                  Лофт
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interiorStyles"
                    value="другой"
                    checked={(answers['interiorStyles'] as string[])?.includes('другой') || false}
                    onChange={handleCheckboxChange}
                  />
                  Другой
                </label>
                <input
                  type="text"
                  name="question2"
                  placeholder='Ваш ответ'
                  value={answers['question2'] as string || ''}
                  onChange={(e) => setAnswers({ ...answers, question2: e.target.value })}
                />
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <p>ЧТО ВАС БОЛЬШЕ ВСЕГО ИНТЕРЕСУЕТ ПРИ ОБУСТРОЙСТВЕ ИНТЕРЬЕРА?</p>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="Подбор мебели"
                    checked={(answers['interior'] as string[])?.includes('Подбор мебели') || false}
                    onChange={handleCheckboxChange}
                  />
                  Подбор мебели
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="Дизайн интерьера"
                    checked={(answers['interior'] as string[])?.includes('Дизайн интерьера') || false}
                    onChange={handleCheckboxChange}
                  />
                  Дизайн интерьера
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="Ремонтные работы"
                    checked={(answers['interior'] as string[])?.includes('Ремонтные работы') || false}
                    onChange={handleCheckboxChange}
                  />
                  Ремонтные работы
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="Украшение и декорирование"
                    checked={(answers['interior'] as string[])?.includes('Украшение и декорирование') || false}
                    onChange={handleCheckboxChange}
                  />
                  Украшение и декорирование
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="Технические аспекты (электрика, сантехника и т.д.)"
                    checked={(answers['interior'] as string[])?.includes('Технические аспекты (электрика, сантехника и т.д.)') || false}
                    onChange={handleCheckboxChange}
                  />
                  Технические аспекты (электрика, сантехника и т.д.)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="interior"
                    value="другой"
                    checked={(answers['interior'] as string[])?.includes('другой') || false}
                    onChange={handleCheckboxChange}
                  />
                  Другой
                </label>
                <input
                  type="text"
                  name="question3"
                  placeholder='Ваш ответ'
                  value={answers['question3'] as string || ''}
                  onChange={(e) => setAnswers({ ...answers, question3: e.target.value })}
                />
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <p>КАКИЕ МАТЕРИАЛЫ ПРЕДПОЧТИТЕЛЬНЕЕ ВСЕГО ДЛЯ ВАС?</p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="Натуральные дерево и камень"
                    checked={(answers['material'] as string[])?.includes('Натуральные дерево и камень') || false}
                    onChange={handleCheckboxChange}
                  />
                  Натуральные дерево и камень
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="Искусственные материалы (ламинат, пластик и т.д.)"
                    checked={(answers['material'] as string[])?.includes('Искусственные материалы (ламинат, пластик и т.д.)') || false}
                    onChange={handleCheckboxChange}
                  />
                  Искусственные материалы (ламинат, пластик и т.д.)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="Металл"
                    checked={(answers['material'] as string[])?.includes('Металл') || false}
                    onChange={handleCheckboxChange}
                  />
                  Металл
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="Стекло"
                    checked={(answers['material'] as string[])?.includes('Стекло') || false}
                    onChange={handleCheckboxChange}
                  />
                  Стекло
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="Ткань"
                    checked={(answers['material'] as string[])?.includes('Ткань') || false}
                    onChange={handleCheckboxChange}
                  />
                  Ткань
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value="другой"
                    checked={(answers['material'] as string[])?.includes('другой') || false}
                    onChange={handleCheckboxChange}
                  />
                  Другой
                </label>
                <input
                  type="text"
                  name="question4"
                  placeholder='Ваш ответ'
                  value={answers['question4'] as string || ''}
                  onChange={(e) => setAnswers({ ...answers, question4: e.target.value })}
                />
              </div>
            )}
            {currentStep === 5 && (
              <div>
                <p>ПРИБЛИЗИТЕЛЬНЫЙ БЮДЖЕТ НА ОБУСТРОЙСТВО ИНТЕРЬЕРА?</p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="money"
                    value="От 1000 до 5000 евро"
                    checked={(answers['money'] as string[])?.includes('От 1000 до 5000 евро') || false}
                    onChange={handleCheckboxChange}
                  />
                  От 1000 до 5000 евро
                </label>
                <label>
                  <input
                    type="radio"
                    name="money"
                    value="От 5000 до 10000 евро"
                    checked={(answers['money'] as string[])?.includes('От 5000 до 10000 евро') || false}
                    onChange={handleCheckboxChange}
                  />
                  От 5000 до 10000 евро
                </label>
                <label>
                  <input
                    type="radio"
                    name="money"
                    value="От 10000 до 20000 евро"
                    checked={(answers['money'] as string[])?.includes('От 10000 до 20000 евро') || false}
                    onChange={handleCheckboxChange}
                  />
                  От 10000 до 20000 евро
                </label>
                <label>
                  <input
                    type="radio"
                    name="money"
                    value="Больше 20000 евро"
                    checked={(answers['money'] as string[])?.includes('Больше 20000 евро') || false}
                    onChange={handleCheckboxChange}
                  />
                  Больше 20000 евро
                </label>
                <label>
                  <input
                    type="radio"
                    name="money"
                    value="Бюджет не ограничен"
                    checked={(answers['money'] as string[])?.includes('Бюджет не ограничен') || false}
                    onChange={handleCheckboxChange}
                  />
                  Бюджет не ограничен
                </label>
              </div>
            )}
            {currentStep === 6 && (
              <div>
                <p>В КАКОМ ТИПЕ ПОМЕЩЕНИЯ ВАМ НУЖЕН ДИЗАЙН?</p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="design"
                    value="Жилое пространство (квартира, дом)"
                    checked={(answers['design'] as string[])?.includes('Жилое пространство (квартира, дом)') || false}
                    onChange={handleCheckboxChange}
                  />
                  Жилое пространство (квартира, дом)
                </label>
                <label>
                  <input
                    type="radio"
                    name="design"
                    value="Офисное пространство"
                    checked={(answers['design'] as string[])?.includes('Офисное пространство') || false}
                    onChange={handleCheckboxChange}
                  />
                  Офисное пространство
                </label>
                <label>
                  <input
                    type="radio"
                    name="design"
                    value="Коммерческое пространство (ресторан, магазин и т.д.)"
                    checked={(answers['design'] as string[])?.includes('Коммерческое пространство (ресторан, магазин и т.д.)') || false}
                    onChange={handleCheckboxChange}
                  />
                  Коммерческое пространство (ресторан, магазин и т.д.)
                </label>
              </div>
            )}
            {currentStep === 7 && (
              <div>
                <p>НА КАКОМ ЭТАПЕ НАХОДИТСЯ ВАШ ПРОЕКТ?</p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Планирую начать с нуля"
                    checked={(answers['step'] as string[])?.includes('Планирую начать с нуля') || false}
                    onChange={handleCheckboxChange}
                  />
                  Планирую начать с нуля
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Уже начал(а), но нужна помощь"
                    checked={(answers['step'] as string[])?.includes('Уже начал(а), но нужна помощь') || false}
                    onChange={handleCheckboxChange}
                  />
                  Уже начал(а), но нужна помощь
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Практически завершен(а), нужны последние штрихи"
                    checked={(answers['step'] as string[])?.includes('Практически завершен(а), нужны последние штрихи') || false}
                    onChange={handleCheckboxChange}
                  />
                  Практически завершен(а), нужны последние штрихи
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Другое"
                    checked={(answers['step'] as string[])?.includes('Другое') || false}
                    onChange={handleCheckboxChange}
                  />
                  Другое
                </label>
                <input
                    type="text"
                    name="question7"
                    placeholder='Ваш ответ'
                    value={answers['question7'] || ''}
                    onChange={(e) => setAnswers({ ...answers, question7: e.target.value })}
                />
              </div>
            )}
            {currentStep === 8 && (
              <div>
                <p>КОГДА ПЛАНИРУЕТЕ НАЧАТЬ РАБОТЫ ПО ОБУСТРОЙСТВУ ИНТЕРЬЕРА?</p>
                <label>
                  <input
                    type="radio"
                    name="plans"
                    value="В течение 1 месяца"
                    checked={(answers['plans'] as string[])?.includes('В течение 1 месяца') || false}
                    onChange={handleCheckboxChange}
                  />
                  В течение 1 месяца
                </label>
                <label>
                  <input
                    type="radio"
                    name="plans"
                    value="В течение 3 месяцев"
                    checked={(answers['plans'] as string[])?.includes('В течение 3 месяцев') || false}
                    onChange={handleCheckboxChange}
                  />
                  Уже начал(а), но нужна помощь
                </label>
                <label>
                  <input
                    type="radio"
                    name="plans"
                    value="В течение 6 месяцев"
                    checked={(answers['plans'] as string[])?.includes('В течение 6 месяцев') || false}
                    onChange={handleCheckboxChange}
                  />
                  В течение 6 месяцев
                </label>
                <label>
                  <input
                    type="radio"
                    name="plans"
                    value="В течение года"
                    checked={(answers['plans'] as string[])?.includes('В течение года') || false}
                    onChange={handleCheckboxChange}
                  />
                  В течение года
                </label>
              </div>
            )}
            {currentStep === 9 && (
              <div>
                <p>ОСТАВЬТЕ СВОИ КОНТАКТНЫЕ ДАННЫЕ ДЛЯ ПОЛУЧЕНИЯ БЕСПЛАТНОЙ КОНСУЛЬТАЦИИ И ПРЕДВАРИТЕЛЬНОГО РАСЧЁТА:</p>
                <div>
                    <p>Ваше имя</p>
                    <input
                        type="name"
                        name="question9"
                        value={answers['question9'] || ''}
                        onChange={(e) => setAnswers({ ...answers, question9: e.target.value })}
                    />
                    <p>Ваша почта</p>
                    <input
                        type="email"
                        name="question10"
                        placeholder='' 
                        value={answers['question10'] || ''}
                        onChange={(e) => setAnswers({ ...answers, question10: e.target.value })} 
                    />
                </div>
                <p>Ваш телефон</p>
                <input
                    type="number"
                    name="question11" 
                    value={answers['question11'] || ''} 
                    onChange={(e) => setAnswers({ ...answers, question11: e.target.value })} 
                />
            </div>
            )}
            {currentStep === 9 ? (
                <>
                    <button onClick={handlePrevStep} className='quiz-button-back-1'>
                            Назад
                    </button>
                    <button onClick={handleSubmit} className='quiz-button-send'>Отправить</button>
                </>
                ) : (
                <>
                    <button onClick={handlePrevStep} disabled={currentStep === 1} className='quiz-button-back'>
                        Назад
                    </button>
                    <button onClick={handleNextStep} disabled={currentStep === 9} className='quiz-button'>
                        Далее
                    </button>
                </>
            )}
          </div>
          <div className="popup-overlay" onClick={handlePopupCloseQuiz}></div>
        </div>
      )}
    </>
  );
};

export default PopupQuiz;
