import React from 'react';
import { useLanguage } from '../components/Language.tsx';

const HousingDetails = ({ type, data }) => {
  const { language } = useLanguage();
  const limitedData = data.slice(0, 2);
  return (
    <div className={`${type}-details`}>
      {limitedData.map((item) => (
        <div key={item.id} className="portfolio-section-image-container">
          <img src={item.photoUrl} alt={`${type}${item.id}`} className={`house-image${item.id}`} />
          <div className="text-overlay">
            <p>{language === 'ru' ? 'Дизайн №' : 'Design №'}{item.id}</p>
            <p>{item.sizeSquareMeters}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousingDetails;
