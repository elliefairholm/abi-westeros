import React from 'react';
import './Header.css';
import whatHouseTitle from '../../../assets/what-house-title.png'

// import api service

function Header () {

  // state for the people

  // use effect that gets all the people

  return (
    <div className="header-container">
      <div className="header-image-container">
        <img src={whatHouseTitle} alt="What House Are You..."></img>
      </div>
    </div>
  );
}

export default Header;
