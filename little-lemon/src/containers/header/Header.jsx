import React from 'react';
import './header.css';
import foodserve from '../../assets/foodserve.png';

const Header = () => {
  return (
    <div className="ll__header section__padding" id='home'>
      <div className="ll__header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button type='button' id='default-primary-button'><a href="#reservations">Reserve a Table</a></button>  
      </div>
      <div className="ll__header-image">
        <img src={foodserve} alt="Serving food" />
      </div>
    </div>
  )
}

export default Header