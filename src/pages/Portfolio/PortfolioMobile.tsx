import React, { useState, useEffect } from 'react';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import { useLanguage } from '../../components/Language.tsx'; 
import './PortfolioMobile.css';

interface RealEstateItem {
  residentialComplex: string;
  address: string;
  sizeSquareMeters: string;
  photoUrl?: string; // Optional, as not all items might have a photo
}

const PortfolioMobile: React.FC = () => {
  const { language } = useLanguage(); 
  const [selectedComponent, setSelectedComponent] = useState<'commercial' | 'apartment' | 'villa'>('apartment');
  const [apartmentDataState] = useState<RealEstateItem[]>(apartmentData);
  const [villaDataState] = useState<RealEstateItem[]>(villaData);
  const [commercialDataState] = useState<RealEstateItem[]>(commercialData);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = (data: RealEstateItem[]) => {
    const shuffledData = data.sort(() => 0.5 - Math.random()); 
    const selectedItems = shuffledData.slice(0, 3);
  
    return selectedItems.map((item, index) => (
      <div key={index} className="portfolio-page-item-mobile">
        {item.photoUrl && (
          <>
            <img
              src={item.photoUrl}
              alt={`real-estate-${index}-mobile`}
              className={`portfolio-page-image-renderComponent-mobile portfolio-image-${index}`}
            />
          </>
        )}
        <div className='portfolio-page-text-renderComponent-mobile'>
          <p className='portfolio-page-residentialComplex-mobile'>{item.residentialComplex}</p>
          <p className='portfolio-page-address-mobile'>{item.address}</p>
          <p className='portfolio-page-sizeSquareMeters-mobile'>{item.sizeSquareMeters}</p>
        </div>
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
    <div className="portfolio-page-section-mobile">
      <img 
        src="./img/buttuon_up.png" 
        alt="button_circle_up" 
        onClick={scrollToTop} 
        className={isSticky ? 'button-up-mobile' : "button-up-hide-mobile"}
      />
      <div className="portfolio-page-container-mobile">
        <img src="/img/portfolio-page-1.png" alt="page-background" className='portfolio-page-background-mobile' />
        <div className="portfolio-page-text-overlay-mobile">
          <p className='portfolio-page-heading-mobile'>{language === 'ru' ? 'ПОРТФОЛИО' : 'Portfolio'}</p>
          <p className='portfolio-page-text-mobile'>
            {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы по обустройству недвижимости.' : 'We can completely take care of all the client\'s questions regarding real estate arrangement.'}
          </p>
        </div>
      </div>
      <div className="portfolio-page-switcher-container-mobile">
        <select value={selectedComponent} onChange={handleChange}>
          <option value="apartment">{language === 'ru' ? 'Квартиры' : 'Apartments'}</option>
          <option value="villa">{language === 'ru' ? 'Виллы' : 'Villas'}</option>
          <option value="commercial">{language === 'ru' ? 'Коммерческая недвижимость' : 'Commercial real estate'}</option>
        </select>
      </div>
        <div className='portfolio-page-grid-container-mobile'>{renderSelectedComponent()}</div>
    </div>
  );
};

export default PortfolioMobile;
