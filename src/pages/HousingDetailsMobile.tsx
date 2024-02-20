import React from 'react';
import { useLanguage } from '../components/Language.tsx';

const HousingDetailsMobile = ({ type, data }) => {
  const { language } = useLanguage();
  const limitedData = data.slice(0, 2);

  return (
    <div className={`${type}-details-mobile`}>
      {limitedData.map((item) => (
        <div key={item.id} className="portfolio-section-image-container-mobile">
          <img src={item.photoUrl} alt={`${type}${item.id}`} className={`${type}-image${item.id}`} />
          <div className="text-overlay-mobile">
            <p>{language === 'ru' ? 'Дизайн №' : 'Design №'}{item.id}</p>
            <p>{item.sizeSquareMeters}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousingDetailsMobile;
