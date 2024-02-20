import React from 'react';
import { useLanguage } from '../../components/Language.tsx';
import './SocialResponsibilityMobile.css';

const SocialResponsibilityMobile: React.FC = () => {
    const { language } = useLanguage();
    
    const socialResponsibilityData = [
        {
            digit: '01',
            text: language === 'ru' ? 'Работа в соответствии с законодательством Черногории' : 'Working in accordance with the legislation of Montenegro'
        },
        {
            digit: '02',
            text: language === 'ru' ? 'Поставка товаров, имеющих экологические сертификаты' : 'Supply of goods with environmental certificates'
        },
        {
            digit: '03',
            text: language === 'ru' ? 'Бережное отношение к менталитету страны, в которой ведем бизнес' : 'Careful attitude to the mentality of the country where we do business'
        },
        {
            digit: '04',
            text: language === 'ru' ? 'Высокий уровень профессионализма и ответственности команды для достижения качественных результатов' : 'High level of professionalism and responsibility of the team to achieve quality results'
        }
    ];

    return (
        <div className='socialresponsibility-section-mobile'>
            <p className='socialresponsibility-head-mobile'>{language === 'ru' ? 'СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ' : 'SOCIAL RESPONSIBILITY'}</p>
            {socialResponsibilityData.map((responsibility, index) => (
                <div key={index} className='socialresponsibility-text-container-mobile'>
                    <p className='socialresponsibility-digit-mobile'>{responsibility.digit}</p>
                    <p className='socialresponsibility-text-mobile'>{responsibility.text}</p>
                </div>
            ))}
        </div>
    );
};

export default SocialResponsibilityMobile;
