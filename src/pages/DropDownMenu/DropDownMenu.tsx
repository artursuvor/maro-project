// DropDownMenu.tsx
import React, { useState } from 'react';
import './DropDownMenu.css';

interface DropDownMenuProps {
  title: string;
  content: string[];
  menuStates: boolean[];
  setMenuStates: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ title, content, menuStates, setMenuStates }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newMenuStates = menuStates.map((state, index) => index === menuStates.indexOf(true) ? !state : state);
    setMenuStates(newMenuStates);
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-down-wrapper">
      <div className={`drop-down-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <p>{title}</p>
        <p>ОТ 500 €/М²</p>
        <img src="./img/arrow_down.png" alt="arrow" className='animated-arrow'/>
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <div className="lines"></div>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img src="./img/services.jpg" alt="services-drop-down" />
        
      </div>
    </div>
  );
};

export default DropDownMenu;
