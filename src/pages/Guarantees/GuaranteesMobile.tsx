import React from 'react';
import { useLanguage } from '../../components/Language.tsx';
import './GuaranteesMobile.css';

const GuaranteesMobile: React.FC = () => {
    const { language } = useLanguage();
    
    const guaranteesData = [
        {
            digit: '01',
            text: language === 'ru' ? 'Каждая фабрика имеет гарантийный срок, в течение которого можно сделать замену товара ненадлежащего качества (если это относится к гарантийному случаю)' : 'Each factory has a warranty period during which it is possible to replace a product of improper quality (if it relates to a warranty case)'
        },
        {
            digit: '02',
            text: language === 'ru' ? 'Возможен возврат товара ненадлежащего качества' : 'Return of a product of improper quality is possible'
        },
        {
            digit: '03',
            text: language === 'ru' ? 'Товар надлежащего качества, привезённый непосредственно под заказ под конкретного клиента, возврату не подлежит' : 'A product of proper quality, delivered directly under the order for a specific client, is not subject to return'
        }
    ];

    return (
        <div className='guarantees-section-mobile'>
            <p className='guarantees-head-mobile'>{language === 'ru' ? 'ГАРАНТИИ' : 'Guarantees'}</p>
            {guaranteesData.map((guarantee, index) => (
                <div key={index} className='guarantees-text-container-mobile'>
                    <p className='guarantees-digit-mobile'>{guarantee.digit}</p>
                    <p className='guarantees-text-mobile'>{guarantee.text}</p>
                </div>
            ))}
        </div>
    );
};

export default GuaranteesMobile;
