import React, { useState } from "react";

interface Answers {
  [key: string]: string | string[] | undefined;
}

const PopupQuiz = ({ isPopupVisibleQuiz, handlePopupCloseQuiz }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  const handleNextStep = () => {
    if (currentStep < 5) {
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
          return {
            ...prevAnswers,
            [name]: currentValues.filter(
              (selectedValue) => selectedValue !== value,
            ),
          };
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
              src="/img/close-button.png"
              alt="close-button-overlay"
              className="close-button"
              onClick={handlePopupCloseQuiz}
            />
            <p className="popup-overlay-quiz-head">ПРОЙДИТЕ НАШ ОПРОС</p>
            <p className="popup-overlay-quiz-head-2">
              чтобы вы получить бесплатную консультацию и скидку на
              дизайн-проект
            </p>
            <p className="popup-overlay-quiz-steps">{currentStep} шаг из 5</p>
            {currentStep === 1 && (
              <div>
                <p className="popup-overlay-quiz-heading">
                  ПО КАКОМУ ВОПРОСУ ВАМ НУЖНА КОНСУЛЬТАЦИЯ?
                </p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="question"
                    value="Дизайн-проект"
                    checked={
                      (answers["question"] as string[])?.includes(
                        "Дизайн-проект",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Дизайн-проект
                </label>
                <label>
                  <input
                    type="radio"
                    name="question"
                    value="Подбор мебели и предметов интерьера"
                    checked={
                      (answers["question"] as string[])?.includes(
                        "Подбор мебели и предметов интерьера",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Подбор мебели и предметов интерьера
                </label>
                <label>
                  <input
                    type="radio"
                    name="question"
                    value="Кухни"
                    checked={
                      (answers["question"] as string[])?.includes("Кухни") ||
                      false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Кухни
                </label>
                <label>
                  <input
                    type="radio"
                    name="question"
                    value="Другой"
                    checked={
                      (answers["question"] as string[])?.includes("Другой") ||
                      false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Другой
                </label>
                <input
                  type="text"
                  name="question1"
                  placeholder="Ваш ответ"
                  value={(answers["question1"] as string) || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, question1: e.target.value })
                  }
                />
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <p className="popup-overlay-quiz-heading">ТИП ОБЪЕКТА</p>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Квартира"
                    checked={
                      (answers["type"] as string[])?.includes("Квартира") ||
                      false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Квартира
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Дом"
                    checked={
                      (answers["type"] as string[])?.includes("Дом") || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Дом
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Коммерческое (ресторан, магазин, офис и пр.)"
                    checked={
                      (answers["type"] as string[])?.includes("type") || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Коммерческое (ресторан, магазин, офис и пр.)
                </label>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <p className="popup-overlay-quiz-heading">
                  НА КАКОМ ЭТАПЕ НАХОДИТСЯ ВАШ ПРОЕКТ?
                </p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Строится"
                    checked={
                      (answers["step"] as string[])?.includes("Строится") ||
                      false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Строится
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Готов, но без отделки"
                    checked={
                      (answers["step"] as string[])?.includes(
                        "Готов, но без отделки",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Готов, но без отделки
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Полностью готов (с отделкой)"
                    checked={
                      (answers["step"] as string[])?.includes(
                        "Полностью готов (с отделкой)",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Полностью готов (с отделкой)
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Готов, отделка есть, нужны небольшие изменения"
                    checked={
                      (answers["step"] as string[])?.includes(
                        "Готов, отделка есть, нужны небольшие изменения",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Готов, отделка есть, нужны небольшие изменения
                </label>
                <label>
                  <input
                    type="radio"
                    name="step"
                    value="Другое"
                    checked={
                      (answers["step"] as string[])?.includes("Другое") || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Другое (указать)
                </label>
                <input
                  type="text"
                  name="question3"
                  placeholder="Ваш ответ"
                  value={answers["question3"] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, question3: e.target.value })
                  }
                />
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <p className="popup-overlay-quiz-heading">
                  КАКИЕ РАБОТЫ ПО ДИЗАЙН-ПРОЕКТУ ВАС ИНТЕРЕСУЮТ?
                </p>
                {/* Checkbox для выбора стилей интерьера */}
                <label>
                  <input
                    type="radio"
                    name="work"
                    value="Разработка полного проекта и его реализация (чертежами, 3D-визуализация, подбором всего необходимого, надзор за ходом ремонтных работ по проекту)"
                    checked={
                      (answers["work"] as string[])?.includes(
                        "Разработка полного проекта и его реализация (чертежами, 3D-визуализация, подбором всего необходимого, надзор за ходом ремонтных работ по проекту)",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Разработка полного проекта и его реализация <br />
                  (чертежами, 3D-визуализация, подбором всего необходимого,{" "}
                  <br />
                  надзор за ходом ремонтных работ по проекту)
                </label>
                <label>
                  <input
                    type="radio"
                    name="work"
                    value="Разработка концепции интерьера и подбор мебели и предметов интерьера под концепцию из ассортимента студии;"
                    checked={
                      (answers["work"] as string[])?.includes(
                        "Разработка концепции интерьера и подбор мебели и предметов интерьера под концепцию из ассортимента студии;",
                      ) || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Разработка концепции интерьера и подбор мебели и предметов
                  <br /> интерьера под концепцию из ассортимента студии;
                </label>
                <label>
                  <input
                    type="radio"
                    name="work"
                    value="Другое"
                    checked={
                      (answers["work"] as string[])?.includes("Другое") || false
                    }
                    onChange={handleCheckboxChange}
                  />
                  Другое (указать)
                </label>
                <input
                  type="text"
                  name="question4"
                  placeholder="Ваш ответ"
                  value={answers["question4"] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, question4: e.target.value })
                  }
                />
              </div>
            )}
            {currentStep === 5 && (
              <div>
                <p className="popup-overlay-quiz-heading">
                  ОСТАВЬТЕ СВОИ КОНТАКТНЫЕ ДАННЫЕ ДЛЯ ПОЛУЧЕНИЯ БЕСПЛАТНОЙ
                  КОНСУЛЬТАЦИИ И ПРЕДВАРИТЕЛЬНОГО РАСЧЁТА:
                </p>
                <div className="popup-overlay-quiz-heading-inputs">
                  <div>
                    <p className="popup-overlay-quiz-input-text">Ваше имя</p>
                    <input
                      type="name"
                      name="question9"
                      value={answers["question9"] || ""}
                      onChange={(e) =>
                        setAnswers({ ...answers, question9: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <p className="popup-overlay-quiz-input-text">Ваша почта</p>
                    <input
                      type="email"
                      name="question10"
                      placeholder=""
                      value={answers["question10"] || ""}
                      onChange={(e) =>
                        setAnswers({ ...answers, question10: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <p className="popup-overlay-quiz-input-text">Ваш телефон</p>
                    <input
                      type="number"
                      name="question11"
                      value={answers["question11"] || ""}
                      onChange={(e) =>
                        setAnswers({ ...answers, question11: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 5 ? (
              <>
                <button onClick={handlePrevStep} className="quiz-button-back-1">
                  Назад
                </button>
                <button onClick={handleSubmit} className="quiz-button-send">
                  Отправить
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="quiz-button-back"
                >
                  Назад
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStep === 5}
                  className="quiz-button"
                >
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
