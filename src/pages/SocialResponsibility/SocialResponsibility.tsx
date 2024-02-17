import React from 'react';
import './SocialResponsibility.css';

const SocialResponsibility: React.FC = () => {
  return (
    <div className='socialresponsibility-section'>
        <p className='socialresponsibility-head'>СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</p>
        <div className='socialresponsibility-text-container'>
            <p className='socialresponsibility-digit'>01</p>
            <p className='socialresponsibility-text'>
                Работа в соответствии с законодательством Черногории
            </p>
        </div>
        <div className='socialresponsibility-text-container'>
            <p className='socialresponsibility-digit'>02</p>
            <p className='socialresponsibility-text'>
                Поставка товаров, имеющих экологические сертификаты
            </p>
        </div>
        <div className='socialresponsibility-text-container'>
            <p className='socialresponsibility-digit'>03</p>
            <p className='socialresponsibility-text'>
                Бережное отношение к менталитету страны, в которой ведем бизнес
            </p>
        </div>
        <div className='socialresponsibility-text-container'>
            <p className='socialresponsibility-digit'>04</p>
            <p className='socialresponsibility-text'>
                Высокий уровень профессионализма и ответственности команды 
                для достижения качественных результатов
            </p>
        </div>
    </div>
  );
};

export default SocialResponsibility;