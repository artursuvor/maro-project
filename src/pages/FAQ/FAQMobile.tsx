import React, { useState } from 'react';
import { useLanguage } from '../../components/Language.tsx';

import './FAQMobile.css';

const FAQMobile: React.FC = () => {
    const { language } = useLanguage();
    const faqData = [
        {
            question: language === 'ru' ? '01 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС' : '01 FREQUENTLY ASKED QUESTION',
            answer: language === 'ru' ? 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.' : 'Completion of the <strong>Design</strong> stage and transition to the <strong>Implementation</strong> stage: organizing and controlling work on the project, ordering finishing materials, furniture, etc.'
        },
        {
            question: language === 'ru' ? '02 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС' : '02 FREQUENTLY ASKED QUESTION',
            answer: language === 'ru' ? 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.' : 'Completion of the <strong>Design</strong> stage and transition to the <strong>Implementation</strong> stage: organizing and controlling work on the project, ordering finishing materials, furniture, etc.'
        },
        {
            question: language === 'ru' ? '03 ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС' : '03 FREQUENTLY ASKED QUESTION',
            answer: language === 'ru' ? 'Закрытие этапа <strong>Проектирование</strong> и переход в этап <strong>Реализации</strong> организация и контроль работ по проекту, заказ отделочных материалов, мебели и пр.' : 'Completion of the <strong>Design</strong> stage and transition to the <strong>Implementation</strong> stage: organizing and controlling work on the project, ordering finishing materials, furniture, etc.'
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='faq-section-mobile'>
            <p className='faq-head-mobile'>FAQ</p>
            <div className='faq-drop-menu-mobile'>
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq-item-mobile ${openIndex === index ? 'open' : ''}`}>
                        <div className='faq-question-mobile' onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <img src="./img/arrow_down.png" alt="arrow-down" className={`animated-arrow-to-up-mobile ${openIndex === index ? 'rotate' : ''}`} />
                        </div>
                        {openIndex === index && (
                            <div className='faq-answer-mobile' dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQMobile;
