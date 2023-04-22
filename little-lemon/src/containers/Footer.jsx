import React from 'react'
import { Link } from "react-router-dom";
import logo2 from '../assets/Rectangle.png';
import "./footer.css";

const Footer = () => {

  return(
    <div className="footer_container">
        <div className="footer_container_logo">
          <img src={logo2} alt="Little Lemon" />
        </div>
      <div className="footer_container_links">
        <div className="footer_container_nav">
          <ul>
            <li>Navigation</li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reservations">Reservations</Link>
              <Link to="/login">Login</Link>
          </ul>
        </div>
        <div className="footer_container_contact">
          <ul>
            <li>Contact</li>
              <Link to="https://www.google.com/maps/dir//Chicago,+IL,+USA/@41.8337754,-88.0609151,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!2m2!1d-87.6297982!2d41.8781136">Address</Link>
              <Link to="tel:5555555">Phone</Link>
              <Link to="mailto:email@littlelemon.com">Email</Link>
          </ul>
        </div>
        <div className="footer_container_social">
          <ul>
            <li>Social</li>
              <Link to="https:/www.twitter.com">Twitter</Link>
              <Link to="https:/www.instagram.com">Instagram</Link>
              <Link to="https:/www.facebook.com">Facebook</Link>
              <Link to="https:/www.yelp.com">Yelp</Link>
          </ul>
        </div>
      </div>
    </div>
  );

  

}

export default Footer;