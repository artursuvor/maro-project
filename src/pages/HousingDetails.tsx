import React from 'react';

const HousingDetails = ({ type, data }) => {
  const limitedData = data.slice(0, 2);

  return (
    <div className={`${type}-details`}>
      {limitedData.map((item) => (
        <div key={item.id} className="portfolio-section-image-container">
          <img src={item.photoUrl} alt={`${type}${item.id}`} className={`${type}-image${item.id}`} />
          <div className="text-overlay">
            <p>Дизайн №{item.id}</p>
            <p>{item.sizeSquareMeters}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousingDetails;
