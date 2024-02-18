import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Portfolio.css';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';

interface RealEstateItem {
  residentialComplex: string;
  address: string;
  sizeSquareMeters: string;
  photoUrl?: string; // Optional, as not all items might have a photo
}

const Portfolio: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<'commercial' | 'apartment' | 'villa'>('apartment');
  const [apartmentDataState] = useState<RealEstateItem[]>(apartmentData);
  const [villaDataState] = useState<RealEstateItem[]>(villaData);
  const [commercialDataState] = useState<RealEstateItem[]>(commercialData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderComponent = (data: RealEstateItem[]) => {
    return data.map((item, index) => (
      
      <div key={index} className="portfolio-page-item">
        <Link
          to={`/portfolio/${selectedComponent}/${index}`}
          state={{
            type: selectedComponent,
            id: index,
            residentialComplex: item.residentialComplex,
            address: item.address,
            sizeSquareMeters: item.sizeSquareMeters,
          }}
        >
        <div
          className={`portfolio-page-text-renderComponent ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <p className='portfolio-page-residentialComplex'>{item.residentialComplex}</p>
          <p className='portfolio-page-address'>{item.address}</p>
          <p className='portfolio-page-sizeSquareMeters'>{item.sizeSquareMeters}</p>
        </div>
        {item.photoUrl && (
          <>
            
              <img
                src={item.photoUrl}
                alt={`real-estate-${index}`}
                className={`portfolio-page-image-renderComponent portfolio-image-${index}`}
              />
            
            <div className="portfolio-page-read-more">
              <Link to={`/portfolio/${selectedComponent}/${index}`} className="read-more-link">
                Подробнее
              </Link>
              <img src='./img/white-arrow-up.png' alt='white-arrow-up' className= "portfolio-page-white-arrow-up"/>
            </div>
          </>
        )}
        </Link>
      </div>
      
    ));
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'apartment':
        return renderComponent(apartmentDataState);
      case 'villa':
        return renderComponent(villaDataState);
      case 'commercial':
        return renderComponent(commercialDataState);
      default:
        return null;
    }
  };
  return (
    <div className="portfolio-page-section">
      <div className="portfolio-page-container">
        <img src="./img/portfolio-page-1.png" alt="page-background" className='portfolio-page-background' />
        <div className="portfolio-page-text-overlay">
          <p className='portfolio-page-heading'>ПОРТФОЛИО</p>
          <p className='portfolio-page-text'>
            Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. 
            Клиент доверяет нам ключи от «голой» квартиры,<br/>
            а приезжает уже в полностью готовую к проживанию.
          </p>
        </div>
      </div>
      <div className="portfolio-page-switcher-container">
        <button
          onClick={() => setSelectedComponent('apartment')}
          className={selectedComponent === 'apartment' ? 'selected' : ''}
        >
          Квартиры
        </button>
        <button
          onClick={() => setSelectedComponent('villa')}
          className={selectedComponent === 'villa' ? 'selected' : ''}
        >
          Виллы
        </button>
        <button
          onClick={() => setSelectedComponent('commercial')}
          className={selectedComponent === 'commercial' ? 'selected' : ''}
        >
          Коммерческая недвижимость
        </button>
      </div>
        <div className='portfolio-page-grid-container'>{renderSelectedComponent()}</div>
    </div>
  );
};

  export default Portfolio;