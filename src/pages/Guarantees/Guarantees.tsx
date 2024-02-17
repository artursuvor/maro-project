import React from 'react';
import './Guarantees.css';

const Guarantees: React.FC = () => {
  return (
    <div className='guarantees-section'>
        <p className='guarantees-head'>ГАРАНТИИ</p>
        <div className='guarantees-text-container'>
            <p className='guarantees-digit'>01</p>
            <p className='guarantees-text'>
                Каждая фабрика имеет гарантийный срок, в течение которого можно 
                сделать замену товара ненадлежащего качества
                (если это относится к гарантийному случаю)
            </p>
        </div>
        <div className='guarantees-text-container'>
            <p className='guarantees-digit'>02</p>
            <p className='guarantees-text'>
                Возможен возврат товара ненадлежащего качества
            </p>
        </div>
        <div className='guarantees-text-container'>
            <p className='guarantees-digit'>03</p>
            <p className='guarantees-text'>
                Товар надлежащего качества, привезённый непосредственно 
                под заказ под конкретного клиента, возврату не подлежит
            </p>
        </div>
    </div>
  );
};

export default Guarantees;