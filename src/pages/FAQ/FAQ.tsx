import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: '01 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС',
      answer: 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.',
    },
    {
      question: '02 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС',
      answer: 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.',
    },
    {
      question: '03 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС',
      answer: 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faq-section'>
      <p className='faq-head'>FAQ</p>
      <div className='faq-drop-menu'>
        {faqData.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              {faq.question}
              <img src="./img/arrow_down.png" alt="arrow-down" className={`animated-arrow-to-up ${openIndex === index ? 'rotate' : ''}`}/>
            </div>
            {openIndex === index && (
              <div className='faq-answer' dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
