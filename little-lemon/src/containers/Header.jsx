import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import foodserve from '../assets/foodserve.png';

const Header = () => {
  return (
    <div className="header_container">
      <div className="header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to={`${process.env.PUBLIC_URL}/reservations`}><button type='button'>Reserve a Table</button></Link> 
      </div>
      <div className="header-image">
        <img src={foodserve} alt="Serving food" width="250px" />
      </div>
    </div>
  )
}

export default Header