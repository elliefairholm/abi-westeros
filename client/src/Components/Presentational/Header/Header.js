import React from 'react';
import './Header.css';
import whatHouseTitle from '../../../assets/what-house-title.png'

function Header () {

  return (
    <div className="header-container">
      <div className="header-image-container">
        <img src={whatHouseTitle} alt="What House Are You..."></img>
      </div>
    </div>
  );
}

export default Header;
