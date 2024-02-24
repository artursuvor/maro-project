import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import commercialData from '../Portfolio/Commercial/Commercial.tsx';
import apartmentData from '../Portfolio/Apartment/Apartment.tsx';
import villaData from '../Portfolio/Villa/Villa.tsx';
import { useLanguage } from '../../components/Language.tsx'; 
import './Portfolio.css';

interface RealEstateItem {
  residentialComplex: string;
  address: string;
  sizeSquareMeters: string;
  photoUrl?: string; // Optional, as not all items might have a photo
}

const Portfolio: React.FC = () => {
  const { language } = useLanguage(); 
  // const [selectedComponent, setSelectedComponent] = useState<'commercial' | 'apartment' | 'villa'>('apartment');
  const [selectedComponent, setSelectedComponent] = useState<'apartment' | 'villa'>('apartment');
  const [apartmentDataState] = useState<RealEstateItem[]>(apartmentData);
  const [villaDataState] = useState<RealEstateItem[]>(villaData);
  const [commercialDataState] = useState<RealEstateItem[]>(commercialData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1000);
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
  
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const updateTextColor = () => {
        const elements = document.querySelectorAll('.para');
        elements.forEach((element: Element) => {
          const rect = (element as HTMLElement).getBoundingClientRect();
            const isElementVisible = rect.bottom <= 720;
            
            if (isElementVisible) {
              element.classList.add('visible');
            } else {
              element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', updateTextColor);

      return () => {
          window.removeEventListener('scroll', updateTextColor);
      };
  }, []);

  useEffect(() => {
    const updateTextColor = () => {
      const elements = document.querySelectorAll('.portfolio-page-item'); 
      elements.forEach((element: Element) => {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const isElementVisible = rect.bottom <= 1120;

        if (isElementVisible) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', updateTextColor);

    return () => {
      window.removeEventListener('scroll', updateTextColor);
    };
  }, []);


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
              <Link to={``} className="read-more-link">
                {language === 'ru' ? 'Подробнее' : 'Details'} 
              </Link>
              <img src='/img/white-arrow-up.png' alt='white-arrow-up' className= "portfolio-page-white-arrow-up"/>
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
      // case 'commercial':
      //   return renderComponent(commercialDataState);
      default:
        return null;
    }
  };
  return (
    <div className="portfolio-page-section">
      <img 
        src="./img/buttuon_up.png" 
        alt="button_circle_up" 
        onClick={scrollToTop} 
        className={isSticky ? 'button-up' : "button-up-hide"}
      />
      <div className="portfolio-page-container">
        <img src="/img/portfolio-page-1.png" alt="page-background" className='portfolio-page-background' />
        <div className="portfolio-page-text-overlay">
          <p className='portfolio-page-heading'>{language === 'ru' ? 'ПОРТФОЛИО' : 'Portfolio'}</p>
          <p className='portfolio-page-text'>
            {language === 'ru' ? 'Мы можем полностью снять с клиента все вопросы по обустройству недвижимости. Клиент доверяет нам ключи от «голой» квартиры,\nа приезжает уже в полностью готовую к проживанию.' : 'We can completely take care of all the client\'s questions regarding real estate arrangement. The client trusts us with the keys to the "bare" apartment, and arrives already in a fully prepared living space.'}
          </p>
        </div>
      </div>
      <div className="portfolio-page-switcher-container">
        <button
          onClick={() => setSelectedComponent('apartment')}
          className={selectedComponent === 'apartment' ? 'selected' : ''}
        >
          {language === 'ru' ? 'Квартиры' : 'Apartments'}
        </button>
        <button
          onClick={() => setSelectedComponent('villa')}
          className={selectedComponent === 'villa' ? 'selected' : ''}
        >
          {language === 'ru' ? 'Виллы' : 'Villas'}
        </button>
        {/* <button
          onClick={() => setSelectedComponent('commercial')}
          className={selectedComponent === 'commercial' ? 'selected' : ''}
        >
          {language === 'ru' ? 'Коммерческая недвижимость' : 'Commercial real estate'}
        </button> */}
      </div>
        <div className='portfolio-page-grid-container'>{renderSelectedComponent()}</div>
    </div>
  );
};

export default Portfolio;
