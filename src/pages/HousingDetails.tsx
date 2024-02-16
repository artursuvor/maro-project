import React from 'react';

const HousingDetails = ({ type, data }) => {
  return (
    <div className={`${type}-details`}>
      {data.map((item) => (
        <div key={item.id} className="image-container">
          <img src={item.photoUrl} alt={`${type}${item.id}`} className={`${type}-image${item.id}`} />
          <div className="text-overlay">
            <p>Дизайн №1</p>
            <p>{item.sizeSquareMeters}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HousingDetails;
