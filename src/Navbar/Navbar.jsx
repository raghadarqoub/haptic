import React, { useState } from 'react';
import '../Navbar/Navbar.css'; // استيراد ملف CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <nav className="navbar">
      <div className="logo">Haptic</div>
      {isOpen && (
        <div className="nav-links">
          {['Home', 'Work', 'Pricing', 'Careers'].map((name) => (
            <button
              key={name}
              className={`nav-button ${
                selectedButton === name ? 'selected' : 'dark'
              }`}
              onClick={() => handleButtonClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}

<div className="menu-toggle">
  <button onClick={toggleMenu} className="menu-button">
    <div className={`icon-plus ${isOpen ? 'open' : ''}`}>
      <span className="bar bar1"></span>
      <span className="bar bar2"></span>
    </div>
  </button>
</div>
    </nav>
  );
};
export default Navbar;
